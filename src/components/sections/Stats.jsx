import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useContent } from '../../context/ContentContext.jsx'

function AnimatedValue({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState('0')

  const numeric = parseInt(String(value).replace(/[^\d]/g, ''), 10)
  const prefix = String(value).match(/^[^\d]*/)?.[0] || ''
  const suffix = String(value).match(/[^\d]*$/)?.[0] || ''

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) {
      if (Number.isNaN(numeric)) setDisplay(value)
      return
    }
    let frame
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * numeric))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric, value])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { content } = useContent()

  return (
    <section className="border-y border-line bg-ink py-20">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {content.stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
                <AnimatedValue value={stat.value} />
              </p>
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

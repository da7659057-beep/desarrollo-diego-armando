import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useContent } from '../../context/ContentContext.jsx'
import { SectionHeading } from './Services.jsx'

export default function Testimonials() {
  const { content } = useContent()

  return (
    <section id="testimonios" className="section-pad bg-mist">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 03 testimonios"
          title="Lo que dicen quienes ya trabajaron conmigo"
          center
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card flex flex-col"
            >
              <Quote size={26} className="text-brand-300" strokeWidth={1.5} />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/80">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

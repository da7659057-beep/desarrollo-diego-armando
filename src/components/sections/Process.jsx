import React from 'react'
import { motion } from 'framer-motion'
import { useContent } from '../../context/ContentContext.jsx'
import { SectionHeading } from './Services.jsx'

export default function Process() {
  const { content } = useContent()

  return (
    <section id="proceso" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 04 proceso de trabajo"
          title="Cómo pasamos de una idea a un sitio en producción"
          description="Un proceso claro y ordenado, pensado para que sepas exactamente en qué etapa está tu proyecto en todo momento."
          center
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
          <div className="grid gap-10 lg:grid-cols-5">
            {content.process.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white font-mono text-sm font-semibold text-brand-600 shadow-softer">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

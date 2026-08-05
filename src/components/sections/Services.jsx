import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useContent } from '../../context/ContentContext.jsx'

export default function Services() {
  const { content } = useContent()

  return (
    <section id="servicios" className="section-pad bg-mist">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 01 servicios"
          title="Soluciones digitales para cada tipo de negocio"
          description="Desde una landing page hasta una plataforma completa con panel de administración: cada proyecto se construye a la medida de tu objetivo."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, i) => {
            const Icon = Icons[service.icon] || Icons.Code2
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card group hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-ink group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, center }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { useContent } from '../../context/ContentContext.jsx'
import { SectionHeading } from './Services.jsx'

export default function WhyChooseMe() {
  const { content } = useContent()

  return (
    <section id="por-que-elegirme" className="section-pad">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="// 02 por qué elegirme"
              title="Un aliado técnico, no solo un proveedor"
              description="Trabajo directamente contigo en cada etapa del proyecto, combinando diseño cuidado con desarrollo sólido para que tu web funcione tan bien como se ve."
            />
            <a href="#contacto" className="btn-primary mt-8 inline-flex">
              Hablemos de tu proyecto
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.whyChooseUs.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.CheckCircle2
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-xl2 border border-line p-6 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <Icon size={22} strokeWidth={1.8} className="text-brand-600" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

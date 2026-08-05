import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useContent } from '../../context/ContentContext.jsx'
import { SectionHeading } from './Services.jsx'

export default function FAQ() {
  const { content } = useContent()
  const [openId, setOpenId] = useState(content.faq[0]?.id ?? null)

  return (
    <section id="faq" className="section-pad bg-mist">
      <div className="container-page">
        <SectionHeading
          eyebrow="// 05 preguntas frecuentes"
          title="Todo lo que necesitas saber antes de empezar"
          center
        />

        <div className="mx-auto mt-14 max-w-2xl divide-y divide-line rounded-xl3 border border-line bg-white">
          {content.faq.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className="px-6">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-ink">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-mist text-ink"
                  >
                    <Plus size={15} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

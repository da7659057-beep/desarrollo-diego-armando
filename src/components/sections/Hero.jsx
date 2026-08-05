import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CircleDot } from 'lucide-react'
import { useContent } from '../../context/ContentContext.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { content } = useContent()
  const { hero, brand } = content

  const titleParts = hero.title.split(hero.highlight)

  return (
    <section id="inicio" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-50 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow mb-6">
              <CircleDot size={12} className="text-brand-500" />
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
            >
              {titleParts[0]}
              <span className="text-brand-500">{hero.highlight}</span>
              {titleParts[1]}
              <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 animate-blink bg-brand-500 align-middle" />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#contacto" className="btn-primary">
                {hero.ctaPrimary}
                <ArrowRight size={16} />
              </a>
              <a href="#proceso" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {hero.badges.map((b) => (
                <span key={b} className="font-mono text-xs uppercase tracking-wider text-muted">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl3 border border-line bg-ink shadow-glow">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-3 font-mono text-[11px] text-white/40">proyecto.jsx</span>
              </div>
              <div className="space-y-2 p-6 font-mono text-[13px] leading-relaxed text-white/70">
                <p><span className="text-brand-400">const</span> <span className="text-white">negocio</span> = {'{'}</p>
                <p className="pl-4">nombre: <span className="text-emerald-400">'{brand.name}'</span>,</p>
                <p className="pl-4">objetivo: <span className="text-emerald-400">'crecer online'</span>,</p>
                <p className="pl-4">diseño: <span className="text-brand-400">true</span>,</p>
                <p className="pl-4">rendimiento: <span className="text-emerald-400">'&lt; 2s'</span>,</p>
                <p>{'}'}</p>
                <p className="pt-2 text-white/40">// listo para producción ✓</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-soft sm:block"
            >
              <p className="text-2xl font-semibold text-ink">98%</p>
              <p className="text-xs text-muted">clientes satisfechos</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

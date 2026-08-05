import React from 'react'
import { Instagram, Linkedin, Github } from 'lucide-react'
import { useContent } from '../context/ContentContext.jsx'

export default function Footer() {
  const { content } = useContent()
  const { brand } = content
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]">
          <div>
            <img src="/logo-full.png" alt={brand.name} className="h-16 w-auto rounded-xl bg-ink p-2" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{brand.slogan}</p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={brand.social.instagram} icon={Instagram} />
              <SocialIcon href={brand.social.linkedin} icon={Linkedin} />
              <SocialIcon href={brand.social.github} icon={Github} />
            </div>
          </div>

          <FooterColumn
            title="Navegación"
            links={[
              { label: 'Servicios', href: '#servicios' },
              { label: 'Proceso', href: '#proceso' },
              { label: 'Testimonios', href: '#testimonios' },
              { label: 'Preguntas', href: '#faq' },
            ]}
          />

          <FooterColumn
            title="Servicios"
            links={[
              { label: 'Sitios corporativos', href: '#servicios' },
              { label: 'Tiendas online', href: '#servicios' },
              { label: 'Clubes deportivos', href: '#servicios' },
              { label: 'Paneles a medida', href: '#servicios' },
            ]}
          />

          <div>
            <p className="text-sm font-semibold text-ink">Contacto</p>
            <p className="mt-4 text-sm text-muted">{brand.email}</p>
            <p className="mt-2 text-sm text-muted">{brand.phone}</p>
            <a href="#contacto" className="btn-secondary mt-5 inline-flex text-sm">
              Solicitar cotización
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <p>© {year} {brand.name}. Todos los derechos reservados.</p>
          <p className="font-mono">Diseñado y desarrollado por Diego Armando</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
    >
      <Icon size={15} />
    </a>
  )
}

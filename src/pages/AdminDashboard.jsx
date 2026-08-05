import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import AdminLayout from '../components/admin/AdminLayout.jsx'
import { TextField, TextAreaField, Card, SaveHint } from '../components/admin/FormFields.jsx'
import { useContent } from '../context/ContentContext.jsx'

const TABS = [
  { id: 'marca', label: 'Marca y contacto' },
  { id: 'hero', label: 'Hero' },
  { id: 'stats', label: 'Estadísticas' },
  { id: 'services', label: 'Servicios' },
  { id: 'whyChooseUs', label: 'Por qué elegirme' },
  { id: 'testimonials', label: 'Testimonios' },
  { id: 'process', label: 'Proceso de trabajo' },
  { id: 'faq', label: 'Preguntas frecuentes' },
]

function newId(prefix) {
  return `${prefix}_${Date.now().toString(36)}`
}

export default function AdminDashboard() {
  const [active, setActive] = useState('marca')

  return (
    <AdminLayout tabs={TABS} active={active} onChange={setActive}>
      {active === 'marca' && <MarcaTab />}
      {active === 'hero' && <HeroTab />}
      {active === 'stats' && <StatsTab />}
      {active === 'services' && <ServicesTab />}
      {active === 'whyChooseUs' && <WhyChooseUsTab />}
      {active === 'testimonials' && <TestimonialsTab />}
      {active === 'process' && <ProcessTab />}
      {active === 'faq' && <FaqTab />}
    </AdminLayout>
  )
}

function TabHeader({ title, description }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-ink">{title}</h1>
      {description && <p className="mt-1.5 text-sm text-muted">{description}</p>}
    </div>
  )
}

function AddButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-xl2 border border-dashed border-line py-4 text-sm font-medium text-muted transition-colors hover:border-brand-400 hover:text-brand-600"
    >
      <Plus size={16} /> {label}
    </button>
  )
}

function MarcaTab() {
  const { content, updateField } = useContent()
  const { brand } = content
  const [saved, setSaved] = useState(false)

  const set = (field, value) => {
    updateField('brand', field, value)
    setSaved(true)
    setTimeout(() => setSaved(false), 1200)
  }

  const setSocial = (key, value) => {
    updateField('brand', 'social', { ...brand.social, [key]: value })
    setSaved(true)
    setTimeout(() => setSaved(false), 1200)
  }

  return (
    <div>
      <TabHeader title="Marca y contacto" description="Información general que se usa en todo el sitio." />
      <div className="space-y-5 rounded-xl2 border border-line bg-white p-6">
        <TextField label="Nombre de la marca" value={brand.name} onChange={(v) => set('name', v)} />
        <TextField label="Nombre corto (logo)" value={brand.shortName} onChange={(v) => set('shortName', v)} />
        <TextField label="Eslogan" value={brand.slogan} onChange={(v) => set('slogan', v)} />
        <TextField label="Correo" value={brand.email} onChange={(v) => set('email', v)} />
        <TextField label="Teléfono (visible)" value={brand.phone} onChange={(v) => set('phone', v)} />
        <TextField
          label="WhatsApp (solo números, con código de país)"
          value={brand.whatsapp}
          onChange={(v) => set('whatsapp', v)}
        />
        <TextField label="Ubicación / disponibilidad" value={brand.location} onChange={(v) => set('location', v)} />
        <TextField label="Instagram (URL)" value={brand.social.instagram} onChange={(v) => setSocial('instagram', v)} />
        <TextField label="LinkedIn (URL)" value={brand.social.linkedin} onChange={(v) => setSocial('linkedin', v)} />
        <TextField label="GitHub (URL)" value={brand.social.github} onChange={(v) => setSocial('github', v)} />
        <SaveHint show={saved} />
      </div>
    </div>
  )
}

function HeroTab() {
  const { content, updateField } = useContent()
  const { hero } = content
  const [saved, setSaved] = useState(false)

  const set = (field, value) => {
    updateField('hero', field, value)
    setSaved(true)
    setTimeout(() => setSaved(false), 1200)
  }

  return (
    <div>
      <TabHeader title="Sección Hero" description="Lo primero que ven tus visitantes." />
      <div className="space-y-5 rounded-xl2 border border-line bg-white p-6">
        <TextField label="Texto pequeño superior" value={hero.eyebrow} onChange={(v) => set('eyebrow', v)} />
        <TextField label="Título principal" value={hero.title} onChange={(v) => set('title', v)} />
        <TextField
          label="Palabra destacada (debe existir dentro del título)"
          value={hero.highlight}
          onChange={(v) => set('highlight', v)}
        />
        <TextAreaField label="Subtítulo" value={hero.subtitle} onChange={(v) => set('subtitle', v)} rows={3} />
        <TextField label="Texto botón principal" value={hero.ctaPrimary} onChange={(v) => set('ctaPrimary', v)} />
        <TextField label="Texto botón secundario" value={hero.ctaSecondary} onChange={(v) => set('ctaSecondary', v)} />
        <TextField
          label="Etiquetas (separadas por coma)"
          value={hero.badges.join(', ')}
          onChange={(v) => set('badges', v.split(',').map((s) => s.trim()).filter(Boolean))}
        />
        <SaveHint show={saved} />
      </div>
    </div>
  )
}

function StatsTab() {
  const { content, updateListItem, addListItem, removeListItem } = useContent()

  return (
    <div>
      <TabHeader title="Estadísticas" description="Números que refuerzan tu experiencia y resultados." />
      <div className="space-y-4">
        {content.stats.map((stat) => (
          <Card key={stat.id} onRemove={() => removeListItem('stats', stat.id)}>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Valor (ej: 40+, 98%, <2s)"
                value={stat.value}
                onChange={(v) => updateListItem('stats', stat.id, { value: v })}
              />
              <TextField
                label="Descripción"
                value={stat.label}
                onChange={(v) => updateListItem('stats', stat.id, { label: v })}
              />
            </div>
          </Card>
        ))}
        <AddButton
          label="Agregar estadística"
          onClick={() => addListItem('stats', { id: newId('st'), value: '0', label: 'Nueva métrica' })}
        />
      </div>
    </div>
  )
}

const ICON_HINT = 'Nombre de ícono de lucide-react, ej: Rocket, ShoppingBag, Trophy, Settings2'

function ServicesTab() {
  const { content, updateListItem, addListItem, removeListItem } = useContent()

  return (
    <div>
      <TabHeader title="Servicios" description="Lo que ofreces a tus clientes." />
      <div className="space-y-4">
        {content.services.map((service) => (
          <Card key={service.id} onRemove={() => removeListItem('services', service.id)}>
            <TextField
              label="Título"
              value={service.title}
              onChange={(v) => updateListItem('services', service.id, { title: v })}
            />
            <TextAreaField
              label="Descripción"
              value={service.description}
              onChange={(v) => updateListItem('services', service.id, { description: v })}
            />
            <TextField
              label="Ícono"
              value={service.icon}
              onChange={(v) => updateListItem('services', service.id, { icon: v })}
              placeholder={ICON_HINT}
            />
          </Card>
        ))}
        <AddButton
          label="Agregar servicio"
          onClick={() =>
            addListItem('services', {
              id: newId('sv'),
              icon: 'Sparkles',
              title: 'Nuevo servicio',
              description: 'Describe aquí el nuevo servicio.',
            })
          }
        />
      </div>
    </div>
  )
}

function WhyChooseUsTab() {
  const { content, updateListItem, addListItem, removeListItem } = useContent()

  return (
    <div>
      <TabHeader title="¿Por qué elegirme?" description="Razones por las que un cliente debería contratarte." />
      <div className="space-y-4">
        {content.whyChooseUs.map((item) => (
          <Card key={item.id} onRemove={() => removeListItem('whyChooseUs', item.id)}>
            <TextField
              label="Título"
              value={item.title}
              onChange={(v) => updateListItem('whyChooseUs', item.id, { title: v })}
            />
            <TextAreaField
              label="Descripción"
              value={item.description}
              onChange={(v) => updateListItem('whyChooseUs', item.id, { description: v })}
            />
            <TextField
              label="Ícono"
              value={item.icon}
              onChange={(v) => updateListItem('whyChooseUs', item.id, { icon: v })}
              placeholder={ICON_HINT}
            />
          </Card>
        ))}
        <AddButton
          label="Agregar razón"
          onClick={() =>
            addListItem('whyChooseUs', {
              id: newId('wc'),
              icon: 'Sparkles',
              title: 'Nueva razón',
              description: 'Describe aquí la razón.',
            })
          }
        />
      </div>
    </div>
  )
}

function TestimonialsTab() {
  const { content, updateListItem, addListItem, removeListItem } = useContent()

  return (
    <div>
      <TabHeader title="Testimonios" description="Opiniones reales de tus clientes anteriores." />
      <div className="space-y-4">
        {content.testimonials.map((t) => (
          <Card key={t.id} onRemove={() => removeListItem('testimonials', t.id)}>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Nombre"
                value={t.name}
                onChange={(v) => updateListItem('testimonials', t.id, { name: v })}
              />
              <TextField
                label="Cargo / negocio"
                value={t.role}
                onChange={(v) => updateListItem('testimonials', t.id, { role: v })}
              />
            </div>
            <TextAreaField
              label="Testimonio"
              value={t.quote}
              onChange={(v) => updateListItem('testimonials', t.id, { quote: v })}
            />
          </Card>
        ))}
        <AddButton
          label="Agregar testimonio"
          onClick={() =>
            addListItem('testimonials', {
              id: newId('ts'),
              name: 'Nuevo cliente',
              role: 'Cargo, empresa',
              quote: 'Escribe aquí el testimonio del cliente.',
            })
          }
        />
      </div>
    </div>
  )
}

function ProcessTab() {
  const { content, updateListItem, addListItem, removeListItem } = useContent()

  return (
    <div>
      <TabHeader title="Proceso de trabajo" description="Las etapas de tu flujo de trabajo, en orden." />
      <div className="space-y-4">
        {content.process.map((step, i) => (
          <Card key={step.id} title={`Paso ${i + 1}`} onRemove={() => removeListItem('process', step.id)}>
            <TextField
              label="Título"
              value={step.title}
              onChange={(v) => updateListItem('process', step.id, { title: v })}
            />
            <TextAreaField
              label="Descripción"
              value={step.description}
              onChange={(v) => updateListItem('process', step.id, { description: v })}
            />
          </Card>
        ))}
        <AddButton
          label="Agregar paso"
          onClick={() =>
            addListItem('process', { id: newId('pr'), title: 'Nuevo paso', description: 'Describe este paso.' })
          }
        />
      </div>
    </div>
  )
}

function FaqTab() {
  const { content, updateListItem, addListItem, removeListItem } = useContent()

  return (
    <div>
      <TabHeader title="Preguntas frecuentes" description="Resuelve las dudas más comunes de tus clientes." />
      <div className="space-y-4">
        {content.faq.map((item) => (
          <Card key={item.id} onRemove={() => removeListItem('faq', item.id)}>
            <TextField
              label="Pregunta"
              value={item.question}
              onChange={(v) => updateListItem('faq', item.id, { question: v })}
            />
            <TextAreaField
              label="Respuesta"
              value={item.answer}
              onChange={(v) => updateListItem('faq', item.id, { answer: v })}
            />
          </Card>
        ))}
        <AddButton
          label="Agregar pregunta"
          onClick={() =>
            addListItem('faq', { id: newId('fq'), question: 'Nueva pregunta', answer: 'Escribe la respuesta aquí.' })
          }
        />
      </div>
    </div>
  )
}

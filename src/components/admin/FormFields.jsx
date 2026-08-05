import React from 'react'

export function TextField({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input
        type="text"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
      />
    </label>
  )
}

export function TextAreaField({ label, value, onChange, rows = 3, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <textarea
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
      />
    </label>
  )
}

export function Card({ title, description, children, onRemove }) {
  return (
    <div className="rounded-xl2 border border-line bg-white p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          {title && <p className="text-sm font-semibold text-ink">{title}</p>}
          {description && <p className="text-xs text-muted">{description}</p>}
        </div>
        {onRemove && (
          <button onClick={onRemove} className="text-xs font-medium text-red-500 hover:underline">
            Eliminar
          </button>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

export function SaveHint({ show }) {
  if (!show) return null
  return (
    <p className="mt-3 text-xs text-emerald-600">Guardado automáticamente ✓</p>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, LogOut } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext.jsx'

export default function AdminLayout({ tabs, active, onChange, children }) {
  const { logout } = useAdminAuth()

  return (
    <div className="flex min-h-screen bg-mist">
      <aside className="hidden w-64 flex-shrink-0 border-r border-line bg-white md:block">
        <div className="flex h-20 items-center gap-2 border-b border-line px-6 font-display text-sm font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink p-1">
            <img src="/logo-mark.png" alt="Logo" className="h-full w-full object-contain" />
          </span>
          Panel admin
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                active === tab.id ? 'bg-ink text-white' : 'text-muted hover:bg-mist hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="space-y-1 border-t border-line p-4">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-muted hover:bg-mist hover:text-ink"
          >
            <ExternalLink size={15} /> Ver sitio
          </Link>
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            <LogOut size={15} /> Cerrar sesión
          </button>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex h-20 items-center justify-between border-b border-line bg-white px-6 md:hidden">
          <span className="font-display text-sm font-semibold text-ink">Panel admin</span>
          <select
            value={active}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-lg border border-line px-3 py-2 text-sm"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-10 md:px-12">{children}</main>
      </div>
    </div>
  )
}

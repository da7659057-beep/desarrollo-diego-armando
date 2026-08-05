import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { useAdminAuth } from '../context/AdminAuthContext.jsx'

export default function AdminLogin() {
  const { login, isAuthenticated } = useAdminAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAuthenticated) {
    navigate('/admin/panel', { replace: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(password)) {
      navigate('/admin/panel')
    } else {
      setError('Contraseña incorrecta. Inténtalo de nuevo.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-mist px-6">
      <div className="w-full max-w-sm rounded-xl3 border border-line bg-white p-8 shadow-soft">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-ink p-2">
          <img src="/logo-mark.png" alt="Logo" className="h-full w-full object-contain" />
        </div>
        <h1 className="mt-5 text-center text-xl font-semibold text-ink">Panel de administración</h1>
        <p className="mt-1.5 text-center text-sm text-muted">Ingresa tu contraseña para editar el contenido del sitio.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">Contraseña</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-line bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-500"
                placeholder="••••••••"
                autoFocus
              />
            </div>
            {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
          </div>
          <button type="submit" className="btn-primary w-full">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

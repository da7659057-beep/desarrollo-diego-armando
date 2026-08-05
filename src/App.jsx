import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { AdminAuthProvider, RequireAdminAuth } from './context/AdminAuthContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <AdminAuthProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/panel"
          element={
            <RequireAdminAuth>
              <AdminDashboard />
            </RequireAdminAuth>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </AdminAuthProvider>
  )
}

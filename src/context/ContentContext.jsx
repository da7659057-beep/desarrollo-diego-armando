import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { defaultContent } from '../data/defaultContent'

const STORAGE_KEY = 'dda_site_content_v1'
const ContentContext = createContext(null)

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultContent
    const parsed = JSON.parse(raw)
    // merge superficial por si se agregan campos nuevos en el futuro
    return { ...defaultContent, ...parsed }
  } catch {
    return defaultContent
  }
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadContent)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
  }, [content])

  const updateSection = useCallback((section, value) => {
    setContent((prev) => ({ ...prev, [section]: value }))
  }, [])

  const updateField = useCallback((section, field, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }))
  }, [])

  const updateListItem = useCallback((section, id, patch) => {
    setContent((prev) => ({
      ...prev,
      [section]: prev[section].map((item) => (item.id === id ? { ...item, ...patch } : item)),
    }))
  }, [])

  const addListItem = useCallback((section, item) => {
    setContent((prev) => ({ ...prev, [section]: [...prev[section], item] }))
  }, [])

  const removeListItem = useCallback((section, id) => {
    setContent((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }))
  }, [])

  const resetContent = useCallback(() => {
    setContent(defaultContent)
  }, [])

  return (
    <ContentContext.Provider
      value={{ content, updateSection, updateField, updateListItem, addListItem, removeListItem, resetContent }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent debe usarse dentro de ContentProvider')
  return ctx
}

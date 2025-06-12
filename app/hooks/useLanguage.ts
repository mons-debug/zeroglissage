'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations, Translations } from '../translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language
    if (savedLanguage && ['ar', 'en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage and update document direction
  useEffect(() => {
    localStorage.setItem('preferred-language', language)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    dir: language === 'ar' ? 'rtl' : 'ltr'
  }

  return React.createElement(
    LanguageContext.Provider,
    { value },
    children
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 
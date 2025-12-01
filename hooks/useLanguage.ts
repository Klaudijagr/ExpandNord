import { useCallback, useEffect, useState } from 'react'
import type { Language } from '@/lib/types'

const STORAGE_KEY = 'expandnord-language'

const getInitialLanguage = (defaultLanguage: Language): Language => {
  if (typeof window === 'undefined') return defaultLanguage

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && ['en', 'lt', 'no'].includes(stored)) {
    return stored as Language
  }
  return defaultLanguage
}

export const useLanguage = (defaultLanguage: Language = 'en') => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydrate from localStorage after mount
  useEffect(() => {
    const stored = getInitialLanguage(defaultLanguage)
    setLanguageState(stored)
    setIsHydrated(true)
  }, [defaultLanguage])

  const setLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLanguage)
    }
  }, [])

  return {
    language,
    setLanguage,
    isHydrated,
  }
}

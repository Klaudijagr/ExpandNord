import { useState } from 'react'
import { Language } from '@/lib/types'

export const useLanguage = (defaultLanguage: Language = 'en') => {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return {
    language,
    setLanguage: changeLanguage,
  }
}
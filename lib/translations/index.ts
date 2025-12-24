import type { Language, Translations } from '../types'
import { additionalTranslations } from './additional'
import { coreTranslations } from './core'
import { serviceTranslations } from './services'

// Combine all translations
export const allTranslations: Translations = {
  ...coreTranslations,
  ...additionalTranslations,
}

// Export individual translation groups
export { coreTranslations, serviceTranslations, additionalTranslations }

// Translation helper function
export const getTranslation = (key: string, language: Language): string => {
  return allTranslations[key]?.[language] || key
}

// Service translation helper
export const getServiceTranslation = (
  serviceKey: string,
  property: 'title' | 'closing',
  language: Language
): string => {
  return serviceTranslations[serviceKey]?.[property]?.[language] || serviceKey
}

// Service points helper
export const getServicePoints = (serviceKey: string, language: Language): string[] => {
  return serviceTranslations[serviceKey]?.points?.[language] || []
}

// Create translation hook for React components
export const useTranslation = (language: Language) => {
  // For string translations (most cases)
  const t = (key: string): string => {
    // Check if it's a service-related translation
    if (key.startsWith('service') && key.includes('Title')) {
      const serviceKey = key.replace('Title', '')
      return serviceTranslations[serviceKey]?.title?.[language] || key
    }
    if (key.startsWith('service') && key.includes('Closing')) {
      const serviceKey = key.replace('Closing', '')
      return serviceTranslations[serviceKey]?.closing?.[language] || key
    }
    if (key.startsWith('service') && key.includes('Points')) {
      // This case shouldn't use t() - use tPoints() instead
      return key
    }

    // Regular translations
    return getTranslation(key, language)
  }

  // For array translations (service points)
  const tPoints = (key: string): string[] => {
    if (key.startsWith('service') && key.includes('Points')) {
      const serviceKey = key.replace('Points', '')
      return serviceTranslations[serviceKey]?.points?.[language] || []
    }
    return []
  }

  return {
    t,
    tPoints,
    st: (serviceKey: string, property: 'title' | 'closing') =>
      getServiceTranslation(serviceKey, property, language),
    sp: (serviceKey: string) => getServicePoints(serviceKey, language),
  }
}

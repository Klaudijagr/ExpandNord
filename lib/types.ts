export type Language = "en" | "lt" | "no"

export interface TranslationEntry {
  en: string
  lt: string
  no: string
}

export interface Translations {
  [key: string]: TranslationEntry
}

export interface ServiceTranslation {
  title: TranslationEntry
  points: {
    en: string[]
    lt: string[]
    no: string[]
  }
  closing: TranslationEntry
}

export interface FormData {
  fullName: string
  company: string
  email: string
  interest: string
  message: string
}

export interface Service {
  title: string
  points: string[]
  closing: string
  icon: React.ComponentType<{ className?: string }>
}

export interface ProcessStep {
  title: string
  desc: string
}
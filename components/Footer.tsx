import Link from 'next/link'
import type React from 'react'
import type { Language } from '@/lib/types'

interface FooterProps {
  language: Language
  onLanguageChange: (lang: Language) => void
  translations: {
    footer: string
    privacy: string
    terms: string
  }
}

export const Footer: React.FC<FooterProps> = ({ language, onLanguageChange, translations }) => {
  const languages: Language[] = ['en', 'lt', 'no']

  return (
    <footer className="py-16 border-t border-[#4B7B6A]/20 bg-gradient-to-t from-[#4B7B6A]/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-[#A4C6B7] text-sm font-light">{translations.footer}</div>
          <div className="flex items-center space-x-8">
            <Link
              href="/privacy"
              className="text-[#A4C6B7] hover:text-white transition-colors duration-300 text-sm"
            >
              {translations.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-[#A4C6B7] hover:text-white transition-colors duration-300 text-sm"
            >
              {translations.terms}
            </Link>
            <div className="flex items-center space-x-1 text-sm">
              {languages.map((lang, index) => (
                <div key={lang} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => onLanguageChange(lang)}
                    className={`px-2 py-1 rounded transition-all duration-300 text-xs ${
                      language === lang
                        ? 'text-white bg-white/10'
                        : 'text-[#A4C6B7] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                  {index < languages.length - 1 && <span className="text-[#4B7B6A] mx-1">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

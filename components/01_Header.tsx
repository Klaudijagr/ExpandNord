import { ArrowRight } from 'lucide-react'
import type React from 'react'
import { Button } from '@/components/ui/button'
import type { Language } from '@/lib/types'

interface HeaderProps {
  scrolled: boolean
  language: Language
  onLanguageChange: (lang: Language) => void
  onBookCall: () => void
  translations: {
    about: string
    services: string
    process: string
    contact: string
    bookCall: string
  }
}

export const Header: React.FC<HeaderProps> = ({
  scrolled,
  language,
  onLanguageChange,
  onBookCall,
  translations,
}) => {
  const languages: Language[] = ['en', 'lt', 'no']

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A2D28]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-[#0A2D28]/60 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-xl font-medium tracking-wide text-white">ExpandNord</div>

          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="#about"
              className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              {translations.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              {translations.services}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#process"
              className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              {translations.process}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
            >
              {translations.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm">
              {languages.map((lang, index) => (
                <div key={lang} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => onLanguageChange(lang)}
                    className={`px-3 py-1.5 rounded-md transition-all duration-300 text-xs font-medium ${
                      language === lang
                        ? 'text-white bg-[#4B7B6A]/30 shadow-sm'
                        : 'text-[#A4C6B7] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                  {index < languages.length - 1 && <span className="text-[#4B7B6A] mx-2">|</span>}
                </div>
              ))}
            </div>
            <Button
              onClick={onBookCall}
              variant="outline"
              className="border-[#6EA282] text-[#6EA282] hover:bg-[#6EA282] hover:text-white transition-all duration-300 text-sm font-medium bg-transparent group"
            >
              {translations.bookCall}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

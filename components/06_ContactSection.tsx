import { Building2, Mail, Phone } from 'lucide-react'
import type React from 'react'
import { useOnceInView } from '@/hooks/useIntersectionObserver'
import { useLanguage } from '@/hooks/useLanguage'

interface ContactSectionProps {
  translations: {
    readyToGrow: string
    contactUs: string
    headquarters: string
    managingPartner: string
  }
}

export const ContactSection: React.FC<ContactSectionProps> = ({ translations }) => {
  const { ref, isInView } = useOnceInView(0.2)
  const { language } = useLanguage()

  const position = language === 'lt' ? 'Vadovaujanti partnerė' : 'Managing Partner'

  return (
    <section
      ref={ref}
      id="contact"
      className="py-32 bg-gradient-to-r from-[#4B7B6A]/5 to-[#6EA282]/5"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-light text-white mb-12 tracking-tight transition-all duration-1000 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {translations.readyToGrow}
          </h2>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {/* Headquarters Box */}
              <a
                href="mailto:info@expandnord.com"
                className="group block p-8 rounded-xl bg-[#0A2D28]/50 border border-[#4B7B6A]/30 backdrop-blur-sm hover:bg-[#0A2D28]/70 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Building2 className="h-8 w-8 text-[#6EA282] group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-white font-medium text-lg">{translations.headquarters}</h3>
                  <div className="flex items-center text-[#A4C6B7] group-hover:text-white transition-colors duration-300">
                    <Mail className="h-4 w-4 mr-2" />
                    info@expandnord.com
                  </div>
                </div>
              </a>

              {/* Managing Partner Box */}
              <div className="p-8 rounded-xl bg-[#0A2D28]/50 border border-[#4B7B6A]/30 backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-4">
                  <h3 className="text-white font-medium text-lg">{position}</h3>
                  <p className="text-white">Klaudija Grabauskaitė</p>
                  <div className="space-y-3">
                    <a
                      href="mailto:klaudija@expandnord.com"
                      className="flex items-center text-[#A4C6B7] hover:text-white transition-colors duration-300"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      klaudija@expandnord.com
                    </a>
                    <a
                      href="tel:+37069181186"
                      className="flex items-center text-[#A4C6B7] hover:text-white transition-colors duration-300"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      +370 691 81186
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useOnceInView } from '@/hooks/useIntersectionObserver'
import { useLanguage } from '@/hooks/useLanguage'

interface ContactSectionProps {
  translations: {
    readyToGrow: string
    contactUs: string
  }
}

export const ContactSection: React.FC<ContactSectionProps> = ({ translations }) => {
  const { ref, isInView } = useOnceInView(0.2)
  const { language } = useLanguage()

  const contactEmail = language === 'no' ? 'martyna@expandnord.com' : 'klaudija@expandnord.com'

  return (
    <section ref={ref} id="contact" className="py-32 bg-gradient-to-r from-[#4B7B6A]/5 to-[#6EA282]/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-light text-white mb-12 tracking-tight transition-all duration-1000 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {translations.readyToGrow}
          </h2>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#6EA282] to-[#9ED0A8] hover:from-[#9ED0A8] hover:to-[#6EA282] text-white border-0 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-[#6EA282]/20 group"
            >
              <a href={`mailto:${contactEmail}`} className="flex items-center">
                {translations.contactUs}
                <Mail className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
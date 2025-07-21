import React from 'react'
import Image from 'next/image'
import { useOnceInView } from '@/hooks/useIntersectionObserver'

interface AboutSectionProps {
  translations: {
    aboutTitle: string
    aboutText1: string
    aboutText2: string
    aboutText3: string
    aboutQuote: string
  }
}

export const AboutSection: React.FC<AboutSectionProps> = ({ translations }) => {
  const { ref, isInView } = useOnceInView(0.2)

  return (
    <section ref={ref} id="about" className="py-32 bg-gradient-to-r from-[#4B7B6A]/5 to-[#6EA282]/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-light text-white mb-12 text-center tracking-tight transition-all duration-1000 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {translations.aboutTitle}
          </h2>
          <div className="space-y-8">
            <p
              className={`text-lg text-[#A4C6B7] transition-all duration-1000 delay-100 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              We're a team led by two managing partners with complementary strengths and a shared mission: helping businesses grow across borders with confidence and clarity.
            </p>
            <p
              className={`text-lg text-[#A4C6B7] transition-all duration-1000 delay-200 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              One partner brings years of experience connecting Lithuanian businesses with opportunities in Norway, building strong partnerships and navigating international business culture.
            </p>
            <p
              className={`text-lg text-[#A4C6B7] transition-all duration-1000 delay-300 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              The other has a background in political public relations, helping companies enter new markets through strategic communication, reputation building, and tailored PR strategies.
            </p>
            <div
              className={`mt-12 border-l-4 border-[#6EA282] pl-6 transition-all duration-1000 delay-400 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <blockquote className="text-xl text-white italic">
                {translations.aboutQuote}
              </blockquote>
              <div className="mt-8 flex items-center space-x-6">
                <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-[#6EA282] ring-4 ring-[#6EA282]/20">
                  <Image
                    src="/klaudija-grabauskaite.png"
                    alt="Klaudija Grabauskaitė"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 96px) 100vw, 96px"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">Klaudija Grabauskaitė</p>
                  <p className="text-[#A4C6B7]">Managing Partner, ExpandNord</p>
                  <a href="mailto:klaudija@expandnord.com" className="text-[#A4C6B7] hover:text-white transition-colors duration-300">
                    klaudija@expandnord.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
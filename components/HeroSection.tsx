import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { AnimatedHeadline } from './AnimatedHeadline'

interface HeroSectionProps {
  translations: {
    heroTitle: string
    heroSubtitle: string
    getStarted: string
  }
}

export const HeroSection: React.FC<HeroSectionProps> = ({ translations }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-b from-[#0A2D28] to-[#4B7B6A]/10">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            <AnimatedHeadline text={translations.heroTitle} />
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-lg md:text-xl text-[#A4C6B7] leading-relaxed font-light opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]"
              style={{ animationDelay: "2s" }}
            >
              {translations.heroSubtitle}
            </p>
          </div>
        </div>

        <div className="pt-4 opacity-0 animate-[fadeInUp_1s_ease-out_3s_forwards]" style={{ animationDelay: "3s" }}>
          <Button
            variant="outline"
            size="lg"
            className="border-[#6EA282] text-[#6EA282] hover:bg-[#6EA282] hover:text-white transition-all duration-300 px-10 py-4 text-base font-medium bg-transparent group shadow-lg hover:shadow-xl hover:shadow-[#6EA282]/20"
          >
            {translations.getStarted}
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
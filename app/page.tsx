'use client'

import { Header } from '@/components/01_Header'
import { HeroSection } from '@/components/02_HeroSection'
import { AboutSection } from '@/components/03_AboutSection'
import { ValuePropositions } from '@/components/03_ValuePropositions'
import { ServicesSection } from '@/components/04_ServicesSection'
import { ProcessSection } from '@/components/05_ProcessSection'
import { ContactSection } from '@/components/06_ContactSection'
import { FloatingCTA } from '@/components/FloatingCTA'
import { Footer } from '@/components/Footer'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollTracking } from '@/hooks/useScrollTracking'
import { serviceConfig } from '@/lib/services'
import { useTranslation } from '@/lib/translations'
import { openContactEmail } from '@/lib/utils'

export default function ExpandNordWebsite() {
  const { language, setLanguage } = useLanguage()
  const scrolled = useScrollTracking()
  const { t, tPoints } = useTranslation(language)

  const services = serviceConfig.map((service) => ({
    title: t(`${service.id}Title`),
    points: tPoints(`${service.id}Points`),
    closing: t(`${service.id}Closing`),
    icon: service.icon,
  }))

  const processSteps = [
    { title: t('step1'), desc: t('step1Desc') },
    { title: t('step2'), desc: t('step2Desc') },
    { title: t('step3'), desc: t('step3Desc') },
    { title: t('step4'), desc: t('step4Desc') },
  ]

  const handleContactClick = () => {
    openContactEmail(language)
  }

  return (
    <div className="min-h-screen bg-[#0A2D28] text-white font-sans antialiased overflow-x-hidden">
      <FloatingCTA text={t('bookCall')} onClick={handleContactClick} />

      <Header
        scrolled={scrolled}
        language={language}
        onLanguageChange={setLanguage}
        onBookCall={handleContactClick}
        translations={{
          about: t('about'),
          services: t('services'),
          process: t('process'),
          contact: t('contact'),
          bookCall: t('bookCall'),
        }}
      />

      <HeroSection
        translations={{
          heroTitle: t('heroTitle'),
          heroSubtitle: t('heroSubtitle'),
          getStarted: t('getStarted'),
        }}
        onGetStarted={handleContactClick}
      />

      <ValuePropositions
        translations={{
          marketIntel: t('marketIntel'),
          marketIntelDesc: t('marketIntelDesc'),
          connections: t('connections'),
          connectionsDesc: t('connectionsDesc'),
          strategy: t('strategy'),
          strategyDesc: t('strategyDesc'),
        }}
      />

      <ServicesSection services={services} sectionTitle={t('services')} />

      <AboutSection
        translations={{
          aboutTitle: t('aboutTitle'),
          aboutText1: t('aboutText1'),
          aboutText2: t('aboutText2'),
          aboutText3: t('aboutText3'),
          aboutQuote: t('aboutQuote'),
        }}
      />

      <ProcessSection sectionTitle={t('ourProcess')} steps={processSteps} />

      <ContactSection
        translations={{
          readyToGrow: t('readyToGrow'),
          contactUs: t('contactUs'),
          headquarters: t('headquarters'),
          managingPartner: t('managingPartner'),
        }}
      />

      <Footer
        language={language}
        onLanguageChange={setLanguage}
        translations={{
          footer: t('footer'),
          privacy: t('privacy'),
          terms: t('terms'),
        }}
      />
    </div>
  )
}

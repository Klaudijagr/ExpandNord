"use client"

import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollTracking, useScrollToElement } from '@/hooks/useScrollTracking'
import { useTranslation } from '@/lib/translations'
import { serviceConfig } from '@/lib/services'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ValuePropositions } from '@/components/ValuePropositions'
import { BalticDivider } from '@/components/BalticDivider'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/FloatingCTA'

export default function ExpandNordWebsite() {
  const { language, setLanguage } = useLanguage()
  const scrolled = useScrollTracking()
  const scrollToElement = useScrollToElement()
  const { t } = useTranslation(language)

  const services = serviceConfig.map(service => ({
    title: t(`${service.id}Title`),
    points: t(`${service.id}Points`) as string[],
    closing: t(`${service.id}Closing`),
    icon: service.icon,
  }))

  const processSteps = [
    { title: t('step1'), desc: t('step1Desc') },
    { title: t('step2'), desc: t('step2Desc') },
    { title: t('step3'), desc: t('step3Desc') },
    { title: t('step4'), desc: t('step4Desc') },
  ]

  const scrollToContact = () => scrollToElement('contact')

  return (
    <div className="min-h-screen bg-[#0A2D28] text-white font-sans antialiased overflow-x-hidden">
      <FloatingCTA text={t('bookCall')} onClick={scrollToContact} />
      
      <Header
        scrolled={scrolled}
        language={language}
        onLanguageChange={setLanguage}
        onBookCall={scrollToContact}
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

      <BalticDivider animated />

      <ServicesSection
        services={services}
        sectionTitle={t('services')}
      />

      <BalticDivider animated />

      <ProcessSection
        sectionTitle={t('ourProcess')}
        steps={processSteps}
      />

      <BalticDivider animated />

      <ContactSection
        translations={{
          readyToGrow: t('readyToGrow'),
          fullName: t('fullName'),
          company: t('company'),
          email: t('email'),
          interestedIn: t('interestedIn'),
          balticNordic: t('balticNordic'),
          nordicBaltic: t('nordicBaltic'),
          message: t('message'),
          sendMessage: t('sendMessage'),
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
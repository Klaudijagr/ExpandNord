"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Target,
  Users,
  TrendingUp,
  Search,
  Handshake,
  FileText,
  MapPin,
  Megaphone,
  Building,
  Calculator,
  Network,
  ArrowRight,
  Mail,
  Linkedin,
  ChevronRight,
} from "lucide-react"

type Language = "en" | "lt" | "no"

interface Translations {
  [key: string]: {
    en: string
    lt: string
    no: string
  }
}

const translations: Translations = {
  // Navigation
  about: { en: "About", lt: "Apie mus", no: "Om oss" },
  services: { en: "Services", lt: "Paslaugos", no: "Tjenester" },
  process: { en: "Process", lt: "Procesas", no: "Prosess" },
  contact: { en: "Contact", lt: "Kontaktai", no: "Kontakt" },
  bookCall: { en: "Book Strategy Call", lt: "Susisiekime", no: "Bestill strategisamtale" },

  // Hero Section
  heroTitle: {
    en: "ExpandNord – Growth by Connecting Baltic–Nordic Business",
    lt: "ExpandNord – Aukite Šiaurės šalyse",
    no: "ExpandNord – Vekst gjennom å koble baltisk-nordisk næringsliv",
  },
  heroSubtitle: {
    en: "We bridge markets, cultures, and opportunities between the Baltic and Nordic regions, turning expansion challenges into growth success stories.",
    lt: "Mes sujungiame rinkas, kultūras ir galimybes tarp Baltijos ir Šiaurės šalių regionų, paversdami plėtros iššūkius augimo sėkmės istorijomis.",
    no: "Vi bygger broer mellom markeder, kulturer og muligheter mellom de baltiske og nordiske regionene, og gjør ekspansjonsutfordringer til vekstsuksesshistorier.",
  },
  getStarted: { en: "Get Started Today", lt: "Pradėkite šiandien", no: "Kom i gang i dag" },

  // Value Bullets
  marketIntel: { en: "Market Intelligence", lt: "Rinkos analizė", no: "Markedsintelligens" },
  marketIntelDesc: {
    en: "Deep insights into local markets and opportunities",
    lt: "Gilūs vietinių rinkų ir galimybių įžvalgos",
    no: "Dype innsikter i lokale markeder og muligheter",
  },
  connections: {
    en: "Connections That Open Doors",
    lt: "Ryšiai, kurie atveria duris",
    no: "Forbindelser som åpner dører",
  },
  connectionsDesc: {
    en: "Access to key decision-makers and industry leaders",
    lt: "Prieiga prie pagrindinių sprendimų priėmėjų ir pramonės lyderių",
    no: "Tilgang til sentrale beslutningstakere og bransjeledere",
  },
  strategy: {
    en: "Strategy That Leads to Sales",
    lt: "Strategija, vedanti į pardavimus",
    no: "Strategi som fører til salg",
  },
  strategyDesc: {
    en: "Proven methodologies that convert expansion into revenue",
    lt: "Patirtis, kurianti pajamas",
    no: "Dokumenterte metoder som konverterer ekspansjon til inntekter",
  },

  // About Section
  ourMission: { en: "Our Mission", lt: "Mūsų misija", no: "Vårt oppdrag" },
  missionText: {
    en: "We turn ambition into opportunity between Baltic and Nordic markets.",
    lt: "Mes paverčiame ambicijas galimybėmis tarp Baltijos ir Šiaurės šalių rinkų.",
    no: "Vi forvandler ambisjoner til muligheter mellom baltiske og nordiske markeder.",
  },
  whyWorkWithUs: {
    en: "Why Companies Work With Us:",
    lt: "Kodėl įmonės dirba su mumis:",
    no: "Hvorfor selskaper jobber med oss:",
  },
  reason1: {
    en: "Local expertise in both Baltic and Nordic markets",
    lt: "Vietinė ekspertizė tiek Baltijos, tiek Šiaurės šalių rinkose",
    no: "Lokal ekspertise i både baltiske og nordiske markeder",
  },
  reason2: {
    en: "Established network of partners and decision-makers",
    lt: "Sukurtas partnerių ir sprendimų priėmėjų tinklas",
    no: "Etablert nettverk av partnere og beslutningstakere",
  },
  reason3: {
    en: "End-to-end support from strategy to execution",
    lt: "Visapusiškas palaikymas nuo strategijos iki įgyvendinimo",
    no: "Ende-til-ende støtte fra strategi til gjennomføring",
  },
  reason4: {
    en: "Proven track record of successful market entries",
    lt: "Įrodytas sėkmingų rinkos patekimų rekordas",
    no: "Dokumentert merittliste med vellykkede markedsinntreden",
  },
}

const serviceTranslations = {
  service1Title: {
    en: "Market Research & Strategy",
    lt: "Rinkos tyrimai ir strategija",
    no: "Markedsundersøkelse og strategi",
  },
  service1Points: {
    en: ["Comprehensive market analysis", "Competitive landscape mapping", "Entry strategy development"],
    lt: ["Išsami rinkos analizė", "Konkurencinės aplinkos vertinimas", "Patekimo strategijos kūrimas"],
    no: ["Omfattende markedsanalyse", "Kartlegging av konkurranselandskap", "Utvikling av inntrengningsstrategi"],
  },
  service1Closing: {
    en: "Data-driven insights for confident decisions",
    lt: "Duomenimis grįsti sprendimai",
    no: "Datadrevne innsikter for trygge beslutninger",
  },

  service2Title: { en: "B2B & B2G Meetings", lt: "B2B ir B2G susitikimai", no: "B2B og B2G møter" },
  service2Points: {
    en: ["Pre-qualified prospect meetings", "Government liaison introductions", "Industry event coordination"],
    lt: ["Susitikimai su potencialiais partneriais", "Ryšiai su valdžios institucijomis", "Renginių koordinavimas"],
    no: [
      "Forhåndskvalifiserte prospektmøter",
      "Introduksjoner til myndighetskontakter",
      "Koordinering av bransjearrangementer",
    ],
  },
  service2Closing: {
    en: "Direct access to decision-makers",
    lt: "Prieiga prie sprendimų priėmėjų",
    no: "Direkte tilgang til beslutningstakere",
  },

  service3Title: {
    en: "Registration & Legal Setup",
    lt: "Įmonės registracija",
    no: "Registrering og juridisk oppsett",
  },
  service3Points: {
    en: ["Company registration assistance", "Legal structure optimization", "Compliance framework setup"],
    lt: ["Pagalba registruojant įmonę", "Teisinės struktūros pritaikymas", "Atitikties sistemos sąranka"],
    no: [
      "Assistanse med selskapsregistrering",
      "Optimalisering av juridisk struktur",
      "Oppsett av compliance-rammeverk",
    ],
  },
  service3Closing: {
    en: "Legally compliant market entry",
    lt: "Teisiškai atitinkantis rinkos patekimas",
    no: "Juridisk kompatibel markedsinntreden",
  },

  service4Title: { en: "Location & Setup", lt: "Vieta ir sąranka", no: "Lokasjon og oppsett" },
  service4Points: {
    en: ["Office space identification", "Virtual office solutions", "Operational infrastructure setup"],
    lt: ["Biuro erdvės identifikavimas", "Virtualaus biuro sprendimai", "Veiklos infrastruktūros sąranka"],
    no: ["Identifisering av kontorlokaler", "Virtuelle kontorløsninger", "Oppsett av operasjonell infrastruktur"],
  },
  service4Closing: {
    en: "Physical presence without the hassle",
    lt: "Fizinis buvimas be rūpesčių",
    no: "Fysisk tilstedeværelse uten problemer",
  },

  service5Title: { en: "PR & Marketing", lt: "PR ir rinkodara", no: "PR og markedsføring" },
  service5Points: {
    en: ["Local media relationship building", "Content localization strategy", "Digital marketing campaigns"],
    lt: [
      "Vietinių žiniasklaidos ryšių kūrimas",
      "Turinio lokalizacijos strategija",
      "Skaitmeninės rinkodaros kampanijos",
    ],
    no: ["Bygging av lokale medierelasjoner", "Strategi for innholdslokalisering", "Digitale markedsføringskampanjer"],
  },
  service5Closing: {
    en: "Brand visibility in new markets",
    lt: "Prekės ženklo matomumas naujose rinkose",
    no: "Merkevaresynlighet i nye markeder",
  },

  service6Title: {
    en: "Government & Institutional Engagement",
    lt: "Vyriausybės ir institucinė veikla",
    no: "Myndighets- og institusjonell engasjement",
  },
  service6Points: {
    en: ["Regulatory navigation support", "Government incentive identification", "Public sector relationship building"],
    lt: [
      "Reguliavimo navigacijos palaikymas",
      "Vyriausybės paskatos identifikavimas",
      "Viešojo sektorius ryšių kūrimas",
    ],
    no: [
      "Støtte til regulatorisk navigering",
      "Identifisering av offentlige insentiver",
      "Bygging av offentlige sektorrelasjoner",
    ],
  },
  service6Closing: {
    en: "Leverage public sector opportunities",
    lt: "Pasinaudokite viešojo sektorius galimybėmis",
    no: "Utnytt offentlige sektormuligheter",
  },

  service7Title: {
    en: "Tax & Financial Structuring",
    lt: "Mokesčių ir finansinė struktūra",
    no: "Skatte- og finansiell strukturering",
  },
  service7Points: {
    en: ["Tax optimization strategies", "Financial structure planning", "Cross-border transaction support"],
    lt: [
      "Mokesčių optimizavimo strategijos",
      "Finansinės struktūros planavimas",
      "Tarpvalstybinių sandorių palaikymas",
    ],
    no: [
      "Skatteoptimaliseringsstrategier",
      "Planlegging av finansiell struktur",
      "Støtte til grenseoverskridende transaksjoner",
    ],
  },
  service7Closing: {
    en: "Maximize financial efficiency",
    lt: "Maksimalus finansinis efektyvumas",
    no: "Maksimer finansiell effektivitet",
  },

  service8Title: {
    en: "Partner & Distributor Search",
    lt: "Partnerių ir platintojų paieška",
    no: "Partner- og distributørsøk",
  },
  service8Points: {
    en: ["Strategic partner identification", "Distributor network mapping", "Partnership negotiation support"],
    lt: [
      "Strateginių partnerių identifikavimas",
      "Platintojų tinklo žemėlapių sudarymas",
      "Partnerystės derybų palaikymas",
    ],
    no: [
      "Identifisering av strategiske partnere",
      "Kartlegging av distributørnettverk",
      "Støtte til partnerskapsforhandlinger",
    ],
  },
  service8Closing: {
    en: "Accelerate market penetration",
    lt: "Efektyvi plėtra",
    no: "Akseler markedspenetrasjon",
  },
}

const additionalTranslations = {
  ourProcess: { en: "Our Process", lt: "Mūsų procesas", no: "Vår prosess" },
  step1: { en: "Strategy Call", lt: "Strategijos skambutis", no: "Strategisamtale" },
  step1Desc: {
    en: "Understanding your goals and market ambitions",
    lt: "Jūsų tikslų ir rinkos ambicijų supratimas",
    no: "Forstå dine mål og markedsambisjoner",
  },
  step2: { en: "Market Entry Blueprint", lt: "Rinkos patekimo planas", no: "Markedsinntreden-plan" },
  step2Desc: {
    en: "Detailed roadmap with timelines and milestones",
    lt: "Detalus kelių žemėlapis su terminais ir etapais",
    no: "Detaljert veikart med tidslinjer og milepæler",
  },
  step3: { en: "Execution Phase", lt: "Įgyvendinimo etapas", no: "Gjennomføringsfase" },
  step3Desc: {
    en: "Hands-on implementation of your expansion strategy",
    lt: "Praktinis jūsų plėtros strategijos įgyvendinimas",
    no: "Praktisk implementering av din ekspansjonsstrategi",
  },
  step4: { en: "Ongoing Support", lt: "Nuolatinis palaikymas", no: "Kontinuerlig støtte" },
  step4Desc: {
    en: "Continuous optimization and growth support",
    lt: "Nuolatinis optimizavimas ir augimo palaikymas",
    no: "Kontinuerlig optimalisering og vekststøtte",
  },

  readyToGrow: {
    en: "Ready to grow across the region?",
    lt: "Pasiruošę augti visame regione?",
    no: "Klar til å vokse på tvers av regionen?",
  },
  fullName: { en: "Full Name", lt: "Pilnas vardas", no: "Fullt navn" },
  company: { en: "Company", lt: "Įmonė", no: "Selskap" },
  email: { en: "Email", lt: "El. paštas", no: "E-post" },
  interestedIn: { en: "I'm interested in:", lt: "Man įdomu:", no: "Jeg er interessert i:" },
  balticNordic: {
    en: "Baltic → Nordic expansion",
    lt: "Baltijos → Šiaurės šalių plėtra",
    no: "Baltisk → Nordisk ekspansjon",
  },
  nordicBaltic: {
    en: "Nordic → Baltic expansion",
    lt: "Šiaurės šalių → Baltijos plėtra",
    no: "Nordisk → Baltisk ekspansjon",
  },
  message: { en: "Message", lt: "Žinutė", no: "Melding" },
  sendMessage: { en: "Send Message", lt: "Siųsti žinutę", no: "Send melding" },

  footer: {
    en: "© 2025 ExpandNord. All rights reserved.",
    lt: "© 2025 ExpandNord. Visos teisės saugomos.",
    no: "© 2025 ExpandNord. Alle rettigheter forbeholdt.",
  },
  privacy: { en: "Privacy", lt: "Privatumas", no: "Personvern" },
  terms: { en: "Terms", lt: "Sąlygos", no: "Vilkår" },
}

// Enhanced Baltic Symbol Component with animation
const BalticDivider = ({ className = "", animated = false }: { className?: string; animated?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [animated])

  return (
    <div ref={ref} className={`flex justify-center py-20 ${className}`}>
      <svg
        width="300"
        height="80"
        viewBox="0 0 300 80"
        className={`opacity-15 text-[#6EA282] transition-all duration-1000 ${
          animated && isVisible ? "scale-100 opacity-15" : animated ? "scale-75 opacity-0" : ""
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          {/* Central traditional Baltic cross pattern */}
          <path d="M150 20 L160 30 L170 20 L160 10 Z" fill="currentColor" opacity="0.3" />
          <path d="M150 60 L160 50 L170 60 L160 70 Z" fill="currentColor" opacity="0.3" />
          <path d="M130 40 L140 30 L150 40 L140 50 Z" fill="currentColor" opacity="0.3" />
          <path d="M170 40 L180 30 L190 40 L180 50 Z" fill="currentColor" opacity="0.3" />

          {/* Traditional Baltic zigzag patterns */}
          <path d="M50 40 L60 30 L70 40 L80 30 L90 40 L100 30 L110 40" />
          <path d="M190 40 L200 30 L210 40 L220 30 L230 40 L240 30 L250 40" />

          {/* Traditional Baltic tree/life symbols */}
          <path d="M40 40 L45 35 L50 40 L45 45 Z" fill="currentColor" opacity="0.2" />
          <path d="M250 40 L255 35 L260 40 L255 45 Z" fill="currentColor" opacity="0.2" />

          {/* Connecting traditional lines */}
          <line x1="50" y1="40" x2="130" y2="40" strokeDasharray="3,3" opacity="0.6" />
          <line x1="190" y1="40" x2="250" y2="40" strokeDasharray="3,3" opacity="0.6" />

          {/* Traditional Baltic sun symbols */}
          <circle cx="30" cy="40" r="3" />
          <path d="M27 37 L33 43 M33 37 L27 43 M30 34 L30 46 M24 40 L36 40" strokeWidth="1" />

          <circle cx="270" cy="40" r="3" />
          <path d="M267 37 L273 43 M273 37 L267 43 M270 34 L270 46 M264 40 L276 40" strokeWidth="1" />

          {/* Traditional Baltic wave patterns */}
          <path d="M110 50 Q120 45 130 50 T150 50" opacity="0.7" />
          <path d="M150 50 Q160 45 170 50 T190 50" opacity="0.7" />

          {/* Traditional Baltic dots representing stars/nature */}
          <circle cx="75" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="225" cy="25" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="75" cy="55" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="225" cy="55" r="1.5" fill="currentColor" opacity="0.4" />

          {/* Central traditional Baltic goddess symbol */}
          <path d="M150 35 L155 40 L150 45 L145 40 Z" />
          <circle cx="150" cy="40" r="2" fill="currentColor" opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}

// Animated Text Component with letter-by-letter reveal
const AnimatedHeadline = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [visibleChars, setVisibleChars] = useState(0)
  const words = text.split(" ")

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= text.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 50)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => {
        const wordStart = words.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0)
        return (
          <span key={wordIndex} className="inline-block mr-3">
            {word.split("").map((char, charIndex) => {
              const charPosition = wordStart + charIndex
              const isVisible = charPosition < visibleChars
              return (
                <span
                  key={charIndex}
                  className={`inline-block transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {char}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}

// Intersection Observer Hook for animations
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Floating CTA Button
const FloatingCTA = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button
        onClick={onClick}
        className="bg-[#6EA282] hover:bg-[#9ED0A8] text-white shadow-2xl border-0 transition-all duration-300 hover:scale-105"
        size="lg"
      >
        {text}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export default function ExpandNordWebsite() {
  const [language, setLanguage] = useState<Language>("en")
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  })

  const t = (key: string) => translations[key]?.[language] || key
  const st = (key: string) => serviceTranslations[key as keyof typeof serviceTranslations]?.[language] || key
  const at = (key: string) => additionalTranslations[key as keyof typeof additionalTranslations]?.[language] || key

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const services = [
    {
      title: st("service1Title"),
      points: serviceTranslations.service1Points[language],
      closing: st("service1Closing"),
      icon: Search,
    },
    {
      title: st("service2Title"),
      points: serviceTranslations.service2Points[language],
      closing: st("service2Closing"),
      icon: Handshake,
    },
    {
      title: st("service3Title"),
      points: serviceTranslations.service3Points[language],
      closing: st("service3Closing"),
      icon: FileText,
    },
    {
      title: st("service4Title"),
      points: serviceTranslations.service4Points[language],
      closing: st("service4Closing"),
      icon: MapPin,
    },
    {
      title: st("service5Title"),
      points: serviceTranslations.service5Points[language],
      closing: st("service5Closing"),
      icon: Megaphone,
    },
    {
      title: st("service6Title"),
      points: serviceTranslations.service6Points[language],
      closing: st("service6Closing"),
      icon: Building,
    },
    {
      title: st("service7Title"),
      points: serviceTranslations.service7Points[language],
      closing: st("service7Closing"),
      icon: Calculator,
    },
    {
      title: st("service8Title"),
      points: serviceTranslations.service8Points[language],
      closing: st("service8Closing"),
      icon: Network,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#0A2D28] text-white font-sans antialiased overflow-x-hidden">
      {/* Floating CTA */}
      <FloatingCTA text={t("bookCall")} onClick={scrollToContact} />

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0A2D28]/90 backdrop-blur-xl border-b border-white/5" : "bg-[#0A2D28]/60 backdrop-blur-sm"
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
                {t("about")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
              >
                {t("services")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#process"
                className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
              >
                {t("process")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-[#A4C6B7] hover:text-white transition-all duration-300 text-sm font-medium relative group"
              >
                {t("contact")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EA282] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-sm">
                {(["en", "lt", "no"] as Language[]).map((lang, index) => (
                  <div key={lang} className="flex items-center">
                    <button
                      onClick={() => setLanguage(lang)}
                      className={`px-3 py-1.5 rounded-md transition-all duration-300 text-xs font-medium ${
                        language === lang
                          ? "text-white bg-[#4B7B6A]/30 shadow-sm"
                          : "text-[#A4C6B7] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                    {index < 2 && <span className="text-[#4B7B6A] mx-2">|</span>}
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="border-[#6EA282] text-[#6EA282] hover:bg-[#6EA282] hover:text-white transition-all duration-300 text-sm font-medium bg-transparent group"
              >
                {t("bookCall")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-b from-[#0A2D28] to-[#4B7B6A]/10">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
              <AnimatedHeadline text={t("heroTitle")} />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-lg md:text-xl text-[#A4C6B7] leading-relaxed font-light opacity-0 animate-[fadeInUp_1s_ease-out_2s_forwards]"
                style={{ animationDelay: "2s" }}
              >
                {t("heroSubtitle")}
              </p>
            </div>
          </div>

          <div className="pt-4 opacity-0 animate-[fadeInUp_1s_ease-out_3s_forwards]" style={{ animationDelay: "3s" }}>
            <Button
              variant="outline"
              size="lg"
              className="border-[#6EA282] text-[#6EA282] hover:bg-[#6EA282] hover:text-white transition-all duration-300 px-10 py-4 text-base font-medium bg-transparent group shadow-lg hover:shadow-xl hover:shadow-[#6EA282]/20"
            >
              {t("getStarted")}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <ValuePropositions t={t} />

      {/* Baltic Divider */}
      <BalticDivider animated />

      {/* Services */}
      <ServicesSection services={services} t={t} />

      {/* Baltic Divider */}
      <BalticDivider animated />

      {/* Process */}
      <ProcessSection at={at} />

      {/* Baltic Divider */}
      <BalticDivider animated />

      {/* Contact */}
      <ContactSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} at={at} />

      {/* Footer */}
      <footer className="py-16 border-t border-[#4B7B6A]/20 bg-gradient-to-t from-[#4B7B6A]/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-[#A4C6B7] text-sm font-light">{at("footer")}</div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-[#A4C6B7] hover:text-white transition-colors duration-300 text-sm">
                {at("privacy")}
              </a>
              <a href="#" className="text-[#A4C6B7] hover:text-white transition-colors duration-300 text-sm">
                {at("terms")}
              </a>
              <div className="flex items-center space-x-1 text-sm">
                {(["en", "lt", "no"] as Language[]).map((lang, index) => (
                  <div key={lang} className="flex items-center">
                    <button
                      onClick={() => setLanguage(lang)}
                      className={`px-2 py-1 rounded transition-all duration-300 text-xs ${
                        language === lang
                          ? "text-white bg-white/10"
                          : "text-[#A4C6B7] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                    {index < 2 && <span className="text-[#4B7B6A] mx-1">|</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Value Propositions Component
function ValuePropositions({ t }: { t: (key: string) => string }) {
  const [ref, isInView] = useInView(0.2)

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#4B7B6A]/5 to-[#0A2D28]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { icon: Target, title: t("marketIntel"), desc: t("marketIntelDesc"), delay: 0 },
            { icon: Users, title: t("connections"), desc: t("connectionsDesc"), delay: 200 },
            { icon: TrendingUp, title: t("strategy"), desc: t("strategyDesc"), delay: 400 },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className={`bg-transparent border-[#4B7B6A]/20 hover:border-[#6EA282]/40 transition-all duration-700 group hover:shadow-2xl hover:shadow-[#6EA282]/10 transform ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <CardContent className="p-10 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#4B7B6A] to-[#6EA282] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    <p className="text-[#A4C6B7] leading-relaxed text-sm font-light">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection({ services, t }: { services: any[]; t: (key: string) => string }) {
  const [ref, isInView] = useInView(0.1)

  return (
    <section ref={ref} id="about" className="py-32 bg-gradient-to-b from-[#0A2D28] to-[#4B7B6A]/10">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-light text-white mb-24 text-center tracking-tight transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {t("services")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`bg-transparent border-[#4B7B6A]/20 hover:border-[#6EA282]/40 transition-all duration-700 group hover:shadow-2xl hover:shadow-[#6EA282]/10 hover:-translate-y-2 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#4B7B6A] to-[#6EA282] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">{service.title}</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point: string, pointIndex: number) => (
                      <li key={pointIndex} className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-[#9ED0A8] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-[#A4C6B7] text-sm font-light leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-[#9ED0A8] font-medium group">
                    <span className="text-sm">{service.closing}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Process Section Component
function ProcessSection({ at }: { at: (key: string) => string }) {
  const [ref, isInView] = useInView(0.2)

  const steps = [
    { title: at("step1"), desc: at("step1Desc") },
    { title: at("step2"), desc: at("step2Desc") },
    { title: at("step3"), desc: at("step3Desc") },
    { title: at("step4"), desc: at("step4Desc") },
  ]

  return (
    <section ref={ref} id="process" className="py-32 bg-gradient-to-b from-[#4B7B6A]/5 to-[#0A2D28]">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-light text-white mb-24 text-center tracking-tight transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {at("ourProcess")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${index % 2 === 0 ? "" : "lg:translate-y-8"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#4B7B6A] to-[#6EA282] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-xl text-2xl font-medium">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#6EA282] to-transparent opacity-30"></div>
                )}
              </div>
              <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
              <p className="text-[#A4C6B7] font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection({
  formData,
  setFormData,
  handleSubmit,
  at,
}: {
  formData: any
  setFormData: any
  handleSubmit: any
  at: (key: string) => string
}) {
  const [ref, isInView] = useInView(0.2)

  return (
    <section ref={ref} id="contact" className="py-32 bg-gradient-to-r from-[#4B7B6A]/5 to-[#6EA282]/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-light text-white mb-12 text-center tracking-tight transition-all duration-1000 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {at("readyToGrow")}
          </h2>
          <Card
            className={`bg-[#0A2D28]/50 border-[#4B7B6A]/30 backdrop-blur-sm shadow-2xl transition-all duration-1000 delay-300 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      placeholder={at("fullName")}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder={at("company")}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={at("email")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 h-12"
                  />
                </div>
                <div>
                  <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                    <SelectTrigger className="bg-transparent border-[#4B7B6A]/30 text-white focus:border-[#6EA282] transition-all duration-300 h-12">
                      <SelectValue placeholder={at("interestedIn")} className="text-[#A4C6B7]" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A2D28] border-[#4B7B6A]/30">
                      <SelectItem
                        value="baltic-nordic"
                        className="text-white hover:bg-[#4B7B6A]/20 focus:bg-[#4B7B6A]/20"
                      >
                        {at("balticNordic")}
                      </SelectItem>
                      <SelectItem
                        value="nordic-baltic"
                        className="text-white hover:bg-[#4B7B6A]/20 focus:bg-[#4B7B6A]/20"
                      >
                        {at("nordicBaltic")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    placeholder={at("message")}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#6EA282] to-[#9ED0A8] hover:from-[#9ED0A8] hover:to-[#6EA282] text-white border-0 transition-all duration-300 font-medium h-12 shadow-lg hover:shadow-xl hover:shadow-[#6EA282]/20 group"
                >
                  {at("sendMessage")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>

              <div className="mt-12 text-center">
                <div className="flex items-center justify-center space-x-8">
                  <a
                    href="mailto:hello@expandnord.com"
                    className="flex items-center text-[#A4C6B7] hover:text-white transition-colors duration-300 group"
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    hello@expandnord.com
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-[#A4C6B7] hover:text-white transition-colors duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

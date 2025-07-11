import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Users, TrendingUp } from 'lucide-react'
import { useOnceInView } from '@/hooks/useIntersectionObserver'

interface ValuePropositionsProps {
  translations: {
    marketIntel: string
    marketIntelDesc: string
    connections: string
    connectionsDesc: string
    strategy: string
    strategyDesc: string
  }
}

export const ValuePropositions: React.FC<ValuePropositionsProps> = ({ translations }) => {
  const { ref, isInView } = useOnceInView(0.2)

  const valueProps = [
    { 
      icon: Target, 
      title: translations.marketIntel, 
      desc: translations.marketIntelDesc, 
      delay: 0 
    },
    { 
      icon: Users, 
      title: translations.connections, 
      desc: translations.connectionsDesc, 
      delay: 200 
    },
    { 
      icon: TrendingUp, 
      title: translations.strategy, 
      desc: translations.strategyDesc, 
      delay: 400 
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#4B7B6A]/5 to-[#0A2D28]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {valueProps.map((item, index) => {
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
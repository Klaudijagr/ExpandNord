import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useOnceInView } from '@/hooks/useIntersectionObserver'
import { Service } from '@/lib/types'

interface ServicesSectionProps {
  services: Service[]
  sectionTitle: string
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, sectionTitle }) => {
  const { ref, isInView } = useOnceInView(0.1)

  return (
    <section ref={ref} id="services" className="py-32 bg-gradient-to-b from-[#0A2D28] to-[#4B7B6A]/10">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-light text-white mb-24 text-center tracking-tight transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {sectionTitle}
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
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-[#A4C6B7] text-sm font-light leading-relaxed pl-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[#9ED0A8] font-medium">
                    <span className="text-sm">{service.closing}</span>
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
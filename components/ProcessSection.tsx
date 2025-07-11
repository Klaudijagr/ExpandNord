import React from 'react'
import { useOnceInView } from '@/hooks/useIntersectionObserver'
import { ProcessStep } from '@/lib/types'

interface ProcessSectionProps {
  sectionTitle: string
  steps: ProcessStep[]
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ sectionTitle, steps }) => {
  const { ref, isInView } = useOnceInView(0.2)

  return (
    <section ref={ref} id="process" className="py-32 bg-gradient-to-b from-[#4B7B6A]/5 to-[#0A2D28]">
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-light text-white mb-24 text-center tracking-tight transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {sectionTitle}
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
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
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#6EA282] to-[#4B7B6A]/30"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center mb-24 last:mb-0 transition-all duration-1000 ${
                isInView ? "opacity-100" : "opacity-0"
              } ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Content Side */}
              <div 
                className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"} transform transition-all duration-1000`}
                style={{
                  transform: isInView 
                    ? "translateX(0)" 
                    : `translateX(${index % 2 === 0 ? "-20%" : "20%"})`,
                  transitionDelay: `${index * 300}ms`
                }}
              >
                <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
                <p className="text-[#A4C6B7] font-light leading-relaxed">{step.desc}</p>
              </div>

              {/* Circle in the middle */}
              <div className="relative">
                <div 
                  className={`w-16 h-16 bg-gradient-to-br from-[#4B7B6A] to-[#6EA282] rounded-full flex items-center justify-center text-xl font-medium transform transition-all duration-700 hover:scale-110 shadow-xl ${
                    isInView ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: `${index * 300 + 200}ms` }}
                >
                  {index + 1}
                </div>
                {/* Horizontal connector line */}
                <div 
                  className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r ${
                    index % 2 === 0 
                      ? "right-full from-[#6EA282] to-transparent" 
                      : "left-full from-transparent to-[#6EA282]"
                  }`}
                ></div>
              </div>

              {/* Empty Side (for alignment) */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
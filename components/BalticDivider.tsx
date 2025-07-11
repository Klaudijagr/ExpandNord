import React from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface BalticDividerProps {
  className?: string
  animated?: boolean
}

export const BalticDivider: React.FC<BalticDividerProps> = React.memo(({ className = "", animated = false }) => {
  const { ref, isInView } = useIntersectionObserver(0.3)

  return (
    <div ref={ref} className={`flex justify-center py-20 ${className}`}>
      <svg
        width="300"
        height="80"
        viewBox="0 0 300 80"
        className={`opacity-15 text-[#6EA282] transition-all duration-1000 ${
          animated && isInView ? "scale-100 opacity-15" : animated ? "scale-75 opacity-0" : ""
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
})
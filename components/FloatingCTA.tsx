import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

interface FloatingCTAProps {
  text: string
  onClick: () => void
}

const FloatingCTAComponent: React.FC<FloatingCTAProps> = ({ text, onClick }) => {
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

FloatingCTAComponent.displayName = 'FloatingCTA'
export const FloatingCTA = React.memo(FloatingCTAComponent)

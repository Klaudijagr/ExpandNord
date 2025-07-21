import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface FloatingCTAProps {
  text: string
  onClick: () => void
}

export const FloatingCTA: React.FC<FloatingCTAProps> = React.memo(({ text, onClick }) => {
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
})
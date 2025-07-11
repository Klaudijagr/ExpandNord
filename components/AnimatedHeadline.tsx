import React, { useState, useEffect } from 'react'

interface AnimatedHeadlineProps {
  text: string
  delay?: number
  className?: string
}

export const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = React.memo(({ text, delay = 0, className = "" }) => {
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
    <span className={`inline-block ${className}`}>
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
})
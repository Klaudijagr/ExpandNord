import { useEffect, useState } from 'react'

export const useScrollTracking = (threshold: number = 20) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

export const useScrollToElement = () => {
  const scrollToElement = (elementId: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior })
    }
  }

  return scrollToElement
}
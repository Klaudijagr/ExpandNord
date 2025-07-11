import { useState, useCallback } from 'react'
import { FormData } from '@/lib/types'

const initialFormData: FormData = {
  fullName: '',
  company: '',
  email: '',
  interest: '',
  message: '',
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Implement actual form submission
      console.log('Form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
    setSubmitStatus('idle')
  }, [])

  return {
    formData,
    isSubmitting,
    submitStatus,
    updateField,
    handleSubmit,
    resetForm,
  }
}
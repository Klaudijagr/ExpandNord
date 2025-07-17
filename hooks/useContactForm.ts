import { useState, useCallback } from 'react'
import { FormData } from '@/lib/types'

const initialFormData: FormData = {
  fullName: '',
  company: '',
  email: '',
  interest: '',
  message: '',
}

const CONTACT_EMAILS = ['martyna@expandnord.com', 'klaudija@expandnord.com']

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
      // Send form data to both email addresses
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipients: CONTACT_EMAILS,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send form')
      }

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
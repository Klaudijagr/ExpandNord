import { useCallback, useState } from 'react'
import type { FormData } from '@/lib/types'

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
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        const web3FormData = new FormData()
        web3FormData.append('access_key', 'b4906863-2b9e-4cfb-8b3e-dc7e757ba1da')
        web3FormData.append('name', formData.fullName)
        web3FormData.append('company', formData.company)
        web3FormData.append('email', formData.email)
        web3FormData.append('interest', formData.interest)
        web3FormData.append('message', formData.message)
        web3FormData.append('subject', `New Contact - ${formData.interest}`)

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3FormData,
        })

        const data = await response.json()

        if (!data.success) {
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
    },
    [formData]
  )

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

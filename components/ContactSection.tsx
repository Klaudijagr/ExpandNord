import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Mail, Linkedin } from 'lucide-react'
import { useOnceInView } from '@/hooks/useIntersectionObserver'
import { useContactForm } from '@/hooks/useContactForm'

interface ContactSectionProps {
  translations: {
    readyToGrow: string
    fullName: string
    company: string
    email: string
    interestedIn: string
    balticNordic: string
    nordicBaltic: string
    message: string
    sendMessage: string
  }
}

export const ContactSection: React.FC<ContactSectionProps> = ({ translations }) => {
  const { ref, isInView } = useOnceInView(0.2)
  const { formData, isSubmitting, updateField, handleSubmit } = useContactForm()

  return (
    <section ref={ref} id="contact" className="py-32 bg-gradient-to-r from-[#4B7B6A]/5 to-[#6EA282]/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-light text-white mb-12 text-center tracking-tight transition-all duration-1000 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {translations.readyToGrow}
          </h2>
          <Card
            className={`bg-[#0A2D28]/50 border-[#4B7B6A]/30 backdrop-blur-sm shadow-2xl transition-all duration-1000 delay-300 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      placeholder={translations.fullName}
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder={translations.company}
                      value={formData.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 h-12"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={translations.email}
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 h-12"
                  />
                </div>
                <div>
                  <Select onValueChange={(value) => updateField('interest', value)}>
                    <SelectTrigger className="bg-transparent border-[#4B7B6A]/30 text-white focus:border-[#6EA282] transition-all duration-300 h-12">
                      <SelectValue placeholder={translations.interestedIn} className="text-[#A4C6B7]" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A2D28] border-[#4B7B6A]/30">
                      <SelectItem
                        value="baltic-nordic"
                        className="text-white hover:bg-[#4B7B6A]/20 focus:bg-[#4B7B6A]/20"
                      >
                        {translations.balticNordic}
                      </SelectItem>
                      <SelectItem
                        value="nordic-baltic"
                        className="text-white hover:bg-[#4B7B6A]/20 focus:bg-[#4B7B6A]/20"
                      >
                        {translations.nordicBaltic}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    placeholder={translations.message}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="bg-transparent border-[#4B7B6A]/30 text-white placeholder:text-[#A4C6B7] focus:border-[#6EA282] transition-all duration-300 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6EA282] to-[#9ED0A8] hover:from-[#9ED0A8] hover:to-[#6EA282] text-white border-0 transition-all duration-300 font-medium h-12 shadow-lg hover:shadow-xl hover:shadow-[#6EA282]/20 group disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : translations.sendMessage}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>

              <div className="mt-12 text-center">
                <div className="flex items-center justify-center space-x-8">
                  <a
                    href="mailto:hello@expandnord.com"
                    className="flex items-center text-[#A4C6B7] hover:text-white transition-colors duration-300 group"
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    hello@expandnord.com
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-[#A4C6B7] hover:text-white transition-colors duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
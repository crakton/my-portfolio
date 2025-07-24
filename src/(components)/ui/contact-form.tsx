'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual implementation)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would integrate with EmailJS, Formspree, or your own API
    console.log('Form submitted:', formData)

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 glass-effect rounded-xl bg-transparent border border-border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 glass-effect rounded-xl bg-transparent border border-border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 glass-effect rounded-xl bg-transparent border border-border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          placeholder="Project inquiry"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 glass-effect rounded-xl bg-transparent border border-border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
          isSubmitted
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
            Sending...
          </>
        ) : isSubmitted ? (
          'Message Sent!'
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  )
}
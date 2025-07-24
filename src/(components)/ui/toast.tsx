'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Toast {
  id: string
  title: string
  description?: string
  type: 'success' | 'error' | 'info'
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  useEffect(() => {
    // Auto-remove toasts after 5 seconds
    toasts.forEach(toast => {
      setTimeout(() => removeToast(toast.id), 5000)
    })
  }, [toasts])

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className={`glass-effect p-4 rounded-lg max-w-sm ${
              toast.type === 'success' ? 'border-green-500' :
              toast.type === 'error' ? 'border-red-500' : 'border-blue-500'
            } border`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{toast.title}</h4>
                {toast.description && (
                  <p className="text-sm text-muted-foreground mt-1">{toast.description}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 hover:opacity-70 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
'use client'

import { useState, useEffect } from 'react'

interface Field {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  required?: boolean
}

interface GenericFormModalProps {
  title: string
  fields: Field[]
  onClose: () => void
}

export default function GenericFormModal({ title, fields, onClose }: GenericFormModalProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    Object.fromEntries(fields.map((f) => [f.name, '']))
  )

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Réservation :\n${Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')}`)
    onClose()
  }

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) =>
            field.type === 'textarea' ? (
              <textarea
                key={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-emerald-200"
                rows={3}
                required={field.required}
              />
            ) : (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:ring-emerald-200"
                required={field.required}
              />
            )
          )}

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Valider
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Fermer"
        >
          ×
        </button>
      </div>
    </div>
  )
}

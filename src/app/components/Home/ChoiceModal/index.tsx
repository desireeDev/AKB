'use client'

import React, { useState } from 'react'
import { PackType } from '@/app/types/packs'
import { motion, AnimatePresence } from 'framer-motion'

type ChoiceModalProps = {
  isOpen: boolean
  onClose: () => void
  selectedPack: PackType | null
}

const ChoiceModal: React.FC<ChoiceModalProps> = ({ isOpen, onClose, selectedPack }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [duration, setDuration] = useState('1 mois')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!selectedPack) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) {
      alert('Veuillez remplir tous les champs')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          //packId: selectedPack.id,
          name,
          email,
          duration,
        }),
      })

      if (!res.ok) throw new Error('Erreur lors de la souscription')

      setSuccess(true)

      // Pour imprimer le reçu simple :
      setTimeout(() => {
        window.print()
        onClose()
      }, 1000)
    } catch (err) {
      console.error(err)
      alert('Une erreur est survenue.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '2rem', maxWidth: '28rem', width: '100%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl"
          >
            <h3 className="text-2xl font-bold text-emerald-500 mb-4">
              Choisir : {selectedPack.name}
            </h3>
            <p className="text-gray-600 mb-4">
              Remplissez ce formulaire pour finaliser votre abonnement.
            </p>

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Votre nom</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Entrez votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Adresse email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Entrez votre email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Durée de l'abonnement</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option>3 mois</option>
                    <option>6 mois</option>
                    <option>1 an</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-500 text-white rounded px-4 py-2 hover:bg-emerald-600 transition"
                >
                  {loading ? 'Envoi...' : 'Valider'}
                </button>
              </form>
            ) : (
              <p className="text-emerald-500 font-semibold">Abonnement enregistré ! Impression du reçu...</p>
            )}

            {!success && (
              <button
                onClick={onClose}
                className="mt-4 text-sm text-gray-500 hover:underline"
              >
                Annuler
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ChoiceModal

'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RemiseForm from '../RemiseForm'
import ChantierForm from '../ChantierForm'
import AbonnementInfo from '../AbonnementInfo'

type ServiceModalProps = {
  isOpen: boolean
  onClose: () => void
  serviceKey: string | null
}

export default function ServiceModal({ isOpen, onClose, serviceKey }: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-lg w-full"
          >
            {serviceKey === 'remise' && <RemiseForm onClose={onClose} />}
            {serviceKey === 'chantier' && <ChantierForm onClose={onClose} />}
            {serviceKey === 'abonnement' && <AbonnementInfo onClose={onClose} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

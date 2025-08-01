'use client'

import { useState } from 'react'

export default function ChantierForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Réservation Nettoyage Chantier pour ${name} (${details})`)
    onClose()
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Réserver - Nettoyage Fin de Chantier</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Détails du chantier"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded">
          Valider
        </button>
      </form>
      <button onClick={onClose} className="mt-4 text-sm text-gray-500 hover:underline">
        Annuler
      </button>
    </div>
  )
}

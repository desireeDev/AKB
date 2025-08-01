'use client'

import { useState } from 'react'

export default function RemiseForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Ici tu peux remplacer par un appel API POST
    alert(
      `Réservation Remise en état :
Nom : ${name}
Email : ${email}
Téléphone : ${phone}
Adresse : ${address}
Date souhaitée : ${date}
Détails : ${details}`
    )

    onClose()
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Réserver - Remise en état</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="tel"
          placeholder="Numéro de téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Adresse complète"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          placeholder="Détails ou commentaires (facultatif)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full border p-2 rounded"
          rows={3}
        />

        <button
          type="submit"
          className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600 transition"
        >
          Valider la réservation
        </button>
      </form>

      <button
        onClick={onClose}
        className="mt-4 text-sm text-gray-500 hover:underline"
      >
        Annuler
      </button>
    </div>
  )
}

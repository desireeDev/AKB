'use client'
import { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  selectedService: string | null
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateReservation: '', // nouveau champ ajouté
    message: '',
    service: selectedService || ''
  })

  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici tu peux envoyer `formData` vers ton backend / API
    console.log(formData)
    setSubmitted(true)
  }

  const closeModal = () => {
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      dateReservation: '',
      message: '',
      service: ''
    })
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h3 className="text-xl font-bold mb-4">
              Réserver – {selectedService || 'Choisissez un service'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              >
                <option value="">Sélectionnez un service</option>
                <option value="Jardinage">Jardinage</option>
                <option value="Aide à la personne">Aide à la personne</option>
                <option value="Livraison & Courses">Livraison & Courses</option>
              </select>
              {/* Champ date de réservation */}
              <input
                type="date"
                name="dateReservation"
                value={formData.dateReservation}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-emerald-200 text-black rounded-full py-2 hover:bg-primary/90 transition"
              >
                Envoyer
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">✅ Réservation Confirmée !</h3>
            <p className="text-gray-600 mb-4">
              Merci {formData.prenom} {formData.nom}, votre réservation pour le service <strong>{formData.service}</strong> le <strong>{formData.dateReservation}</strong> a bien été enregistrée !
            </p>
            <button
              onClick={closeModal}
              className="bg-primary text-white rounded-full px-6 py-2 hover:bg-primary/90 transition"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal

'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'
import ServiceModal from '../../ServiceModal'

const services = [
  {
    title: 'Remise en état',
    description: 'Nettoyage complet après travaux, sinistre ou déménagement.',
    icon: 'mdi:home',
    cta: 'Réserver',
    key: 'remise'
  },
  {
    title: 'Nettoyage Fin de Chantier',
    description: 'Rendez vos locaux propres après des travaux.',
    icon: 'mdi:hammer-screwdriver',
    cta: 'Réserver',
    key: 'chantier'
  },
  {
    title: 'Nos Abonnements',
    description: 'Formules régulières adaptées à votre rythme.',
    icon: 'mdi:calendar-check',
    cta: 'Choisir',
    key: 'abonnement'
  }
]

export default function NettoyageDomestique() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const openModal = (key: string) => {
    setSelectedService(key)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section id="nettoyage_domestique" className="py-16 bg-emerald-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-emerald-500">
          Nettoyage Domestique
        </h2>
        <p className="text-center text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
          Découvrez notre offre de services pour un nettoyage domestique sur-mesure.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-emerald-100 rounded-xl shadow p-6 flex flex-col justify-between"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-emerald-300 rounded-full">
                    <Icon icon={item.icon} className="text-emerald-700" width={30} height={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-emerald-800">{item.title}</h3>
                    <p className="text-emerald-900">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <button
                    onClick={() => openModal(item.key)}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
                  >
                    {item.cta}
                  </button>
                  <Icon icon="tabler:link" className="text-emerald-600" width={24} height={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceModal isOpen={modalOpen} onClose={closeModal} serviceKey={selectedService} />
    </section>
  )
}

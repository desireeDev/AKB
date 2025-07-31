'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Modal from '../Modal'

const prestations = [
  {
    title: 'Jardinage',
    description:
      'Entretien de votre jardin : tonte de pelouse, taille de haies, désherbage et petits aménagements extérieurs.',
    icon: 'mdi:shovel'
  },
  {
    title: 'Aide à la personne',
    description:
      "Services d'accompagnement pour les personnes âgées ou à mobilité réduite : courses, aide ménagère, accompagnement au quotidien.",
    icon: 'mdi:account-heart'
  },
  {
    title: 'Livraison & Courses',
    description:
      "Un service de livraison à domicile pour vos courses alimentaires, colis ou achats spécifiques en toute simplicité.",
    icon: 'mdi:truck-delivery'
  }
]

export default function Demande() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const openModal = (service: string) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedService(null)
    setIsModalOpen(false)
  }

  return (
    <section id='prestation' className="py-16 bg-emerald-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-emerald-500">Prestations à la demande</h2>
        <p className="text-center text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
          AGATHA Group vous propose une gamme de prestations personnalisées pour répondre à tous vos besoins du quotidien.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {prestations.map((item, index) => (
              <div
                key={index}
                className="bg-emerald-100 rounded-xl shadow p-6 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-duration="800"
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
                    onClick={() => openModal(item.title)}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
                  >
                    Réserver
                  </button>
                  <Icon icon="tabler:link" className="text-emerald-600" width={24} height={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👉 Call Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} selectedService={selectedService} />
    </section>
  )
}

'use client'
import { Icon } from '@iconify/react'

const services = [
  {
    title: 'Remise en état',
    description: 'Nettoyage complet après travaux, sinistre ou déménagement pour remettre vos espaces en parfait état.',
    icon: 'mdi:home',
    cta: 'Réserver'
  },
  {
    title: 'Nettoyage Fin de Chantier',
    description: 'Service spécialisé pour rendre vos locaux propres et habitables après des travaux de construction ou de rénovation.',
    icon: 'mdi:hammer-screwdriver',
    cta: 'Réserver'
  },
  {
    title: 'Nos Abonnements',
    description: 'Des formules de nettoyage régulier pour votre maison ou appartement, adaptées à votre rythme de vie.',
    icon: 'mdi:calendar-check',
    cta: 'Choisir'
  }
]

export default function NettoyageDomestique() {
  return (
    <section id="nettoyage_domestique" className="py-16 bg-[#e8f5f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-emerald-500">Nettoyage Domestique</h2>
        <p className="text-center text-lg mb-12 text-gray-600 max-w-2xl mx-auto">
          Découvrez notre offre de services pour un nettoyage domestique sur-mesure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-200 rounded-full">
                  <Icon icon={item.icon} className="text-green-600" width={30} height={30} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <button className="px-4 py-2 bg-emerald-200  text-black rounded-full hover:bg-primary/90 transition">
                  {item.cta}
                </button>
                <Icon icon="tabler:link" className="text-gray-400" width={24} height={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

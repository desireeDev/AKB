'use client'

import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ExpertChiefType } from '@/app/types/expertchief'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'
import GenericFormModal from '../../GenericFormModal'

const Expert = () => {
  const [chiefDetail, setChiefDetail] = useState<ExpertChiefType[]>([])
  const [loading, setLoading] = useState(true)

  const [openModal, setOpenModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalFields, setModalFields] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setChiefDetail(data.ExpertChiefData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 2 } },
      { breakpoint: 450, settings: { slidesToShow: 1 } },
    ],
  }

  const handleReserve = (serviceName: string) => {
    setModalTitle(`Réservation - ${serviceName}`)

    // Tu peux adapter dynamiquement les champs par service ici
    const fields = [
      { name: 'name', label: 'Nom', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'items', label: 'Articles à nettoyer', type: 'textarea' },
      { name: 'instructions', label: 'Instructions spéciales', type: 'textarea' },
    ]

    setModalFields(fields)
    setOpenModal(true)
  }

  return (
    <section id="services_pressing" className="py-16 bg-emerald-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-emerald-500">Nos Services de Pressing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confiez-nous vos vêtements pour un entretien irréprochable grâce à notre expertise.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <ChiefDetailSkeleton key={i} />
                ))
              : chiefDetail.map((item, i) => (
                  <div key={i} className="p-4">
                    <div className="bg-emerald-100 rounded-xl shadow p-6 flex flex-col justify-between text-center hover:shadow-lg transition">
                      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={item.imgSrc}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-emerald-800">{item.name}</h3>
                      <p className="text-emerald-900 mb-4">{item.profession}</p>
                      <button
                        onClick={() => handleReserve(item.name)}
                        className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
                      >
                        Réserver
                      </button>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>

        {openModal && (
          <GenericFormModal
            title={modalTitle}
            fields={modalFields}
            onClose={() => setOpenModal(false)}
          />
        )}
      </div>
    </section>
  )
}

export default Expert

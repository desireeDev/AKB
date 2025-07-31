'use client'

import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PackType } from '@/app/types/packs'
import PacksSkeleton from '../../Skeleton/PacksSkeleton/index'
import ChoiceModal from '../ChoiceModal' 

const Packs = () => {
  const [packs, setPacks] = useState<PackType[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPack, setSelectedPack] = useState<PackType | null>(null)

  useEffect(() => {
    const fetchPacks = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch packs')
        const data = await res.json()
        setPacks(data.PacksData)
      } catch (error) {
        console.error('Error fetching packs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPacks()
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

  return (
    <section id="packs" className="bg-emerald-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-emerald-500">Nos Packs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos formules avantageuses pour un service tout compris, adapté à vos besoins.
          </p>
        </div>

        {/* Container blanc autour du slider */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <PacksSkeleton key={i} />
                ))
              : packs.map((pack, i) => (
                  <div key={i} className="p-4">
                    <div className="bg-emerald-100 rounded-xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition text-center">
                      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                        <Image
                          src={pack.imgSrc}
                          alt={pack.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-emerald-800">{pack.name}</h3>
                      <p className="text-emerald-900 mb-2">{pack.description}</p>
                      <p className="text-emerald-700 text-xl font-bold mb-4">{pack.price}F</p>
                      <button
                        className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
                        onClick={() => setSelectedPack(pack)}
                      >
                        Choisir
                      </button>
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </div>

      {/* ✅ Modal réutilisé */}
      <ChoiceModal
        isOpen={!!selectedPack}
        onClose={() => setSelectedPack(null)}
        selectedPack={selectedPack}
      />
    </section>
  )
}

export default Packs

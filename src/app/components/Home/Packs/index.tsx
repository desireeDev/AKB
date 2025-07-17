'use client'

import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PackType } from '@/app/types/packs'
import PacksSkeleton from '../../Skeleton/PacksSkeleton/index'

const Packs = () => {
  const [packs, setPacks] = useState<PackType[]>([])
  const [loading, setLoading] = useState(true)

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
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 450,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section className='bg-primary/5'>
      <div className='container'>
        <div className='text-center'>
          <h2>Nos Packs</h2>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <PacksSkeleton key={i} />
              ))
            : packs.map((pack, i) => (
                <div key={i}>
                  <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
                    <div className='relative'>
                      <Image
                        src={pack.imgSrc}
                        alt={pack.name}
                        width={362}
                        height={262}
                        className='inline-block m-auto w-auto'
                      />
                    </div>
                    <div className='mt-16'>
                      <h3 className='text-2xl font-semibold text-black'>
                        {pack.name}
                      </h3>
                      <h4 className='text-lg font-normal text-black/50 opacity-50'>
                        {pack.description}
                      </h4>
                      <p className='text-primary text-xl font-bold mt-4'>
                        {pack.price}€
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Packs

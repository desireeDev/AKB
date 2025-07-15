'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Erreur lors de la récupération des liens:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='pt-12 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          {/* Logo & Description */}
          <div className='col-span-2'>
            <Logo />
            <p className='text-sm font-medium text-gray-600 my-5 max-w-[90%]'>
              Votre pressing de confiance : un linge impeccable, un service
              rapide et éco-responsable.
            </p>
            <div className='flex gap-4 items-center'>
              <Link
                href='#'
                aria-label='Facebook'
                className='group bg-white border border-blue-600 hover:bg-blue-600 rounded-full shadow p-3 transition'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='16'
                  height='16'
                  className='text-blue-600 group-hover:text-white'
                />
              </Link>
              <Link
                href='#'
                aria-label='Instagram'
                className='group bg-white border border-blue-600 hover:bg-blue-600 rounded-full shadow p-3 transition'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='16'
                  height='16'
                  className='text-blue-600 group-hover:text-white'
                />
              </Link>
              <Link
                href='#'
                aria-label='Twitter'
                className='group bg-white border border-blue-600 hover:bg-blue-600 rounded-full shadow p-3 transition'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='16'
                  height='16'
                  className='text-blue-600 group-hover:text-white'
                />
              </Link>
            </div>
          </div>

          {/* Liens dynamiques */}
          <div className='col-span-2'>
            <div className='flex gap-12 flex-wrap'>
              {footerlink.map((section, i) => (
                <div key={i}>
                  <p className='text-black text-xl font-semibold mb-5'>
                    {section.section}
                  </p>
                  <ul>
                    {section.links.map((item, idx) => (
                      <li key={idx} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-blue-600 text-base transition'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Coordonnées */}
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <div className='flex items-start'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-blue-600 text-2xl inline-block mr-2'
                />
                <p className='text-black text-base'>
                  12 Rue de la Lavande, 75015 Paris
                </p>
              </div>
              <Link href='tel:+33123456789'>
                <div className='flex items-center hover:text-blue-600 transition'>
                  <Icon
                    icon='solar:phone-bold'
                    className='text-blue-600 text-2xl inline-block mr-2'
                  />
                  <p className='text-black text-base'>+33 1 23 45 67 89</p>
                </div>
              </Link>
              <Link href='mailto:contact@monpressing.fr'>
                <div className='flex items-center hover:text-blue-600 transition'>
                  <Icon
                    icon='solar:mailbox-bold'
                    className='text-blue-600 text-2xl inline-block mr-2'
                  />
                  <p className='text-black text-base'>
                    contact@monpressing.fr
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className='border-t border-gray-200 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-black/70'>
            © 2025 - Mon Pressing. Tous droits réservés.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Link
              href='/privacy'
              className='text-sm text-black/70 hover:text-blue-600 hover:underline'>
              Politique de confidentialité
            </Link>
            <Link
              href='/terms'
              className='text-sm text-black/70 hover:text-blue-600 hover:underline'>
              Conditions générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Presentation from './components/Home/Presentation'
import NettoyageIndustriel from './components/Home/NettoyageIn'
import NettoyageDomestique from './components/Home/NettoyageD'
import Packs from './components/Home/Packs'

import { Metadata } from 'next'

import Demande from './components/Home/Demande'
export const metadata: Metadata = {
  title: 'AGI',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Packs />
      {/* Uncomment the following line if you want to include the Gallery component */}
      {/* <Gallery /> */}
      
      <Expert />

      <Presentation />
      <NettoyageIndustriel />
      <NettoyageDomestique />

     {/* <Gallery /> */}
     
    
      {/* <ContactForm /> */}
      <Demande />
     
      {/* <Newsletter /> */}
    </main>
  )
}

'use client'

import Image from 'next/image'
// import Expert from '@/components/Home/Expert'
// Update the import path below if the file exists elsewhere:
import Expert from '../Expert'
import Packs from '../Packs'
const Cook = () => {
  return (
    <section className='relative' id='packs-services'>
      <div className='container px-4'>

        {/* Ton image à droite */}
        {/* <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/burger.webp'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div> */}

        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/habit.svg'
              alt='nothing'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              Nos Packs et Services
            </p>
            <h2 className='lg:text-start text-center'>
              Des Vêtements Impeccables, Des Services Sur Mesure
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              Chez AGATHA GROUP INTERNATIONAL, chaque vêtement est traité avec un soin unique.
              Notre équipe d’experts met à profit des techniques modernes et précises pour garantir
              un nettoyage et un entretien irréprochables, que ce soit pour un simple détachage ou
              des retouches sur mesure.

              Nous prenons en charge deux types de linges :<br />
              Les linges ordinaires, comprenant les vêtements du quotidien,<br />
              Les linges spécifiques, tels que les costumes, draps, serviettes,
              et autres textiles délicats nécessitant un soin particulier.
            </p>
          </div>
        </div>

        {/* 🔥 AJOUTE TES SLIDERS ICI */}
    
        <Packs />

      </div>
    </section>
  )
}

export default Cook

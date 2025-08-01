'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='"bg-sky-100 p-4'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
             L’Art du Propre 
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
           Votre temps est précieux. Nous prenons soin de votre espace et de votre linge. Avec AGI, votre linge et votre maison sont entre de bonnes mains.
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#présentation'>
             <button className='text-xl font-medium rounded-full text-cyan-700 py-3 px-8 bg-cyan-100 hover:text-white border border-cyan-400 hover:bg-cyan-500 hover:cursor-pointer transition ease-in-out duration-300'>
  Télécharger l'application mobile
</button>


              </Link>
            {/*   <Link href='/#reserve'>
                <button className='text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  Prendre un rendez-vous
                </button>
              </Link> */}
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image
                src={'/images/hero/lingette.png'}
                alt='pizza-image'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                 Plus de 50 vêtements <br /> traités chaque jour
              </p>
            </div>
            <Image
              src='/images/hero/habit.png'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

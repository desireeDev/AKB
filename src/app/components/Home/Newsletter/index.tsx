'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Newsletter = () => {
  return (
    <section className='relative overflow-hidden md:py-20'>
      <div className='container'>
        <div className='bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
          <div className='md:col-span-7'>
            <div className='m-5 sm:m-10 lg:ml-32 lg:mt-20 lg:mb-20'>
              <p className='text-lg font-normal text-white mb-3 tracking-widest'>
                NEWSLETTER
              </p>
              <h2 className='text-white mb-8'>
                Inscrivez-vous à notre <br /> newsletter
              </h2>

              <div>
                <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                  <input
                    type='email'
                    name='email'
                    className='pl-4 pr-16 py-4 text-sm w-full bg-white text-black rounded-full focus:outline-hidden focus:text-black'
                    placeholder='votre.email@email.com'
                    autoComplete='off'
                  />
                  <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <button
                      type='submit'
                      className='p-1 bg-gray-900 hover:scale-110 duration-300 rounded-full hover:cursor-pointer'>
                      <Icon
                        icon='tabler:arrow-narrow-right'
                        width='28'
                        height='28'
                        className='text-white'
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='md:col-span-5 relative hidden md:block'>
            <div>
              <Image
                src={'/images/Newsletter/panierLinge.png'} // 👉 Remplace par une image liée au pressing
                alt='Panier de linge'
                width={600}
                height={600}
                className='-mt-24'
              />
            </div>
            <div className='absolute top-[78%]'>
              <Image
                src={'/images/Newsletter/bouteille.png'} // 👉 Par exemple un flacon de lessive
                alt='Bouteille de lessive'
                width={200}
                height={200}
              />
            </div>
            <div className='absolute top-[30%] right-[-23%]'>
              <Image
                src={'/images/Newsletter/blanc.png'} // 👉 Un t-shirt propre
                alt='T-shirt propre'
                width={200}
                height={200}
              />
            </div>
           
            <div className='absolute bottom-[20%] right-[20%]'>
              <Image
                src={'/images/Newsletter/blanc.png'} // 👉 Une petite bulle
                alt='Petite bulle'
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

'use client'
import Link from 'next/link'

import Logo from '@/app/components/Layout/Header/Logo'

const Signin = () => {
  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block'>
        <Logo />
      </div>
     <span className="block my-8 text-center">
  <span className="relative inline-block px-3 text-lg font-bold text-emerald-600">
    Connexion
  </span>
</span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Adresse e-mail'
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Mot de passe'
            className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
          />
        </div>
        <div className='mb-9'>
         <button
  type='submit'
  className='bg-emerald-500 w-full py-3 rounded-lg text-18 font-medium border text-white border-emerald-500 hover:text-emerald-500 hover:bg-transparent hover:cursor-pointer transition duration-300 ease-in-out'>
  Se connecter
</button>


        </div>
      </form>

     {/*  <Link
        href='/'
        className='mb-2 inline-block text-base text-black hover:text-primary hover:underline'>
        Mot de passe oublié ?
      </Link> */}
     {/*  <p className='text-black text-base'>
        Pas encore inscrit ?{' '}
        <Link href='/' className='text-primary hover:underline'>
          Créer un compte
        </Link>
      </p> */}
    </>
  )
}

export default Signin

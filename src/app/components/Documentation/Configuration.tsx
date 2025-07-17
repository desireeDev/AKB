'use client'

import { useState, useEffect } from 'react'

export const Configuration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    newsletter: false,
    consent: false,
  })

  const [isFormValid, setIsFormValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const isValid =
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.consent

    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!isFormValid) return

    setLoading(true)

    try {
      // Remplace ici par ton endpoint ou service
      await new Promise((res) => setTimeout(res, 2000))
      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        newsletter: false,
        consent: false,
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      id='configuration'
      className='pb-10 md:scroll-m-[180px] scroll-m-28 max-w-2xl mx-auto'
    >
      <h3 className='text-2xl font-semibold mt-4 mb-6 text-black'>
        Contactez-nous
      </h3>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 p-6 rounded-xl border border-blue-600 bg-white shadow-md'
      >
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1'>
            <label className='block mb-1 text-base text-black'>Nom</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Agathe Groupe Inter'
              className='w-full px-4 py-2.5 border border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none'
            />
          </div>
          <div className='flex-1'>
            <label className='block mb-1 text-base text-black'>Prénom</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Jean'
              className='w-full px-4 py-2.5 border border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none'
            />
          </div>
        </div>

        <div>
          <label className='block mb-1 text-base text-black'>Téléphone</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='06 12 34 56 78'
            className='w-full px-4 py-2.5 border border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none'
          />
        </div>

        <div>
          <label className='block mb-1 text-base text-black'>E-mail</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='agathagroupinter.@email.com'
            className='w-full px-4 py-2.5 border border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none'
          />
        </div>

        <div>
          <label className='block mb-1 text-base text-black'>Message</label>
          <textarea
            name='message'
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder='Votre message ici...'
            className='w-full px-4 py-2.5 border border-blue-300 rounded-lg focus:border-blue-600 focus:outline-none'
          ></textarea>
        </div>

       {/*  <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            name='newsletter'
            checked={formData.newsletter}
            onChange={handleChange}
            className='accent-blue-600'
          />
          <label className='text-base text-black'>
            J'accepte de m'inscrire à la newsletter
          </label>
        </div> */}

        <div className='flex items-start gap-2'>
          <input
            type='checkbox'
            name='consent'
            checked={formData.consent}
            onChange={handleChange}
            className='mt-1 accent-blue-600'
          />
          <p className='text-sm text-black'>
            En cochant cette case, vous confirmez avoir pris connaissance de{' '}
            <a href='/privacy' className='text-blue-600 underline'>
              notre politique de confidentialité
            </a>
            .
          </p>
        </div>

        <p className='text-xs text-black/60 mt-2'>
          Ce site est protégé par reCAPTCHA et les{' '}
          <a
            href='https://policies.google.com/privacy'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'
          >
            Règles de Confidentialité
          </a>{' '}
          et{' '}
          <a
            href='https://policies.google.com/terms'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'
          >
            Conditions d&apos;utilisation
          </a>{' '}
          de Google s&apos;appliquent.
        </p>

        <button
          type='submit'
          disabled={!isFormValid || loading}
          className={`mt-4 px-6 py-3 rounded-full text-white font-semibold 
            ${
              !isFormValid || loading
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 transition'
            }`}
        >
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>

        {submitted && (
          <p className='text-green-600 font-medium mt-4'>
            Merci ! Votre message a bien été envoyé.
          </p>
        )}
      </form>
    </div>
  )
}

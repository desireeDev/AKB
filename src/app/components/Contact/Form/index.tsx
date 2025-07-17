'use client'
import React, { useState, useEffect, useRef } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phnumber: '',
    outlet: '',
    dropDate: '',
    pickUpDate: '',
    garmentType: '',
    Message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  const ticketRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      fullname: '',
      email: '',
      phnumber: '',
      outlet: '',
      dropDate: '',
      pickUpDate: '',
      garmentType: '',
      Message: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        FullName: formData.fullname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Outlet: formData.outlet,
        DropDate: formData.dropDate,
        PickUpDate: formData.pickUpDate,
        GarmentType: formData.garmentType,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          setLoader(false)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }
      })
      .catch((error) => {
        console.log(error.message)
        setLoader(false)
      })
  }

  const handlePrint = () => {
    if (ticketRef.current) {
      const printContents = ticketRef.current.innerHTML
      const win = window.open('', '', 'height=600,width=800')
      if (win) {
        win.document.write('<html><head><title>Votre Ticket</title>')
        win.document.write('<style>body{font-family:sans-serif;padding:20px;} p{margin:8px 0;}</style>')
        win.document.write('</head><body>')
        win.document.write(printContents)
        win.document.write('</body></html>')
        win.document.close()
        win.print()
      }
    }
  }

  return (
    <section id='reserve' className='scroll-mt-20 py-12 bg-gray-50'>
      <div className='container mx-auto px-6 max-w-5xl'>
        {/* <p className='text-primary text-lg font-semibold mb-3 tracking-widest uppercase text-center'>
          Dépôt Pressing
        </p> */}
        <h2 className='mb-10 text-4xl font-extrabold tracking-tight text-center text-gray-900'>
       Fixer un rendez-vous
        </h2>
        <div className='relative rounded-3xl shadow-lg bg-white p-10'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            {/* Groupe 1 */}
            <div className='sm:flex gap-6'>
              <div className='flex-1 flex flex-col'>
                <label htmlFor='fname' className='pb-2 text-base font-semibold text-gray-700'>
                  Nom complet
                </label>
                <input
                  id='fname'
                  type='text'
                  name='fullname'
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder='Agatha Groupe Inter'
                  className='w-full text-base px-4 py-3 rounded-2xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                  required
                />
              </div>
              <div className='flex-1 flex flex-col mt-6 sm:mt-0'>
                <label htmlFor='email' className='pb-2 text-base font-semibold text-gray-700'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='agathagroupeinter24@gmail.com'
                  className='w-full text-base px-4 py-3 rounded-2xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                  required
                />
              </div>
              <div className='flex-1 flex flex-col mt-6 sm:mt-0'>
                <label htmlFor='Phnumber' className='pb-2 text-base font-semibold text-gray-700'>
                  Téléphone
                </label>
                <input
                  id='Phnumber'
                  type='tel'
                  name='phnumber'
                  placeholder='+2250504460670'
                  value={formData.phnumber}
                  onChange={handleChange}
                  className='w-full text-base px-4 py-3 rounded-2xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                  required
                />
              </div>
            </div>

            {/* Groupe 2 */}
            <div className='sm:flex gap-6 bg-gray-50 p-6 rounded-2xl shadow-inner'>
              <div className='flex-1 flex flex-col'>
                <label htmlFor='outlet' className='pb-2 text-base font-semibold text-gray-700'>
                  Point de dépôt
                </label>
                <select
                  name='outlet'
                  id='outlet'
                  value={formData.outlet}
                  onChange={handleChange}
                  className='w-full text-base px-4 py-3 rounded-2xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                  required
                >
                  <option value=''>Choisir le point de dépôt</option>
                  <option value='Yop'>Yopougon Complexe picasso</option>
                  <option value='Yop'>Selmer</option>
                </select>
              </div>
              <div className='flex-1 flex flex-col mt-6 sm:mt-0'>
                <label htmlFor='dropDate' className='pb-2 text-base font-semibold text-gray-700'>
                  Date de dépôt
                </label>
                <input
                  id='dropDate'
                  type='date'
                  name='dropDate'
                  value={formData.dropDate}
                  onChange={handleChange}
                  className='w-full text-base px-4 py-3 rounded-2xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                  required
                />
              </div>
              <div className='flex-1 flex flex-col mt-6 sm:mt-0'>
                <label htmlFor='pickUpDate' className='pb-2 text-base font-semibold text-gray-700'>
                  Date de retrait prévue
                </label>
                <input
                  id='pickUpDate'
                  type='date'
                  name='pickUpDate'
                  value={formData.pickUpDate}
                  onChange={handleChange}
                  className='w-full text-base px-4 py-3 rounded-2xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                  required
                />
              </div>
            </div>

            {/* Groupe 3 */}
            <div className='flex flex-col'>
              <label htmlFor='garmentType' className='text-base font-semibold text-gray-700'>
                Type de vêtement
              </label>
              <input
                id='garmentType'
                name='garmentType'
                value={formData.garmentType}
                onChange={handleChange}
                placeholder='Costume, robe, manteau...'
                className='w-full mt-2 rounded-2xl px-5 py-4 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition'
                required
              />
            </div>

            {/* Groupe 4 */}
            <div className='flex flex-col'>
              <label htmlFor='message' className='text-base font-semibold text-gray-700'>
                Remarques
              </label>
              <textarea
                id='message'
                name='Message'
                value={formData.Message}
                onChange={handleChange}
                placeholder='Instructions spéciales'
                className='w-full mt-2 rounded-2xl px-5 py-4 border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition resize-none'
                rows={4}
              ></textarea>
            </div>

            {/* Bouton */}
            <button
              type='submit'
              disabled={!isFormValid || loader}
              className={`w-full py-4 rounded-full text-lg font-semibold transition 
                ${
                  !isFormValid || loader
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-dark text-white shadow-lg'
                }`}
            >
              {loader ? 'Envoi en cours...' : 'Soumettre'}
            </button>
          </form>

          {/* Message de remerciement + ticket */}
          {showThanks && (
            <div className='mt-8 text-center text-white bg-primary rounded-3xl px-6 py-6 flex flex-col items-center gap-4 shadow-lg'>
              <h3 className='text-xl font-semibold'>Dépôt enregistré ! Voici votre ticket :</h3>
              <div
                ref={ticketRef}
                className='bg-white text-black p-6 rounded-2xl max-w-md w-full shadow-md text-left'
              >
                <p><strong>Nom :</strong> {formData.fullname}</p>
                <p><strong>Vêtement :</strong> {formData.garmentType}</p>
                <p><strong>Dépôt :</strong> {formData.dropDate}</p>
                <p><strong>Retrait :</strong> {formData.pickUpDate}</p>
                <p><strong>Point de dépôt :</strong> {formData.outlet}</p>
                <p><strong>Téléphone :</strong> {formData.phnumber}</p>
              </div>
              <button
                onClick={handlePrint}
                className='mt-4 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-primary font-semibold transition'
              >
                Imprimer le ticket
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm

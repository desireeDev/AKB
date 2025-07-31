'use client'

export default function Presentation() {
  return (
    <section id="présentation" className="py-16 bg-emerald-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte avec fond blanc et arrondi */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-emerald-600">À propos du Nettoyage</h2>
          <h3 className="text-xl font-semibold mb-2 text-emerald-700">Un environnement sain</h3>
          <p className="text-emerald-900 mb-4">
            Notre service de nettoyage garantit propreté et hygiène pour vos espaces de vie et de travail. 
            Des prestations adaptées à chaque besoin.
          </p>
          <p className="text-emerald-900">
            Nous mettons un point d’honneur à offrir un service efficace, discret et respectueux de l’environnement.
          </p>
        </div>

        {/* Image avec bord arrondi, ombre, et effet hover */}
        <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/images/Nettoyage/nettoyage.png"
            alt="Présentation Nettoyage"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

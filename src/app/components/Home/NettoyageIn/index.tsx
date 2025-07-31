'use client'

export default function NettoyageIndustriel() {
  return (
    <section id="nettoyageI" className="py-16 bg-emerald-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte avec fond blanc et arrondi */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-emerald-600">Nettoyage Industriel</h2>
          <h3 className="text-xl font-semibold mb-2 text-emerald-700">Pour vos espaces professionnels</h3>
          <p className="text-emerald-900 mb-4">
            Nous assurons l’entretien de vos locaux industriels, bureaux, entrepôts ou commerces pour un environnement 
            de travail impeccable.
          </p>
          <p className="text-emerald-900">
            Nos équipes qualifiées utilisent du matériel et des produits adaptés pour garantir un nettoyage en profondeur.
          </p>
        </div>

        {/* Image avec bord arrondi, ombre, et effet hover */}
        <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/images/Nettoyage/nettoyage_industriel.png"
            alt="Nettoyage Industriel"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

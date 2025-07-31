'use client'

export default function NettoyageIndustriel() {
  return (
    <section id ="nettoyageI" className="py-16 bg-[#e8f5f8]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nettoyage Industriel</h2>
          <h3 className="text-xl font-semibold mb-2">Pour vos espaces professionnels</h3>
          <p className="text-gray-600 mb-4">
            Nous assurons l’entretien de vos locaux industriels, bureaux, entrepôts ou commerces pour un environnement 
            de travail impeccable.
          </p>
          <p className="text-gray-600">
            Nos équipes qualifiées utilisent du matériel et des produits adaptés pour garantir un nettoyage en profondeur.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/Nettoyage/nettoyage_industriel.png" // ✅ Mets ton image ici
            alt="Nettoyage Industriel"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

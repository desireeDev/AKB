'use client'

export default function AbonnementInfo({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Nos Abonnements</h2>
      <p className="mb-4 text-gray-600">
        Ce service est en cours de développement. Merci de votre intérêt !
      </p>
      <button onClick={onClose} className="w-full bg-emerald-500 text-white py-2 rounded">
        Fermer
      </button>
    </div>
  )
}

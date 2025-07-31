import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { packId, name, email, duration } = body

    console.log('Nouvelle souscription :', {
      packId,
      name,
      email,
      duration,
    })

    // 👉 Ici, tu peux :
    // - Sauvegarder en base (ex: via Prisma)
    // - Envoyer un email
    // - Déclencher une notification

    return NextResponse.json(
      { message: 'Abonnement enregistré avec succès.' },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Erreur lors de la souscription.' },
      { status: 500 }
    )
  }
}
    
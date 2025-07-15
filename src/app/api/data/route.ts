import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'Services', href: '/#aboutus' },
  { label: 'Produits', href: '/#menu' },
  { label: 'Prendre Rendez-vous', href: '/#reserve' },
  { label: 'Contact', href: '/documentation' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Soin Premium des Textiles',
    subheading:
      'Nous traitons vos vêtements avec des produits de qualité et des machines de dernière génération pour un résultat impeccable.',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Service Express',
    subheading:
      'Déposez vos vêtements le matin, récupérez-les propres et frais le jour même grâce à notre pressing rapide.',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Écologique & Responsable',
    subheading:
      'Nous utilisons des méthodes de nettoyage respectueuses de l’environnement pour préserver vos tissus et la planète.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Collecte & Livraison',
    subheading:
      'Profitez de notre service de collecte et livraison à domicile pour un confort maximum, sans vous déplacer.',
  },
]


const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Linge du quotidien lavé, séché et soigneusement plié pour un confort optimal.',
    name: ' Blanchisserie',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Repassage professionnel pour un rendu impeccable et un gain de temps garanti.',
    name: 'Repassage',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Nettoyage et entretien de vos couettes.',
    name: 'Entretien des couettes',
    imgSrc: '/images/Expert/boyone.png',
  },
   {
    profession: 'Nettoyage rideaux.',
    name: 'Entretien des rideaux',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Nettoyages Spéciaux.',
    name: 'Entretien des rideaux',
    imgSrc: '/images/Expert/boyone.png',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/machine.png',
    name: 'Machines à laver professionnelles',
    price: 35,
  },
  {
    src: '/images/Gallery/fer.png',
    name: 'Presses et tables à repasser vapeur',
    price: 17,
  },
  {
    src: '/images/Gallery/Lessive.png',
    name: 'Lessive en poudre',
    price: 45,
  },
  {
    src: '/images/Gallery/Liquide.png',
    name: 'Lessive Liquide',
    price: 27,
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Lessive Écologique',
    price: 'Inclus',
    description: 'Lessive hypoallergénique respectueuse des fibres et de l’environnement.',
  },
  {
    name: 'Détachant Spécifique',
    price: 'Sur devis',
    description: 'Traitement ciblé des taches tenaces : vin, graisse, maquillage.',
  },
  {
    name: 'Repassage Vapeur',
    price: 'À partir de 5€',
    description: 'Repassage professionnel à vapeur haute pression pour un fini impeccable.',
  },
  {
    name: 'Entretien Cuir & Daim',
    price: 'Sur devis',
    description: 'Soin et nettoyage adaptés pour pièces en cuir ou en daim délicat.',
  },
  {
    name: 'Housse de Protection',
    price: 'Inclus',
    description: 'Housse individuelle recyclable pour protéger vos vêtements nettoyés.',
  },
  {
    name: 'Nettoyage Robe de Mariée',
    price: 'À partir de 50€',
    description: 'Nettoyage minutieux et conservation longue durée pour robe de mariée.',
  },
  {
    name: 'Blanchisserie Draps & Linge de Maison',
    price: 'Sur devis',
    description: 'Lavage et repassage de draps, couettes et linge d’ameublement.',
  },
];


const FooterLinkData: FooterLinkType[] = [
  {
    section: 'AKB Pressing',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Nos services', href: '/#aboutus' },
      { label: 'Nos produits', href: '/#menu' },
      { label: 'Prendre rendez vous', href: '/#reserve' },
    ],
  },
 
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}

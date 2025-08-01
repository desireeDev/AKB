import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'
import { PackType } from '@/app/types/packs'

const HeaderData: HeaderItem[] = [
  { label: ' Pressing ',
     submenu: [
      { label: 'A propos', href: '/#about' },
      { label: 'Packs', href: '/#packs' },
      { label: 'Services', href: '/#services_pressing' },
    ],
     },
  { label: 'Nettoyage', 
     submenu: [
      { label: 'Présentation', href: '/#présentation', },
      { label: 'Nettoyage Industriel', href: '/#nettoyageI', },
      { label: 'Nettoyage Domestique', href: '/#nettoyage_domestique', },
    ],
    
   },
  { label: 'Prestation à la demande', href: '/#prestation' },
  //{ label: 'Contact', href: '/documentation' },
  
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Pressing Domestique & Industriel',
    subheading:
      'Nous assurons un entretien soigné de tous vos vêtements, linges de maison et articles professionnels, que vous soyez un particulier ou une entreprise.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Nettoyage Complet des Locaux',
    subheading:
      'En plus du linge, AGI s’occupe du nettoyage de maisons, appartements, bureaux et autres espaces professionnels.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Collecte & Livraison',
    subheading:
      'Bénéficiez de notre service pratique de collecte et de livraison à domicile ou sur site, pour un confort absolu.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Respect de l’Environnement',
    subheading:
      'Nous utilisons des méthodes et produits écologiques pour préserver vos affaires et la planète.',
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
    name: 'Entretien des  vêtements délicats',
    imgSrc: '/images/Expert/boyone.png',
  },
]


// Données des packs
const PacksData: PackType[] = [
  {
    name: 'Pack Solo',
    description: '10 vêtements/semaine, 40 vêtements/mois, 1 couette/mois',
    clothesPerWeek: 10,
    clothesPerMonth: 40,
    couettesPerMonth: 1,
    price: 13000,
    imgSrc: '/images/packs/solo.png',
  },
  {
    name: 'Pack Couple',
    description: '20 vêtements/semaine, 80 vêtements/mois, 2 couettes/mois',
    clothesPerWeek: 20,
    clothesPerMonth: 80,
    couettesPerMonth: 2,
    price: 25000,
    imgSrc: '/images/packs/couple.png',
  },
  {
    name: 'Pack Family',
    description: '35 vêtements/semaine, 140 vêtements/mois, 4 couettes/mois',
    clothesPerWeek: 35,
    clothesPerMonth: 140,
    couettesPerMonth: 4,
    price: 35000,
    imgSrc: '/images/packs/family.png',
  },
];


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
    section: 'Agathe Groupe International',
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
    PacksData,
 
    FullMenuData,
    FooterLinkData,
  })
}

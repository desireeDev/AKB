import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      {/* <Image
        src='/images/Logo/Logo.svg'
        alt='logo'
        width={117}
        height={34}
        className='w-fit'
        quality={100}
      /> */}
      <p className='text-emerald-900 text-2xl font-bold '> AGATHA GROUP INTERNATIONAL</p>
    </Link>
  )
}

export default Logo

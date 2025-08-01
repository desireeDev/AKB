'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  const isActive = path === item.href

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {item.href ? (
        <Link
          href={item.href}
          className={`text-lg flex font-medium duration-300 ${
            isActive ? 'text-primary' : 'text-black/50 hover:text-primary'
          }`}>
          {item.label}
        </Link>
      ) : (
        <button
          className='text-lg flex font-medium text-black/50 hover:text-primary'
          type='button'>
          {item.label}
          {item.submenu && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1.5em'
              height='1.5em'
              viewBox='0 0 24 24'>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='m7 10l5 5l5-5'
              />
            </svg>
          )}
        </button>
      )}

      {submenuOpen && item.submenu && (
        <div
          className='absolute py-2 left-0 mt-0.5 w-60 bg-white shadow-lg rounded-lg'
          data-aos='fade-up'
          data-aos-duration='500'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 ${
                path === subItem.href
                  ? 'bg-primary text-white'
                  : 'text-black hover:bg-primary'
              }`}>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink

'use client'

import React from 'react'
import Image from 'next/image'
import DrezzoButton from '@/components/common/drezzo-button'
import { navbarMenu } from '@/lib/constants/menus'
import { cn } from '@/lib/utils/view'
import { fontInter } from '@/styles/fonts/index'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Navbar() {
  const handleScroll = () => {}
  const { push } = useRouter()

  return (
    <header
      className={cn(
        'z-50 mb-4 flex w-full items-center justify-between px-8',
        fontInter.medium.className,
      )}
    >
      <nav className="flex w-max items-center space-x-4 font-semibold text-white">
        <div className="py-6">
          <Image
            src="/svgs/logo-white.svg"
            alt="Drezzo Logo"
            width={80}
            height={50}
          />
        </div>
        <span className="text-3xl">/</span>
        {navbarMenu.map((item, index) => (
          <Link
            href={item.path}
            key={item.name}
            type="button"
            className="hover:text-gray-400"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <DrezzoButton onClick={() => push('/submit')}>SUBMIT NOW!</DrezzoButton>
    </header>
  )
}

export default Navbar

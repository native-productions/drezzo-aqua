'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DrezzoButton from '@/components/common/drezzo-button'
import { navbarMenu } from '@/lib/constants/menus'
import { cn } from '@/lib/utils/view'
import { fontInter } from '@/styles/fonts/index'
import { useRouter } from 'next/navigation'

function Navbar() {
  const { push } = useRouter()
  return (
    <header
      style={{ zIndex: 45 }}
      className={cn(
        'fixed left-0 top-0 z-50 mb-4 flex w-full items-center justify-between overflow-x-hidden bg-black/40 pb-3 backdrop-blur-lg sm:px-8 md:pb-0',
        fontInter.medium.className,
      )}
    >
      <nav className="hidden w-max items-center space-x-4 font-semibold text-white md:flex">
        <div className="py-6">
          <Image
            src="/svgs/logo-white.svg"
            alt="Drezzo Logo"
            width={80}
            height={50}
          />
        </div>
        <span className="text-3xl">/</span>
        {navbarMenu.map((item) => (
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
      <div className="flex w-full justify-center pt-3 md:block md:w-auto md:pt-0">
        <DrezzoButton
          className="mx-auto md:mx-0"
          onClick={() => push('/submit')}
        >
          SUBMIT NOW!
        </DrezzoButton>
      </div>
    </header>
  )
}

export default Navbar

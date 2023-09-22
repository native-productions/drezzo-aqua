import React from 'react'
import Image from 'next/image'
import Title from './title'
import SocialMedia from './social-media'

const nav = [
  {
    name: 'Becoming our partners',
    href: 'mailto:drezzoworldwide@gmail.com?subject=Drezzo collaboration request',
  },
  { name: 'About', href: '#' },
  { name: 'Contact', href: 'mailto:drezzoworldwide@gmail.com' },
  { name: 'Tech support', href: 'mailto:services.drezzo@gmail.com' },
  {
    name: 'Privacy Policy',
    href: 'https://drezzo.notion.site/Privacy-Policy-7127eb6f816d46deab7b65ff7eee8120',
  },
]

function Footer() {
  return (
    <footer className="z-50 w-full bg-[#111827] px-8 py-12">
      <div className="mx-auto w-full max-w-7xl flex-col items-center justify-center space-y-4 px-8 text-center text-[#e8e6e3ac]">
        <Title className="text-2xl md:text-4xl">
          stay connected with drezzo
        </Title>
        <p className="mx-auto w-full max-w-[530px] pb-2 text-base md:pb-0 md:text-xl">
          By following us, you can connect with others, ask questions, and share
          your own insights. So {`don't`} be shy! Give us a follow on
        </p>
        <SocialMedia />
        <div className="py-6">
          <div className="h-[1px] bg-[#e8e6e3ac]" />
        </div>
        <Image
          src="/svgs/logo-white.svg"
          alt="Drezzo Logo"
          className="mx-auto"
          width={80}
          height={45}
        />
        <div className="hidden space-x-4 pt-4 text-sm text-white md:block">
          {nav.map((v) => (
            <a target="_blank" key={v.name} href={v.href}>
              {v.name}
            </a>
          ))}
        </div>
        <div className="flex w-full flex-col items-center space-y-3 pt-4 text-sm text-white md:hidden">
          <a
            target="_blank"
            href="mailto:drezzoworldwide@gmail.com?subject=Drezzo collaboration request"
          >
            Becoming our partner
          </a>
          <div className="flex w-full justify-center space-x-3">
            {nav.map(
              (v) =>
                !v.name.includes('partners') && (
                  <a target="_blank" key={v.name} href={v.href}>
                    {v.name}
                  </a>
                ),
            )}
          </div>
        </div>
        <p className="test-sm">© 2023 Drezzo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

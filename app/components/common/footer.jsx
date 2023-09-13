import React from 'react'
import Image from 'next/image'
import Title from './title'
import SocialMedia from './social-media'

function Footer() {
  return (
    <footer className="z-50 w-full bg-[#111827] px-8 py-12">
      <div className="mx-auto w-full max-w-7xl flex-col items-center justify-center space-y-4 px-8 text-center text-[#e8e6e3ac]">
        <Title className="text-4xl">stay connected with drezzo</Title>
        <p className="mx-auto w-full max-w-[530px] text-xl">
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
        <div className="space-x-4 pt-4 text-sm text-white">
          <a href="/">Becoming our partner</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Tech support</a>
        </div>
        <p className="test-sm">© 2023 Drezzo. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

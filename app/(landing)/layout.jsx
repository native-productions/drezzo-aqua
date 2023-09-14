/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'
import { Decorators } from '@/components/common/decorators'
import Toaster from '@/components/ui/toaster'
import '@/styles/globals.css'

export const metadata = {
  title: 'Drezzo x Aqua',
  description: 'Drezzo x Aqua is bla bla bla',
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className="relative w-full overflow-x-hidden bg-main-background">
        <div style={{ zIndex: 9999 }}>
          <Toaster />
        </div>
        <Decorators />
        {props.modal && (
          <div className="absolute left-0 top-0">{props.modal}</div>
        )}
        <div className="mx-auto w-full max-w-7xl">
          <Navbar />
          <main className="px-4 md:px-8">{props.children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

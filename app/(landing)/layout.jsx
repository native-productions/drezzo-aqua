/* eslint-disable react/destructuring-assignment */
import { Decorators } from '@/components/common/decorators'
import Toaster from '@/components/ui/toaster'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'
import '@/styles/globals.css'

export const metadata = {
  title: 'NFT Project Competition',
  description:
    'SUBMIT YOUR NFT PROJECT AND WIN AN EXCLUSIVE CHANCE TO INVESTOR MEET UP AND TRAVEL IN PHUKET, THAILAND (3 DAYS 2 NIGHTS).',
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
          <main className="mt-20 overflow-x-hidden px-4 md:mt-28 md:px-8">
            {props.children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'
import Navbar from './components/Navbar'


const maven_pro = Maven_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auction Ace',
  description: 'Online auction system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={maven_pro.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

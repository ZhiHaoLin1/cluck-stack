import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/CartContext'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow-condensed',
})

const barlow = Barlow({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'CLUCK & STACK — Chicken & Waffles',
  description: 'Crispy. Stacked. No Apologies. Order chicken & waffles online.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

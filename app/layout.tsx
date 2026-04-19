import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/CartContext'

export const metadata: Metadata = {
  title: 'CLUCK & STACK — Chicken & Waffles',
  description: 'Crispy. Stacked. No Apologies. Order chicken & waffles online.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

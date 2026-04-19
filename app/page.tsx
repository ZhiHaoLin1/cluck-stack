import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Combos from '@/components/Combos'
import UpsellStrip from '@/components/UpsellStrip'
import MenuSection from '@/components/MenuSection'
import LTO from '@/components/LTO'
import CtaBand from '@/components/CtaBand'
import Visit from '@/components/Visit'
import Footer from '@/components/Footer'
import CartFloat from '@/components/CartFloat'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Combos />
      <UpsellStrip />
      <MenuSection />
      <LTO />
      <CtaBand />
      <Visit />
      <Footer />
      <CartFloat />
    </>
  )
}

'use client'

const R2 = 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev'

export default function Nav() {
  function scrollToOrder() {
    document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${R2}/logo.png`} alt="Cluck & Stack" width={120} height={36} style={{ height: 36, width: 'auto', display: 'block' }} />
      </div>
      <ul className="nav-links">
        <li><a href="#combos">Combos</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#lto">Today&apos;s Special</a></li>
        <li><a href="#visit">Visit</a></li>
      </ul>
      <button className="nav-order" onClick={scrollToOrder}>ORDER NOW →</button>
    </nav>
  )
}

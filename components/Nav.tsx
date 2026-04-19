'use client'

export default function Nav() {
  function scrollToOrder() {
    document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="nav-logo">
        <img src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/logo.png" alt="Cluck & Stack" style={{ height: 36, width: 'auto', display: 'block' }} />
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

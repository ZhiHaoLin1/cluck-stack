const R2 = 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${R2}/logo.png`} alt="Cluck & Stack" width={84} height={28} loading="lazy" style={{ height: 28, width: 'auto', display: 'block', opacity: 0.85 }} />
      </div>
      <ul className="footer-links">
        <li><a href="#">Menu</a></li>
        <li><a href="#">Catering</a></li>
        <li><a href="#">Gift Cards</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
      <div className="footer-copy">© 2026 Cluck &amp; Stack. All rights reserved.</div>
    </footer>
  )
}

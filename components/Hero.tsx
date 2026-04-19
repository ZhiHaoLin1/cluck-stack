export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Now Taking Orders
        </div>
        <h1 className="hero-title">
          CHICKEN<br />
          <span className="yellow">&amp;</span><br />
          <span className="red">WAFFLES</span>
        </h1>
        <p className="hero-sub">Crispy. Stacked. No Apologies.</p>
        <div className="hero-cta-group">
          <a href="#combos" className="btn-primary">ORDER NOW →</a>
          <a href="#menu" className="btn-secondary">View Full Menu</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-glow-spill"></div>
        <div className="hero-floater drip">🍯</div>
        <div className="hero-floater star">✦</div>
        <div className="hero-floater crumb1"></div>
        <div className="hero-floater crumb2"></div>
        <div className="hero-floater crumb3"></div>
        {/* fetchpriority=high tells browser this is the LCP element — load it first */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-plate"
          src="https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev/clucknwaffle.png?v=2"
          alt="Chicken and Waffles"
          width={1024}
          height={1024}
          // @ts-expect-error fetchpriority is valid HTML but not yet in React types
          fetchpriority="high"
        />
        <div className="steam">
          <div className="steam-wisp"></div>
          <div className="steam-wisp"></div>
          <div className="steam-wisp"></div>
          <div className="steam-wisp"></div>
        </div>
        <div className="hero-floater fries">🍟</div>
        <div className="hero-floater pepper">🌶️</div>
        <div className="hero-floor-shadow"></div>
        <div className="hero-stripe"></div>
      </div>
    </section>
  )
}

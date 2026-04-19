'use client'

import { useState } from 'react'

const BASE = 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev'

const sides = [
  { icon: '🍟', name: 'Fries', price: '+$0' },
  { icon: '🥗', name: 'Slaw', price: '+$0' },
  { icon: null, img: `${BASE}/macncheeselogo.png`, name: 'Mac + Cheese', price: '+$1' },
  { icon: '🫘', name: 'Beans', price: '+$0' },
]

export default function UpsellStrip() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="upsell-strip" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${BASE}/thighstack.png')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.08, zIndex: 0, pointerEvents: 'none'
      }} />
      <div className="upsell-left" style={{ position: 'relative', zIndex: 1 }}>
        <div className="upsell-eyebrow">Don&apos;t forget</div>
        <div className="upsell-title">UPGRADE YOUR<br /><span className="highlight">SIDE.</span></div>
        <div className="upsell-sub">Every combo comes with one side. Make it count.</div>
      </div>
      <div className="upsell-options" style={{ position: 'relative', zIndex: 1 }}>
        {sides.map((side, i) => (
          <div
            key={i}
            className={`upsell-option${selected === i ? ' selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            <span className="upsell-opt-icon">
              {side.img
                ? <img src={side.img} alt={side.name} style={{ width: 32, height: 32, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                : side.icon}
            </span>
            <span className="upsell-opt-name">{side.name}</span>
            <span className="upsell-opt-price">{side.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

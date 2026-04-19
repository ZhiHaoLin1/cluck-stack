'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'

const BASE = 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev'

export default function Combos() {
  const { addItem } = useCart()
  const [added, setAdded] = useState<string | null>(null)

  function handleAdd(name: string, price: number) {
    addItem(name, price)
    setAdded(name)
    setTimeout(() => setAdded(null), 900)
  }

  return (
    <section className="combos" id="combos">
      <div className="combos-header">
        <div>
          <p className="section-label">🔥 Best Value</p>
          <h2 className="section-title">COMBO DEALS</h2>
        </div>
        <a href="#menu" className="see-all">Full Menu ↓</a>
      </div>

      <div className="combos-grid">
        {/* FEATURED */}
        <div className="combo-card featured">
          <span className="combo-num">1</span>
          <span className="combo-tag">⭐ Most Popular</span>
          <div className="featured-info-panel">
            <div className="combo-name">THE CLASSIC STACK</div>
            <div className="combo-desc">Two crispy thighs on a golden waffle. Comes with your choice of sauce and a drink.</div>
            <div className="combo-includes">
              <span className="include-tag">2 Crispy Thighs</span>
              <span className="include-tag">1 Waffle</span>
              <span className="include-tag">1 Sauce</span>
              <span className="include-tag">Lg. Drink</span>
            </div>
          </div>
          <div className="combo-footer">
            <div className="combo-price">$13.99</div>
            <button className="combo-add" onClick={() => handleAdd('The Classic Stack', 13.99)}>
              {added === 'The Classic Stack' ? '✓' : 'ADD +'}
            </button>
          </div>
        </div>

        {/* HEAT SEEKER */}
        <div className="combo-card">
          <span className="combo-num">2</span>
          <span className="combo-tag">🌶 Spicy</span>
          <span className="combo-food-icon" style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>🔥</span>
          <div className="combo-name">HEAT SEEKER</div>
          <div className="combo-desc">Nashville hot chicken, habanero honey, pickled jalapeños, extra waffle.</div>
          <div className="combo-includes">
            <span className="include-tag" style={{ background: 'rgba(217,43,43,0.3)', color: '#ff8080' }}>Hot Chicken</span>
            <span className="include-tag">2 Waffles</span>
            <span className="include-tag">Lg. Drink</span>
          </div>
          <div className="combo-footer">
            <div className="combo-price">$15.99</div>
            <button className="combo-add" onClick={() => handleAdd('Heat Seeker', 15.99)}>
              {added === 'Heat Seeker' ? '✓' : 'ADD +'}
            </button>
          </div>
        </div>

        {/* BRUNCH BOSS */}
        <div className="combo-card">
          <span className="combo-num">3</span>
          <span className="combo-tag">👑 Premium</span>
          <span className="combo-food-icon" style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>🥂</span>
          <div className="combo-name">BRUNCH BOSS</div>
          <div className="combo-desc">Chicken + waffles + 2 sides + bottomless coffee or OJ. The full experience.</div>
          <div className="combo-includes">
            <span className="include-tag">Full Stack</span>
            <span className="include-tag">2 Sides</span>
            <span className="include-tag">Bottomless Coffee</span>
          </div>
          <div className="combo-footer">
            <div className="combo-price">$19.99</div>
            <button className="combo-add" onClick={() => handleAdd('Brunch Boss', 19.99)}>
              {added === 'Brunch Boss' ? '✓' : 'ADD +'}
            </button>
          </div>
        </div>

        {/* FAMILY PACK */}
        <div className="combo-card">
          <span className="combo-num">4</span>
          <span className="combo-tag">👨‍👩‍👧 Family</span>
          <span className="combo-food-icon" style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>
            <img loading="lazy" src={`${BASE}/chickenbucket.png`} alt="Family Pack" style={{ width: 48, height: 48, objectFit: 'contain', display: 'block' }} />
          </span>
          <div className="combo-name">FAMILY PACK</div>
          <div className="combo-desc">8-piece chicken, 4 waffles, 3 sides, sauce sampler. Feeds the whole crew.</div>
          <div className="combo-includes">
            <span className="include-tag">8 Pc Chicken</span>
            <span className="include-tag">4 Waffles</span>
            <span className="include-tag">3 Sides</span>
            <span className="include-tag">4 Drinks</span>
          </div>
          <div className="combo-footer">
            <div className="combo-price">$44.99</div>
            <button className="combo-add" onClick={() => handleAdd('Family Pack', 44.99)}>
              {added === 'Family Pack' ? '✓' : 'ADD +'}
            </button>
          </div>
        </div>

        {/* GARDEN STACK */}
        <div className="combo-card">
          <span className="combo-num">5</span>
          <span className="combo-tag">🌿 Plant-Based</span>
          <span className="combo-food-icon" style={{ fontSize: 40, display: 'block', marginBottom: 8 }}>🥬</span>
          <div className="combo-name">GARDEN STACK</div>
          <div className="combo-desc">Crispy cauliflower, avocado cream, house waffle. All the crunch, zero compromise.</div>
          <div className="combo-includes">
            <span className="include-tag">Cauliflower</span>
            <span className="include-tag">Avocado Cream</span>
            <span className="include-tag">Md. Drink</span>
          </div>
          <div className="combo-footer">
            <div className="combo-price">$13.49</div>
            <button className="combo-add" onClick={() => handleAdd('Garden Stack', 13.49)}>
              {added === 'Garden Stack' ? '✓' : 'ADD +'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

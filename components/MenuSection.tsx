'use client'

import { useState } from 'react'
import { useCart } from '@/lib/CartContext'

const BASE = 'https://pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev'

type MenuItem = {
  name: string
  desc: string
  price: number
  img: string
  badge?: { label: string; type: 'popular' | 'new' }
}

const chicken: MenuItem[] = [
  { name: 'Classic Thigh Stack', desc: 'Two crispy thighs, maple butter waffle, housemade sauce', price: 10.99, img: 'thighstack.png', badge: { label: '★ #1', type: 'popular' } },
  { name: 'Nashville Hot', desc: 'Cayenne-laced fried chicken, pickle chips, honey drizzle', price: 11.99, img: 'nashville.png', badge: { label: 'New', type: 'new' } },
  { name: 'Brunch Stack', desc: 'Chicken, waffle, fried egg, cheddar, maple sriracha', price: 12.99, img: 'brunchstack.png' },
  { name: 'Garden Stack', desc: 'Crispy cauliflower, avocado cream, house waffle, chili oil', price: 10.49, img: 'gardenstack.png' },
  { name: 'Honey Butter', desc: 'Sweet glazed chicken, compound honey butter, crispy waffle', price: 11.49, img: 'honey%20butter.png', badge: { label: 'Fan Fav', type: 'popular' } },
  { name: 'Kids Stack', desc: '2 tenders, mini waffle, choice of side, juice box', price: 7.99, img: 'kids%20stack.png' },
  { name: 'Loaded Stack', desc: 'Double chicken, bacon, cheddar sauce, caramelized onion', price: 14.99, img: 'loaded.png' },
  { name: 'Triple Stack', desc: 'Three waffles, three pieces. A tower. Meant to be shared — or not.', price: 18.99, img: 'triplestack.png', badge: { label: 'New', type: 'new' } },
]

const sides: MenuItem[] = [
  { name: 'Seasoned Fries', desc: 'House seasoning blend, served hot', price: 3.49, img: 'fries.png' },
  { name: 'Creamy Slaw', desc: 'Classic coleslaw, creamy dressing, celery seed', price: 2.99, img: 'coleslaw.png' },
  { name: 'Mac + Cheese', desc: 'Sharp cheddar, gruyere, crispy breadcrumb top', price: 4.49, img: 'macnchese.png' },
  { name: 'Street Corn', desc: 'Roasted corn, cotija, chili butter, lime', price: 3.99, img: 'corn.png' },
]

const drinks: MenuItem[] = [
  { name: 'Fountain Drink', desc: 'Sm/Md/Lg — free refills always', price: 2.49, img: 'fountaindrink.png' },
  { name: 'Fresh Brewed Coffee', desc: 'House blend, bottomless on brunch items', price: 2.99, img: 'coffee.png' },
  { name: 'Fresh OJ', desc: 'Squeezed in-house every morning', price: 3.99, img: 'orangejuice.png' },
  { name: 'Sweet Tea', desc: 'Southern-style, free refills', price: 2.49, img: 'tea.png' },
]

const desserts: MenuItem[] = [
  { name: 'Maple Soft Serve', desc: 'Housemade maple soft serve, waffle cone', price: 4.49, img: 'softserve.png' },
  { name: 'Dessert Waffle', desc: 'Warm waffle, vanilla cream, berries, powdered sugar', price: 5.99, img: 'dessertwaffle.png' },
]

const tabs = [
  { id: 'chicken', label: 'Chicken & Waffles', items: chicken },
  { id: 'sides', label: 'Sides', items: sides },
  { id: 'drinks', label: 'Drinks', items: drinks },
  { id: 'desserts', label: 'Desserts', items: desserts },
]

function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handle() {
    addItem(item.name, item.price)
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <div className="menu-item">
      <div className="menu-item-img" style={{ padding: 0, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/${item.img}`}
          alt={item.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {item.badge && (
          <span className={item.badge.type === 'popular' ? 'menu-item-popular' : 'menu-item-new'}>
            {item.badge.label}
          </span>
        )}
      </div>
      <div className="menu-item-body">
        <div className="menu-item-name">{item.name}</div>
        <div className="menu-item-desc">{item.desc}</div>
        <div className="menu-item-footer">
          <div className="menu-item-price">${item.price.toFixed(2)}</div>
          <button className={`item-add-btn${added ? ' added' : ''}`} onClick={handle}>
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('chicken')
  const current = tabs.find(t => t.id === activeTab)!

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div>
          <p className="section-label">🍽 Full Menu</p>
          <h2 className="section-title">WHAT WE MAKE</h2>
        </div>
      </div>
      <div className="menu-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`menu-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="menu-grid menu-panel active">
        {current.items.map(item => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}

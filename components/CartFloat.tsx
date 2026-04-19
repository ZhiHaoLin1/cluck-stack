'use client'

import { useCart } from '@/lib/CartContext'

export default function CartFloat() {
  const { items, total } = useCart()

  return (
    <div className={`order-float${items > 0 ? ' visible' : ''}`}>
      <div className="of-count">
        <span>{items}</span>
        Items
      </div>
      <div className="of-total">${total.toFixed(2)}</div>
      <button className="of-btn">CHECKOUT →</button>
    </div>
  )
}

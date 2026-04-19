'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextType {
  items: number
  total: number
  addItem: (name: string, price: number) => void
}

const CartContext = createContext<CartContextType>({
  items: 0,
  total: 0,
  addItem: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState(0)
  const [total, setTotal] = useState(0)

  function addItem(_name: string, price: number) {
    setItems(i => i + 1)
    setTotal(t => t + price)
  }

  return (
    <CartContext.Provider value={{ items, total, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

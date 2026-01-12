import React from 'react'
import './Header.css'
import { useStore } from '../store/store'

export function Header() {
  const cart = useStore((state) => state.cart)
  const cartCount = cart.length

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-emoji">🏔️</span>
          <h1>Merino Warmth</h1>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Shop</a>
          <a href="/cart" className="cart-link">
            🛒 Cart ({cartCount})
          </a>
        </nav>
      </div>
    </header>
  )
}

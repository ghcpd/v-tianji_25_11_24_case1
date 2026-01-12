import React from 'react'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Premium Merino Warm Layers</h1>
        <p>Experience ultimate warmth and comfort with our premium merino wool collection</p>
        <a href="/products" className="cta-button">
          Shop Now
        </a>
      </div>
      <div className="hero-background">🏔️ ⛷️ 🧥</div>
    </section>
  )
}

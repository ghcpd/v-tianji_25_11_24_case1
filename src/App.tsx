import React from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1>Merino Warm-Layer E-Shop</h1>
            <p>Premium merino wool layers for performance and comfort.</p>
          </div>
        </section>

        <section className="content">
          <ProductGrid />
        </section>
      </main>
      <footer className="footer">© Merino E-Shop</footer>
    </div>
  )
}

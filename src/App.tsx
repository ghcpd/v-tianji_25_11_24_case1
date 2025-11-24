import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>Meri•no — Warm-Layer Essentials</h1>
            <p>
              Luxuriously soft merino, designed to keep you cozy and breathable in
              style.
            </p>
          </div>
          <img src="/hero.jpg" alt="Merino warm layer" className="hero-img" />
        </section>

        <section>
          <h2 className="section-title">Featured</h2>
          <ProductList />
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Meri•no — Warm-Layer E-Shop</p>
        </footer>
      </main>
    </div>
  )
}

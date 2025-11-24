import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <h1>Merino Warm-Layer</h1>
          <p>Ultra-soft merino wool garments for everyday warmth and performance.</p>
        </section>
        <ProductList />
      </main>
      <footer className="footer">© Merino Warm-Layer E-Shop</footer>
    </div>
  )
}

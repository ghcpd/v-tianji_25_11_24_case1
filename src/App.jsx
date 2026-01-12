import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ProductList } from './components/ProductList'
import { Cart } from './components/Cart'
import { useStore } from './store/store'
import './App.css'

function HomePage() {
  const products = useStore((state) => state.products)
  const featured = products.slice(0, 3)

  return (
    <>
      <Hero />
      <ProductList products={featured} title="Featured Products" />
    </>
  )
}

function ShopPage() {
  const products = useStore((state) => state.products)

  return <ProductList products={products} title="All Products" />
}

function CartPage() {
  return <Cart />
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

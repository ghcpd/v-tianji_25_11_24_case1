import React from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
  { id: 1, title: 'Merino Base Tee', price: '$39', desc: 'Light and breathable.' },
  { id: 2, title: 'Merino Mid Layer', price: '$69', desc: 'Perfect insulation.' },
  { id: 3, title: 'Merino Zip Hoodie', price: '$89', desc: 'Comfy and warm.' }
]

export default function ProductList(){
  return (
    <section className="products">
      {PRODUCTS.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  )
}

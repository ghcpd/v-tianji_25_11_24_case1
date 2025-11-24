import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/products'

export default function ProductGrid() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>Featured</div>
        <div style={{ color: '#6b7280' }}>Quality merino layers</div>
      </div>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

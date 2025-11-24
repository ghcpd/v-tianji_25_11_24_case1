import React from 'react'
import './ProductList.css'
import { ProductCard } from './ProductCard'

export function ProductList({ products, title = 'Products' }) {
  return (
    <section className="product-list-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid" data-testid="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="empty-message">No products found</p>
      )}
    </section>
  )
}

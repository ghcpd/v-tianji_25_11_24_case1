import React from 'react'
import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card" data-testid={`product-${product.id}`}>
      <img src={product.image} alt={product.name} />
      <div className="title">{product.name}</div>
      <div style={{ color: '#6b7280', marginTop: 6 }}>{product.description}</div>
      <div className="price">${product.price.toFixed(2)}</div>
    </article>
  )
}

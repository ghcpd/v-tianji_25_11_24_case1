import React from 'react'

export default function ProductCard({ product }){
  return (
    <article className="card" data-testid={`product-${product.id}`}>
      <div className="thumb" aria-hidden>
        <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="48" rx="6" fill="#E6EEF7"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#315f72" fontSize="8">{product.title}</text></svg>
      </div>
      <div className="meta">
        <h3>{product.title}</h3>
        <p className="desc">{product.desc}</p>
        <div className="price">{product.price}</div>
        <button className="btn">Add to Cart</button>
      </div>
    </article>
  )
}

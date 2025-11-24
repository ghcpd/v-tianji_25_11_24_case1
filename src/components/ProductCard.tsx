import React from 'react'

export type ProductProps = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

export default function ProductCard({name,price,description,image}:ProductProps){
  return (
    <article className="card">
      <img src={image||'/product.jpg'} alt={name} className="product-image" />
      <div className="product-details">
        <div>
          <div className="product-title">{name}</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>{description}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="price">${price.toFixed(2)}</div>
          <div style={{marginTop:8}}>
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
    </article>
  )
}

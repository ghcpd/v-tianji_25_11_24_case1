import React, { useState } from 'react'
import './ProductCard.css'
import { useStore } from '../store/store'

export function ProductCard({ product }) {
  const [showNotification, setShowNotification] = useState(false)
  const addToCart = useStore((state) => state.addToCart)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const isFavorited = useStore((state) => state.favorites.includes(product.id))

  const handleAddToCart = () => {
    addToCart(product)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  const handleToggleFavorite = () => {
    toggleFavorite(product.id)
  }

  return (
    <div className="product-card" data-testid={`product-card-${product.id}`}>
      <div className="product-image-container">
        <div className="product-image">{product.image}</div>
        <button
          className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
          onClick={handleToggleFavorite}
          aria-label={`Toggle favorite for ${product.name}`}
          data-testid={`favorite-btn-${product.id}`}
        >
          ❤️
        </button>
      </div>

      <div className="product-content">
        <h3 className="product-name" data-testid={`product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <span className="stars">⭐</span>
          <span className="rating-value">{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>

        <div className="product-footer">
          <span className="product-price" data-testid={`product-price-${product.id}`}>
            ${product.price.toFixed(2)}
          </span>

          {product.inStock ? (
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              data-testid={`add-to-cart-btn-${product.id}`}
            >
              Add to Cart
            </button>
          ) : (
            <button className="out-of-stock-btn" disabled>
              Out of Stock
            </button>
          )}
        </div>

        {showNotification && (
          <div className="notification">Added to cart! ✓</div>
        )}
      </div>
    </div>
  )
}

import React from 'react'
import './Cart.css'
import { useStore } from '../store/store'

export function Cart() {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const updateCartQuantity = useStore((state) => state.updateCartQuantity)
  const clearCart = useStore((state) => state.clearCart)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-content">
          <span className="empty-emoji">🛒</span>
          <h2>Your cart is empty</h2>
          <p>Start shopping to add items to your cart!</p>
          <a href="/products" className="shop-btn">
            Continue Shopping
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item" data-testid={`cart-item-${item.id}`}>
              <div className="item-image">{item.image}</div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  data-testid={`decrease-qty-${item.id}`}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartQuantity(item.id, parseInt(e.target.value) || 1)
                  }
                  min="1"
                  data-testid={`qty-input-${item.id}`}
                />
                <button
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  data-testid={`increase-qty-${item.id}`}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                data-testid={`remove-btn-${item.id}`}
                aria-label="Remove item"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span data-testid="subtotal">${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>${(total * 0.08).toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span data-testid="total">${(total * 1.08).toFixed(2)}</span>
          </div>
          <button className="checkout-btn" data-testid="checkout-btn">
            Proceed to Checkout
          </button>
          <button
            className="continue-shopping-btn"
            onClick={() => (window.location.href = '/products')}
          >
            Continue Shopping
          </button>
          <button
            className="clear-cart-btn"
            onClick={clearCart}
            data-testid="clear-cart-btn"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

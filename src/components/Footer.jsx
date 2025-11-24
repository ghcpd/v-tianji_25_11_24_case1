import React from 'react'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Premium merino wool products for outdoor enthusiasts and cold-weather adventurers.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@merinowarmth.com</li>
            <li>Phone: 1-800-MERINO-1</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Merino Warmth. All rights reserved.</p>
      </div>
    </footer>
  )
}

import React from 'react';
import './Header.css';

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/wool.svg" alt="Merino Warmth" className="logo-icon" />
          <span className="logo-text">Merino Warmth</span>
        </div>
        
        <nav className="nav">
          <button className="nav-link">Shop</button>
          <button className="nav-link">About</button>
          <button className="nav-link">Contact</button>
        </nav>

        <button 
          className="cart-button" 
          onClick={onCartClick}
          aria-label="Shopping cart"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 2L7 6H3L6 20H18L21 6H17L15 2H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;

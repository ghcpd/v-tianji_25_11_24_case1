import React from 'react'

export default function Header(){
  return (
    <header className="header container">
      <div className="brand">
        <div className="logo">MN</div>
        <div>
          <div style={{fontWeight:800}}>Meri•no</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Warm-layer essentials</div>
        </div>
      </div>

      <div className="nav-actions">
        <div className="pill">Shop</div>
        <div className="pill">Sustainability</div>
        <div className="pill">Explore</div>
        <button aria-label="Open cart" className="btn">Cart • 0</button>
      </div>
    </header>
  )
}

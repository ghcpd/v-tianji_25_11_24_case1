import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">Merino <span style={{ color: '#2563EB' }}>E-Shop</span></div>
      <nav>
        <a href="#" style={{ marginRight: 16, color: '#374151' }}>Men</a>
        <a href="#" style={{ color: '#374151' }}>Women</a>
      </nav>
    </header>
  )
}

import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Filter from './components/Filter';
import { products } from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setShowCart(!showCart)}
      />
      
      <main className="main-content">
        <div className="container">
          <section className="hero">
            <h1>Premium Merino Warm Layers</h1>
            <p>Experience unparalleled comfort and warmth with our collection of premium merino wool garments</p>
          </section>

          <Filter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ProductGrid
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>
      </main>

      {showCart && (
        <Cart
          items={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;

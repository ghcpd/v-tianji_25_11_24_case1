import { create } from 'zustand'

const initialProducts = [
  {
    id: 1,
    name: 'Merino Thermal Base Layer',
    category: 'Base Layers',
    price: 79.99,
    rating: 4.8,
    reviews: 245,
    image: '🧥',
    description: 'Premium merino wool base layer for ultimate warmth',
    inStock: true
  },
  {
    id: 2,
    name: 'Merino Mid-Layer Fleece',
    category: 'Mid-Layers',
    price: 99.99,
    rating: 4.7,
    reviews: 189,
    image: '🎽',
    description: 'Breathable mid-layer for temperature regulation',
    inStock: true
  },
  {
    id: 3,
    name: 'Merino Wool Socks',
    category: 'Accessories',
    price: 24.99,
    rating: 4.9,
    reviews: 521,
    image: '🧦',
    description: 'Soft merino socks for ultimate comfort',
    inStock: true
  },
  {
    id: 4,
    name: 'Merino Outer Shell',
    category: 'Outer Layers',
    price: 189.99,
    rating: 4.6,
    reviews: 134,
    image: '🧤',
    description: 'Durable outer shell for harsh conditions',
    inStock: false
  },
  {
    id: 5,
    name: 'Merino Beanie',
    category: 'Accessories',
    price: 44.99,
    rating: 4.8,
    reviews: 298,
    image: '🎿',
    description: 'Warm merino beanie for winter adventures',
    inStock: true
  },
  {
    id: 6,
    name: 'Merino Long Sleeve Shirt',
    category: 'Base Layers',
    price: 69.99,
    rating: 4.7,
    reviews: 156,
    image: '👕',
    description: 'Versatile merino shirt for any occasion',
    inStock: true
  }
]

export const useStore = create((set) => ({
  products: initialProducts,
  cart: [],
  favorites: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    })),

  updateCartQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          cart: state.cart.filter((item) => item.id !== productId)
        }
      }
      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      }
    }),

  clearCart: () => set({ cart: [] }),

  toggleFavorite: (productId) =>
    set((state) => {
      const isFavorited = state.favorites.includes(productId)
      return {
        favorites: isFavorited
          ? state.favorites.filter((id) => id !== productId)
          : [...state.favorites, productId]
      }
    }),

  isFavorited: (productId) => (state) =>
    state.favorites.includes(productId),

  getCartTotal: () => (state) =>
    state.cart.reduce((total, item) => total + item.price * item.quantity, 0),

  getCartCount: () => (state) => state.cart.length
}))

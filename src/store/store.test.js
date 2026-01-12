import { describe, it, expect } from 'vitest'
import { useStore } from '../store/store'

describe('Store (Zustand)', () => {
  beforeEach(() => {
    useStore.setState({
      cart: [],
      favorites: [],
      products: useStore.getState().products
    })
  })

  it('initializes with products', () => {
    const products = useStore.getState().products
    expect(products).toHaveLength(6)
  })

  it('adds product to cart', () => {
    const product = useStore.getState().products[0]
    useStore.getState().addToCart(product)
    expect(useStore.getState().cart).toHaveLength(1)
    expect(useStore.getState().cart[0].id).toBe(product.id)
  })

  it('increases quantity when adding duplicate product', () => {
    const product = useStore.getState().products[0]
    useStore.getState().addToCart(product)
    useStore.getState().addToCart(product)
    expect(useStore.getState().cart).toHaveLength(1)
    expect(useStore.getState().cart[0].quantity).toBe(2)
  })

  it('removes product from cart', () => {
    const product = useStore.getState().products[0]
    useStore.getState().addToCart(product)
    useStore.getState().removeFromCart(product.id)
    expect(useStore.getState().cart).toHaveLength(0)
  })

  it('updates cart quantity', () => {
    const product = useStore.getState().products[0]
    useStore.getState().addToCart(product)
    useStore.getState().updateCartQuantity(product.id, 5)
    expect(useStore.getState().cart[0].quantity).toBe(5)
  })

  it('removes product when quantity becomes 0', () => {
    const product = useStore.getState().products[0]
    useStore.getState().addToCart(product)
    useStore.getState().updateCartQuantity(product.id, 0)
    expect(useStore.getState().cart).toHaveLength(0)
  })

  it('clears cart', () => {
    const products = useStore.getState().products
    useStore.getState().addToCart(products[0])
    useStore.getState().addToCart(products[1])
    expect(useStore.getState().cart).toHaveLength(2)
    useStore.getState().clearCart()
    expect(useStore.getState().cart).toHaveLength(0)
  })

  it('toggles favorite status', () => {
    const productId = useStore.getState().products[0].id
    useStore.getState().toggleFavorite(productId)
    expect(useStore.getState().favorites).toContain(productId)
    useStore.getState().toggleFavorite(productId)
    expect(useStore.getState().favorites).not.toContain(productId)
  })

  it('calculates cart total correctly', () => {
    const store = useStore.getState()
    const product1 = { id: 101, name: 'Item', price: 50 }
    const product2 = { id: 102, name: 'Item 2', price: 30 }
    store.addToCart(product1)
    store.addToCart(product2)
    store.addToCart(product2)
    const total = store.getCartTotal()(useStore.getState())
    expect(total).toBe(110)
  })

  it('gets correct cart count', () => {
    const store = useStore.getState()
    store.addToCart(store.products[0])
    store.addToCart(store.products[1])
    const count = store.getCartCount()(useStore.getState())
    expect(count).toBe(2)
  })
})

import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ProductCard } from '../components/ProductCard'
import { useStore } from '../store/store'

const mockProduct = {
  id: 1,
  name: 'Test Product',
  category: 'Test Category',
  price: 99.99,
  rating: 4.5,
  reviews: 100,
  image: '🧥',
  description: 'Test description',
  inStock: true
}

describe('ProductCard Component', () => {
  beforeEach(() => {
    useStore.setState({ cart: [], favorites: [] })
  })

  it('renders product information', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Test Product')).toBeTruthy()
    expect(screen.getByText('Test Category')).toBeTruthy()
    expect(screen.getByText('Test description')).toBeTruthy()
    expect(screen.getByText('$99.99')).toBeTruthy()
  })

  it('renders product rating and reviews', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('4.5')).toBeTruthy()
    expect(screen.getByText('(100)')).toBeTruthy()
  })

  it('renders add to cart button for in-stock products', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Add to Cart')).toBeTruthy()
  })

  it('renders out of stock button for unavailable products', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false }
    render(<ProductCard product={outOfStockProduct} />)
    expect(screen.getByText('Out of Stock')).toBeTruthy()
  })

  it('adds product to cart when button clicked', () => {
    render(<ProductCard product={mockProduct} />)
    const addBtn = screen.getByText('Add to Cart')
    fireEvent.click(addBtn)
    expect(useStore.getState().cart).toHaveLength(1)
    expect(useStore.getState().cart[0].id).toBe(1)
  })

  it('toggles favorite status', () => {
    render(<ProductCard product={mockProduct} />)
    const favoriteBtn = screen.getByRole('button', { name: /Toggle favorite/i })
    expect(useStore.getState().favorites).toHaveLength(0)
    fireEvent.click(favoriteBtn)
    expect(useStore.getState().favorites).toHaveLength(1)
    fireEvent.click(favoriteBtn)
    expect(useStore.getState().favorites).toHaveLength(0)
  })

  it('shows notification when product added to cart', () => {
    render(<ProductCard product={mockProduct} />)
    const addBtn = screen.getByText('Add to Cart')
    fireEvent.click(addBtn)
    expect(screen.getByText(/Added to cart/)).toBeTruthy()
  })
})

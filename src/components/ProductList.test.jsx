import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductList } from '../components/ProductList'

const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 50,
    rating: 4.5,
    reviews: 100,
    image: '🧥',
    description: 'Description 1',
    inStock: true
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 75,
    rating: 4.8,
    reviews: 200,
    image: '🧤',
    description: 'Description 2',
    inStock: true
  }
]

describe('ProductList Component', () => {
  it('renders section title', () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProducts} title="Test Products" />
      </BrowserRouter>
    )
    expect(screen.getByText('Test Products')).toBeTruthy()
  })

  it('renders all products', () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProducts} />
      </BrowserRouter>
    )
    expect(screen.getByText('Product 1')).toBeTruthy()
    expect(screen.getByText('Product 2')).toBeTruthy()
  })

  it('renders product grid', () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProducts} />
      </BrowserRouter>
    )
    expect(screen.getByTestId('product-grid')).toBeTruthy()
  })

  it('shows empty message when no products', () => {
    render(
      <BrowserRouter>
        <ProductList products={[]} />
      </BrowserRouter>
    )
    expect(screen.getByText('No products found')).toBeTruthy()
  })

  it('uses default title when not provided', () => {
    render(
      <BrowserRouter>
        <ProductList products={mockProducts} />
      </BrowserRouter>
    )
    expect(screen.getByText('Products')).toBeTruthy()
  })
})

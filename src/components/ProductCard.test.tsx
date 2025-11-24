import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

const fakeProduct = { id: 't1', name: 'Test Product', description: 'Nice', price: 12.5, image: '/images/merino-crew.svg' }

describe('ProductCard', () => {
  it('renders product title and price', () => {
    render(<ProductCard product={fakeProduct} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$12.50')).toBeInTheDocument()
  })
})

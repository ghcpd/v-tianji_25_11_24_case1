import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from '../components/ProductCard'

const product = { id: 1, title: 'Merino Base Tee', price: '$39', desc: 'Light and breathable.' }

describe('ProductCard', () => {
  it('renders product details', () => {
    render(<ProductCard product={product} />)
    const titleElements = screen.getAllByText('Merino Base Tee')
    expect(titleElements.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeTruthy()
  })
})

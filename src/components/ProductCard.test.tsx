import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

const product = {
  id: 'p1',
  name: 'Test Tee',
  price: 25,
  description: 'A very nice tee',
  image: '/product.jpg'
}

describe('ProductCard', () => {
  it('shows name and price and add button', () => {
    render(<ProductCard {...product} />)
    expect(screen.getByText(/Test Tee/)).toBeInTheDocument()
    expect(screen.getByText(/\$25\.00/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })
})

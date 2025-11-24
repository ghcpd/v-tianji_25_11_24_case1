import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'

describe('ProductList', () => {
  it('renders multiple products from data', () => {
    render(<ProductList />)
    // The list is populated from the static data file with specific product names
    expect(screen.getByText(/Cloudline Merino Tee/)).toBeInTheDocument()
    expect(screen.getByText(/Trail Mid-Layer Zip/)).toBeInTheDocument()
  })
})

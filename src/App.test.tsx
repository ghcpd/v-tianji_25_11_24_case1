import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { products } from './data/products'

describe('Merino WarmLayer UI', () => {
  it('renders brand header and product grid', () => {
    render(<App />)
    expect(screen.getByText(/Merino WarmLayer/i)).toBeInTheDocument()
    const cards = screen.getAllByTestId('product-card')
    expect(cards.length).toBe(products.length)
  })

  it('adds a product to cart from grid and shows subtotal', async () => {
    render(<App />)
    const firstAddButton = screen.getAllByTestId('add-to-cart')[0]
    fireEvent.click(firstAddButton)

    const drawer = await screen.findByTestId('cart-drawer')
    expect(drawer).toBeInTheDocument()

    const subtotal = await screen.findByTestId('cart-subtotal')
    expect(subtotal).toHaveTextContent(products[0].price.toFixed(2))
  })

  it('filters products by search term', () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText(/search/i)
    fireEvent.change(searchInput, { target: { value: 'hoodie' } })
    const cards = screen.getAllByTestId('product-card')
    expect(cards.length).toBe(1)
    expect(cards[0]).toHaveAttribute('data-product-id', 'mid-hoodie')
  })
})

import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Cart } from '../components/Cart'
import { useStore } from '../store/store'

const mockItem = {
  id: 1,
  name: 'Test Product',
  price: 50.00,
  quantity: 2,
  image: '🧥'
}

describe('Cart Component', () => {
  beforeEach(() => {
    useStore.setState({ cart: [] })
  })

  it('shows empty cart message when cart is empty', () => {
    render(<Cart />)
    expect(screen.getByText('Your cart is empty')).toBeTruthy()
    expect(screen.getByText(/Start shopping/)).toBeTruthy()
  })

  it('renders shopping cart items', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    expect(screen.getByText('Test Product')).toBeTruthy()
    expect(screen.getByText('$50.00')).toBeTruthy()
  })

  it('calculates correct subtotal', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    expect(screen.getByTestId('subtotal').textContent).toContain('$100.00')
  })

  it('calculates correct total with tax', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    expect(screen.getByTestId('total').textContent).toContain('$108.00')
  })

  it('increases item quantity', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    const increaseBtn = screen.getByTestId('increase-qty-1')
    fireEvent.click(increaseBtn)
    expect(useStore.getState().cart[0].quantity).toBe(3)
  })

  it('decreases item quantity', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    const decreaseBtn = screen.getByTestId('decrease-qty-1')
    fireEvent.click(decreaseBtn)
    expect(useStore.getState().cart[0].quantity).toBe(1)
  })

  it('removes item when quantity reaches 0', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    const decreaseBtn = screen.getByTestId('decrease-qty-1')
    fireEvent.click(decreaseBtn)
    fireEvent.click(decreaseBtn)
    expect(useStore.getState().cart).toHaveLength(0)
  })

  it('removes item when remove button clicked', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    const removeBtn = screen.getByTestId('remove-btn-1')
    fireEvent.click(removeBtn)
    expect(useStore.getState().cart).toHaveLength(0)
  })

  it('clears entire cart', () => {
    useStore.setState({
      cart: [
        mockItem,
        { ...mockItem, id: 2, name: 'Product 2' }
      ]
    })
    render(<Cart />)
    const clearBtn = screen.getByTestId('clear-cart-btn')
    fireEvent.click(clearBtn)
    expect(useStore.getState().cart).toHaveLength(0)
  })

  it('renders checkout button', () => {
    useStore.setState({ cart: [mockItem] })
    render(<Cart />)
    expect(screen.getByTestId('checkout-btn')).toBeTruthy()
  })

  it('shows continue shopping button with link', () => {
    render(<Cart />)
    const continueBtn = screen.getByText('Continue Shopping')
    expect(continueBtn).toBeTruthy()
  })
})

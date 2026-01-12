import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../components/Header'
import { useStore } from '../store/store'

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Header Component', () => {
  beforeEach(() => {
    useStore.setState({ cart: [] })
  })

  it('renders header with logo', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('Merino Warmth')).toBeTruthy()
  })

  it('renders navigation links', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Shop')).toBeTruthy()
  })

  it('displays cart count', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText(/Cart \(0\)/)).toBeTruthy()
  })

  it('updates cart count when items added', () => {
    useStore.setState({
      cart: [
        { id: 1, name: 'Test', price: 50, quantity: 1, image: '🧥' }
      ]
    })
    renderWithRouter(<Header />)
    expect(screen.getByText(/Cart \(1\)/)).toBeTruthy()
  })

  it('shows cart link is accessible', () => {
    renderWithRouter(<Header />)
    const cartLink = screen.getByText(/Cart/).closest('a')
    expect(cartLink).toBeTruthy()
    expect(cartLink.href).toContain('/cart')
  })
})

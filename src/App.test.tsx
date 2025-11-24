import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders core UI sections', () => {
    render(<App />)
    const brand = screen.getAllByText(/Meri•no/)
    expect(brand.length).toBeGreaterThan(0)
    expect(screen.getByText(/Featured/)).toBeInTheDocument()
  })
})

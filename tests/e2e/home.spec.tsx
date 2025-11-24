import { render, screen } from '@testing-library/react'
import App from '../../src/App'

describe('E2E (vitest + jsdom) - home page', () => {
  it('renders top-level sections and a product', () => {
    render(<App />)
    const brands = screen.getAllByText(/Meri•no/)
    expect(brands.length).toBeGreaterThan(0)
    expect(screen.getByText(/Featured/)).toBeInTheDocument()
    expect(screen.getByText(/Cloudline Merino Tee/)).toBeInTheDocument()
  })
})

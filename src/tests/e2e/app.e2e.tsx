import { render, screen } from '@testing-library/react'
import App from '../../App'

describe('E2E - App (simple integration)', () => {
  it('renders hero, featured and a product card', () => {
    render(<App />)
    expect(screen.getByText(/Luxuriously soft merino/i)).toBeInTheDocument()
    expect(screen.getByText(/Featured/)).toBeInTheDocument()
    expect(screen.getByText(/Cloudline Merino Tee/)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders brand and actions', () => {
    render(<Header />)
    expect(screen.getByText(/Meri•no/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Open cart/i })).toBeInTheDocument()
  })
})

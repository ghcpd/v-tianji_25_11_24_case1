import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('shows the site title', () => {
  render(<App />)
  expect(screen.getByText(/Merino Warm-Layer E-Shop/)).toBeInTheDocument()
})

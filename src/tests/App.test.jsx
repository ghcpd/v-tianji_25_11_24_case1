import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the hero and products', () => {
    render(<App />)
    // hero title is the h1
    expect(screen.getByRole('heading', { level: 1, name: /Merino Warm-Layer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading',{ level: 3, name: /Merino Base Tee/i })).toBeInTheDocument()
  })
})

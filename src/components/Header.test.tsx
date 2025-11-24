import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders brand and links', () => {
    render(<Header />)
    expect(screen.getByText('Merino')).toBeInTheDocument()
    expect(screen.getByText('E-Shop')).toBeInTheDocument()
    expect(screen.getByText('Men')).toBeInTheDocument()
    expect(screen.getByText('Women')).toBeInTheDocument()
  })
})

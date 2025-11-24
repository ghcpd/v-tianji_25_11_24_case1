import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductGrid from './ProductGrid'

it('renders a list of products', () => {
  render(<ProductGrid />)
  const cards = screen.getAllByTestId(/product-/)
  expect(cards.length).toBeGreaterThan(0)
})

it('each product has an image with alt text and a title', () => {
  render(<ProductGrid />)
  const imgs = screen.getAllByRole('img')
  expect(imgs.length).toBeGreaterThan(0)
  imgs.forEach((img) => expect(img).toHaveAttribute('alt'))
  const titles = screen.getAllByText(/Merino/) // product names start with Merino
  expect(titles.length).toBeGreaterThan(0)
})

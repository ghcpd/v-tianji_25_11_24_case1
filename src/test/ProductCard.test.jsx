import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  name: "Test Product",
  description: "Test description",
  price: 99.99,
  category: "base-layer",
  image: "test.jpg",
  inStock: true,
  rating: 4.5,
  reviews: 100
};

describe('ProductCard', () => {
  it('renders product information', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('(100)')).toBeInTheDocument();
  });

  it('displays correct number of stars', () => {
    render(<ProductCard product={mockProduct} onAddToCart={() => {}} />);
    const stars = screen.getAllByText('★');
    const filledStars = stars.filter(star => star.className.includes('filled'));
    expect(filledStars).toHaveLength(4);
  });

  it('calls onAddToCart when add to cart button is clicked', async () => {
    const user = userEvent.setup();
    const handleAddToCart = vi.fn();
    render(<ProductCard product={mockProduct} onAddToCart={handleAddToCart} />);
    
    const addButton = screen.getByText('Add to Cart');
    await user.click(addButton);
    
    expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('disables button and shows out of stock when product is not in stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    render(<ProductCard product={outOfStockProduct} onAddToCart={() => {}} />);
    
    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
    expect(screen.getByText('Unavailable')).toBeDisabled();
  });
});

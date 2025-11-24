import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header', () => {
  it('renders logo and navigation', () => {
    render(<Header cartItemCount={0} onCartClick={() => {}} />);
    expect(screen.getByText('Merino Warmth')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('displays cart item count badge', () => {
    render(<Header cartItemCount={5} onCartClick={() => {}} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('does not display badge when cart is empty', () => {
    render(<Header cartItemCount={0} onCartClick={() => {}} />);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('calls onCartClick when cart button is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Header cartItemCount={0} onCartClick={handleClick} />);
    
    const cartButton = screen.getByLabelText('Shopping cart');
    await user.click(cartButton);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

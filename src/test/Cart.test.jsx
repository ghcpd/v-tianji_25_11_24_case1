import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../components/Cart';

const mockItems = [
  {
    id: 1,
    name: "Product 1",
    price: 99.99,
    quantity: 2,
    image: "test1.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    price: 149.99,
    quantity: 1,
    image: "test2.jpg"
  }
];

describe('Cart', () => {
  it('renders empty cart message when no items', () => {
    render(
      <Cart 
        items={[]} 
        onClose={() => {}} 
        onUpdateQuantity={() => {}} 
        onRemoveItem={() => {}}
      />
    );
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('renders cart items', () => {
    render(
      <Cart 
        items={mockItems} 
        onClose={() => {}} 
        onUpdateQuantity={() => {}} 
        onRemoveItem={() => {}}
      />
    );
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calculates total correctly', () => {
    render(
      <Cart 
        items={mockItems} 
        onClose={() => {}} 
        onUpdateQuantity={() => {}} 
        onRemoveItem={() => {}}
      />
    );
    const total = (99.99 * 2 + 149.99 * 1).toFixed(2);
    expect(screen.getByText(`$${total}`)).toBeInTheDocument();
  });

  it('calls onUpdateQuantity when quantity is changed', async () => {
    const user = userEvent.setup();
    const handleUpdateQuantity = vi.fn();
    render(
      <Cart 
        items={mockItems} 
        onClose={() => {}} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemoveItem={() => {}}
      />
    );
    
    const increaseButtons = screen.getAllByLabelText('Increase quantity');
    await user.click(increaseButtons[0]);
    
    expect(handleUpdateQuantity).toHaveBeenCalledWith(1, 3);
  });

  it('calls onRemoveItem when remove button is clicked', async () => {
    const user = userEvent.setup();
    const handleRemoveItem = vi.fn();
    render(
      <Cart 
        items={mockItems} 
        onClose={() => {}} 
        onUpdateQuantity={() => {}} 
        onRemoveItem={handleRemoveItem}
      />
    );
    
    const removeButtons = screen.getAllByLabelText('Remove item');
    await user.click(removeButtons[0]);
    
    expect(handleRemoveItem).toHaveBeenCalledWith(1);
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(
      <Cart 
        items={mockItems} 
        onClose={handleClose} 
        onUpdateQuantity={() => {}} 
        onRemoveItem={() => {}}
      />
    );
    
    const closeButton = screen.getByLabelText('Close cart');
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalled();
  });
});

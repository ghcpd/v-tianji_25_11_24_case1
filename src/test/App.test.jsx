import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  it('renders the app with header and hero section', () => {
    render(<App />);
    expect(screen.getByText('Merino Warmth')).toBeInTheDocument();
    expect(screen.getByText('Premium Merino Warm Layers')).toBeInTheDocument();
  });

  it('displays all products by default', () => {
    render(<App />);
    expect(screen.getByText('Classic Merino Base Layer')).toBeInTheDocument();
    expect(screen.getByText('Alpine Merino Midlayer')).toBeInTheDocument();
    expect(screen.getByText('Expedition Merino Hoodie')).toBeInTheDocument();
  });

  it('filters products by category', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const baseLayers = screen.getByRole('button', { name: 'Base Layers' });
    await user.click(baseLayers);
    
    expect(screen.getByText('Classic Merino Base Layer')).toBeInTheDocument();
    expect(screen.queryByText('Alpine Merino Midlayer')).not.toBeInTheDocument();
  });

  it('adds item to cart and updates badge', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const addButtons = screen.getAllByText('Add to Cart');
    await user.click(addButtons[0]);
    
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('opens and closes cart', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const cartButton = screen.getByLabelText('Shopping cart');
    await user.click(cartButton);
    
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    
    const closeButton = screen.getByLabelText('Close cart');
    await user.click(closeButton);
    
    expect(screen.queryByText('Shopping Cart')).not.toBeInTheDocument();
  });
});

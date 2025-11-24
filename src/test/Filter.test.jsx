import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from '../components/Filter';

describe('Filter', () => {
  it('renders all category buttons', () => {
    render(<Filter selectedCategory="all" onCategoryChange={() => {}} />);
    expect(screen.getByText('All Products')).toBeInTheDocument();
    expect(screen.getByText('Base Layers')).toBeInTheDocument();
    expect(screen.getByText('Mid Layers')).toBeInTheDocument();
    expect(screen.getByText('Heavy Layers')).toBeInTheDocument();
  });

  it('highlights the selected category', () => {
    render(<Filter selectedCategory="base-layer" onCategoryChange={() => {}} />);
    const baseLayers = screen.getByText('Base Layers');
    expect(baseLayers.className).toContain('active');
  });

  it('calls onCategoryChange when a category is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Filter selectedCategory="all" onCategoryChange={handleChange} />);
    
    const midLayers = screen.getByText('Mid Layers');
    await user.click(midLayers);
    
    expect(handleChange).toHaveBeenCalledWith('mid-layer');
  });
});

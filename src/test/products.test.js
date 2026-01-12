import { describe, it, expect } from 'vitest';
import { products, categories } from '../data/products';

describe('products data', () => {
  it('has 6 products', () => {
    expect(products).toHaveLength(6);
  });

  it('all products have required fields', () => {
    products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('inStock');
      expect(product).toHaveProperty('rating');
      expect(product).toHaveProperty('reviews');
    });
  });

  it('all product prices are positive numbers', () => {
    products.forEach(product => {
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('all product ratings are between 0 and 5', () => {
    products.forEach(product => {
      expect(product.rating).toBeGreaterThanOrEqual(0);
      expect(product.rating).toBeLessThanOrEqual(5);
    });
  });
});

describe('categories data', () => {
  it('has 4 categories', () => {
    expect(categories).toHaveLength(4);
  });

  it('all categories have id and name', () => {
    categories.forEach(category => {
      expect(category).toHaveProperty('id');
      expect(category).toHaveProperty('name');
    });
  });
});

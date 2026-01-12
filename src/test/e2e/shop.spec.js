import { test, expect } from '@playwright/test';

test.describe('Merino Warmth E-Shop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page.locator('text=Merino Warmth')).toBeVisible();
    await expect(page.locator('text=Premium Merino Warm Layers')).toBeVisible();
  });

  test('displays product catalog', async ({ page }) => {
    await expect(page.locator('text=Classic Merino Base Layer')).toBeVisible();
    await expect(page.locator('text=Alpine Merino Midlayer')).toBeVisible();
    await expect(page.locator('text=Expedition Merino Hoodie')).toBeVisible();
  });

  test('filter products by category', async ({ page }) => {
    // Click on Base Layers filter
    await page.click('text=Base Layers');
    
    // Should show base layer products
    await expect(page.locator('text=Classic Merino Base Layer')).toBeVisible();
    await expect(page.locator('text=Lightweight Merino Tee')).toBeVisible();
    
    // Should not show mid-layer products
    await expect(page.locator('text=Alpine Merino Midlayer')).not.toBeVisible();
  });

  test('add product to cart', async ({ page }) => {
    // Click first "Add to Cart" button
    await page.click('text=Add to Cart >> nth=0');
    
    // Cart badge should show 1 item
    await expect(page.locator('.cart-badge')).toHaveText('1');
  });

  test('complete cart workflow', async ({ page }) => {
    // Add multiple items to cart
    await page.click('text=Add to Cart >> nth=0');
    await page.click('text=Add to Cart >> nth=1');
    
    // Open cart
    await page.click('[aria-label="Shopping cart"]');
    
    // Cart should be visible
    await expect(page.locator('text=Shopping Cart')).toBeVisible();
    
    // Should show 2 items
    const cartItems = page.locator('.cart-item');
    await expect(cartItems).toHaveCount(2);
    
    // Increase quantity of first item
    await page.click('.cart-item >> nth=0 >> [aria-label="Increase quantity"]');
    
    // Cart badge should show 3 items
    await expect(page.locator('.cart-badge')).toHaveText('3');
    
    // Remove first item
    await page.click('.cart-item >> nth=0 >> [aria-label="Remove item"]');
    
    // Should have 1 item left
    await expect(cartItems).toHaveCount(1);
  });

  test('shows out of stock badge', async ({ page }) => {
    // The Thermal Merino Leggings is out of stock - need to scroll to it first
    const productCard = page.locator('.product-card:has-text("Thermal Merino Leggings")');
    await productCard.scrollIntoViewIfNeeded();
    await expect(productCard.locator('.out-of-stock-badge')).toBeVisible();
    await expect(productCard.locator('button:has-text("Unavailable")')).toBeDisabled();
  });

  test('navigation elements are present', async ({ page }) => {
    await expect(page.locator('text=Shop')).toBeVisible();
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
  });

  test('cart closes when clicking outside', async ({ page }) => {
    // Add item and open cart
    await page.click('text=Add to Cart >> nth=0');
    await page.click('[aria-label="Shopping cart"]');
    
    await expect(page.locator('text=Shopping Cart')).toBeVisible();
    
    // Click on overlay
    await page.click('.cart-overlay');
    
    // Cart should close
    await expect(page.locator('text=Shopping Cart')).not.toBeVisible();
  });

  test('displays product ratings', async ({ page }) => {
    // Check that star ratings are visible
    const stars = page.locator('.star.filled');
    await expect(stars.first()).toBeVisible();
  });

  test('cart total calculates correctly', async ({ page }) => {
    // Add first product (Classic Merino Base Layer - $89.99)
    await page.click('text=Classic Merino Base Layer >> .. >> text=Add to Cart');
    
    // Open cart
    await page.click('[aria-label="Shopping cart"]');
    
    // Check total
    await expect(page.locator('.total-amount')).toHaveText('$89.99');
    
    // Increase quantity
    await page.click('[aria-label="Increase quantity"]');
    
    // Check updated total
    await expect(page.locator('.total-amount')).toHaveText('$179.98');
  });
});

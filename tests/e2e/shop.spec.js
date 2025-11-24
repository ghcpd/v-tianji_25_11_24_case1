import { test, expect } from '@playwright/test'

test.describe('E2E: Home Page', () => {
  test('loads and displays home page', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header h1')).toContainText('Merino Warmth')
    await expect(page.locator('text=Premium Merino Warm Layers')).toBeVisible()
  })

  test('shows featured products', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Featured Products')).toBeVisible()
    const products = await page.locator('[data-testid^="product-card-"]').count()
    expect(products).toBeGreaterThan(0)
  })

  test('navigates to shop page', async ({ page }) => {
    await page.goto('/')
    await page.click('nav a:has-text("Shop")')
    await expect(page.locator('text=All Products')).toBeVisible()
  })

  test('displays shop now button and clicks it', async ({ page }) => {
    await page.goto('/')
    const shopBtn = page.locator('.cta-button, a:has-text("Shop Now")')
    await expect(shopBtn).toBeVisible()
    await shopBtn.first().click()
    await expect(page.url()).toContain('/products')
  })
})

test.describe('E2E: Product Shopping', () => {
  test('adds product to cart', async ({ page }) => {
    await page.goto('/products')
    const addBtn = page.locator('[data-testid="add-to-cart-btn-1"]').first()
    await addBtn.click()
    await expect(page.locator('.cart-link')).toContainText('Cart (1)')
  })

  test('adds multiple products to cart', async ({ page }) => {
    await page.goto('/products')
    await page.locator('[data-testid="add-to-cart-btn-1"]').first().click()
    await page.locator('[data-testid="add-to-cart-btn-2"]').first().click()
    await expect(page.locator('.cart-link')).toContainText('Cart (2)')
  })

  test('toggles favorite status', async ({ page }) => {
    await page.goto('/products')
    const favoriteBtn = page.locator('[data-testid="favorite-btn-1"]').first()
    await favoriteBtn.click()
    const btnClass = await favoriteBtn.getAttribute('class')
    expect(btnClass).toContain('favorited')
  })

  test('displays product information correctly', async ({ page }) => {
    await page.goto('/products')
    await expect(page.locator('[data-testid="product-name-1"]')).toContainText('Merino Thermal Base Layer')
    await expect(page.locator('[data-testid="product-price-1"]')).toContainText('$79.99')
  })
})

test.describe('E2E: Shopping Cart', () => {
  test('displays empty cart message initially', async ({ page }) => {
    await page.goto('/cart')
    await expect(page.locator('text=Your cart is empty')).toBeVisible()
    await expect(page.locator('text=Continue Shopping')).toBeVisible()
  })

  test('cart updates display after adding product', async ({ page }) => {
    await page.goto('/products')
    const cartCountBefore = await page.locator('.cart-link').textContent()
    expect(cartCountBefore).toContain('0')
    
    await page.locator('[data-testid="add-to-cart-btn-1"]').first().click()
    await page.waitForTimeout(100)
    
    const cartCountAfter = await page.locator('.cart-link').textContent()
    expect(cartCountAfter).toContain('1')
  })

  test('multiple products can be added to cart', async ({ page }) => {
    await page.goto('/products')
    await page.locator('[data-testid="add-to-cart-btn-1"]').first().click()
    await page.locator('[data-testid="add-to-cart-btn-2"]').first().click()
    await page.waitForTimeout(100)
    
    const cartCount = await page.locator('.cart-link').textContent()
    expect(cartCount).toContain('2')
  })

  test('cart link navigates to cart page', async ({ page }) => {
    await page.goto('/products')
    await page.locator('[data-testid="add-to-cart-btn-1"]').first().click()
    await page.locator('.cart-link').click()
    await page.waitForURL('**/cart')
    await expect(page.url()).toContain('/cart')
  })

  test('cart page loads successfully', async ({ page }) => {
    await page.goto('/cart')
    await expect(page).toHaveTitle(/Merino Warmth/)
    const cartElement = page.locator('.cart-empty, .cart-container').first()
    await expect(cartElement).toBeTruthy()
  })

  test('cart empty button continues shopping', async ({ page }) => {
    await page.goto('/cart')
    const shopBtn = page.locator('a:has-text("Continue Shopping")')
    await shopBtn.click()
    await page.waitForURL('**/products')
    expect(page.url()).toContain('/products')
  })
})

test.describe('E2E: Navigation', () => {
  test('navigates between pages via header', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header h1')).toContainText('Merino Warmth')

    await page.click('nav a:has-text("Shop")')
    await expect(page.locator('text=All Products')).toBeVisible()

    await page.click('nav a:has-text("Home")')
    await expect(page.locator('text=Featured Products')).toBeVisible()
  })

  test('cart link is always accessible from header', async ({ page }) => {
    await page.goto('/')
    const cartLink = page.locator('.cart-link')
    await expect(cartLink).toBeVisible()
    await cartLink.click()
    await page.waitForURL('**/cart')
    await expect(page.locator('text=Your cart is empty')).toBeVisible()
  })
})

test.describe('E2E: Responsive Design', () => {
  test('header displays on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await expect(page.locator('header h1')).toContainText('Merino Warmth')
    await expect(page.locator('nav a:has-text("Shop")')).toBeVisible()
  })

  test('products display on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/products')
    const products = await page.locator('[data-testid^="product-card-"]').count()
    expect(products).toBeGreaterThan(0)
  })
})

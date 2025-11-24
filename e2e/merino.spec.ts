import { test, expect } from '@playwright/test'

test('home loads and cart interaction works', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText(/Merino WarmLayer/i)).toBeVisible()
  await expect(page.getByText(/Warm-layer shop/i)).toBeVisible()

  const addButton = page.getByTestId('add-to-cart').first()
  await addButton.click()

  const cartButton = page.getByTestId('cart-button')
  await expect(cartButton).toContainText('1')

  const drawer = page.getByTestId('cart-drawer')
  await expect(drawer).toBeVisible()

  const subtotal = drawer.getByTestId('cart-subtotal')
  await expect(subtotal).toContainText('$')
})

import { test, expect } from '@playwright/test'

test('homepage shows title and products', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Merino Warm-Layer E-Shop')).toBeVisible()
  const items = await page.locator('[data-testid^="product-"]').count()
  expect(items).toBeGreaterThan(0)
})

import { test, expect } from '@playwright/test'

test('homepage shows hero and products', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1, name: 'Merino Warm-Layer' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 3, name: 'Merino Base Tee' })).toBeVisible()
})

import { test, expect } from '@playwright/test';

test('test filter', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  page.on('console', msg => {
    const text = msg.text()
    if (text.startsWith('KButton:')) {
      return
    }

    console.log(msg.text())
  })

  await expect(page.locator('.kong-ui-entity-filter')).toBeVisible({ timeout: 5000000 })

  for (let i = 0; i < 100; ++i) {
    await page.locator('[data-testid="filter-button"]').click()
    await page.locator('.kong-ui-entity-filter [data-testid="name"]').click()
    await page.locator('.kong-ui-entity-filter [data-testid="name"] #filter-name').fill('foo')
    await expect(page.locator('.kong-ui-entity-filter [data-testid="name"] [data-testid="apply-filter"]')).toBeVisible()

    console.log(`=====================================`)

    await page.locator('.kong-ui-entity-filter [data-testid="name"] [data-testid="apply-filter"]').click()
    await expect(page.locator('.empty-state-title .k-empty-state-title-header')).toHaveText('No results found', { timeout: 5000 })

    // clear the filter
    await page.locator('[data-testid="filter-button"]').click()
    await page.locator('.kong-ui-entity-filter [data-testid="name"]').click()
    await page.locator('.kong-ui-entity-filter [data-testid="name"] #filter-name').fill('')
    await expect(page.locator('.kong-ui-entity-filter [data-testid="name"] [data-testid="apply-filter"]')).toBeVisible()
    await page.locator('.kong-ui-entity-filter [data-testid="name"] [data-testid="apply-filter"]').click()

    await expect(page.locator('.kong-ui-entity-base-table tbody tr')).toHaveCount(2)

    await page.waitForTimeout(1300)
  }
})

test.setTimeout(5000000)

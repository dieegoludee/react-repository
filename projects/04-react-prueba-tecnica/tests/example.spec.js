// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const fact = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await fact.textContent()
  const imageSrc = await image.getAttribute('src')
  console.log(textContent)
  console.log(imageSrc)

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

import { test, expect } from '@playwright/test';
const UI_URL = 'http://localhost:5173/';

test.describe('User Details Page', () => {
  test('should display user details correctly', async ({ page }) => {
    await page.goto(`${UI_URL}user/1`);
    
    // Check user name and username
    await expect(page.getByText('Leanne Graham')).toBeVisible();
    await expect(page.getByText('@Bret')).toBeVisible();
    
    // Check contact information
    await expect(page.getByText('Contact Information')).toBeVisible();
    await expect(page.getByText('Sincere@april.biz')).toBeVisible();
    await expect(page.getByText('1-770-736-8031 x56442')).toBeVisible();
    await expect(page.getByText('hildegard.org')).toBeVisible();
    
    // Check address information
    await expect(page.getByText('Kulas Light')).toBeVisible();
    await expect(page.getByText('Apt. 556')).toBeVisible();
    await expect(page.getByText('Gwenborough, 92998-3874')).toBeVisible();
    
    // Check company information
    await expect(page.getByText('Company Information')).toBeVisible();
    await expect(page.getByText('Romaguera-Crona')).toBeVisible();
    await expect(page.getByText('Multi-layered client-server neural-net')).toBeVisible();
  });

  test('should navigate back to home page', async ({ page }) => {
    await page.goto(`${UI_URL}user/1`);
    await page.getByText('Back to Home').click();
    await expect(page.url()).toBe(UI_URL);
  });

  test('should show error for invalid user ID', async ({ page }) => {
    await page.goto(`${UI_URL}user/999`);
    await expect(page.getByText('User not found')).toBeVisible();
    await expect(page.getByText('Back to Home')).toBeVisible();
  });
});
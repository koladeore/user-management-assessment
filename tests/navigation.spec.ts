import { test, expect } from '@playwright/test';
const UI_URL = 'http://localhost:5173/';
test.describe('Navigation', () => {
  test('should navigate between pages correctly', async ({ page }) => {
    // Start at home page
    await page.goto(UI_URL);
    await expect(page.getByText('User Directory')).toBeVisible();
    
    // Navigate to first user details
    await page.getByText('View Details').first().click();
    await expect(page.url()).toContain('/user/1');
    await expect(page.getByText('Leanne Graham')).toBeVisible();
    
    // Navigate back to home
    await page.getByText('Back to Home').click();
    await expect(page.url()).toBe(UI_URL);
    await expect(page.getByText('User Directory')).toBeVisible();
    
    // Navigate to second user details
    await page.getByText('View Details').nth(1).click();
    await expect(page.url()).toContain('/user/2');
    await expect(page.getByText('Ervin Howell')).toBeVisible();
  });

  test('should handle direct navigation to pages', async ({ page }) => {
    // Direct navigation to user details
    await page.goto(`${UI_URL}user/1`);
    await expect(page.getByText('Leanne Graham')).toBeVisible();
    
    // Direct navigation to invalid user
    await page.goto(`${UI_URL}user/999`);
    await expect(page.getByText('User not found')).toBeVisible();
    
    // Direct navigation to home
    await page.goto(UI_URL);
    await expect(page.getByText('User Directory')).toBeVisible();
  });
});
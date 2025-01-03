import { test, expect } from '@playwright/test';
const UI_URL = 'http://localhost:5173/';
test.describe('Home Page', () => {
  test('should display the user directory title', async ({ page }) => {
    await page.goto(UI_URL);
    await expect(page.getByText('User Directory')).toBeVisible();
    await expect(page.getByText('Browse through our user database')).toBeVisible();
  });

  test('should display all user cards', async ({ page }) => {
    await page.goto(UI_URL);
    const userCards = await page.locator('.bg-white.rounded-lg').all();
    expect(userCards).toHaveLength(10); // We have 2 users in our data
  });

  test('should display correct user information in cards', async ({ page }) => {
    await page.goto(UI_URL);
    
    // Check first user
    await expect(page.getByText('Leanne Graham')).toBeVisible();
    await expect(page.getByText('@Bret')).toBeVisible();
    await expect(page.getByText('Sincere@april.biz')).toBeVisible();
    
    // Check second user
    await expect(page.getByText('Ervin Howell')).toBeVisible();
    await expect(page.getByText('@Antonette')).toBeVisible();
    await expect(page.getByText('Shanna@melissa.tv')).toBeVisible();
  });

  test('should navigate to user details when clicking view details', async ({ page }) => {
    await page.goto(UI_URL);
    await page.getByText('View Details').first().click();
    await expect(page.url()).toContain('/user/1');
  });
});
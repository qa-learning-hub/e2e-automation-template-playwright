import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('testuser', 'password123');
  await expect(page).toHaveURL('https://example.com/dashboard');
});

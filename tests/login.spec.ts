import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('student', 'Password123');
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
});

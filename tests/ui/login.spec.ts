import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';

//This line sets the next block to be executed in parallel
test.describe.configure({ mode: 'parallel' });

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.USERNAME || '', process.env.PASSWORD || '');
  await expect(page).toHaveURL(`${process.env.BASE_URL}/logged-in-successfully/`);
});

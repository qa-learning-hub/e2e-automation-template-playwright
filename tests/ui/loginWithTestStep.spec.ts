import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';


//This line sets the next block to be executed in parallel
test.describe.configure({ mode: 'parallel' });

//Login example With POM
test('User can log in successfully Test Step With POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.USERNAME || '', process.env.PASSWORD || '');
  await expect(page).toHaveURL(`${process.env.BASE_URL}/logged-in-successfully/`);
});

//Login example Without POM
test('Login successfully Test Step Without POM', async ({ page }) => {
  await test.step('Navegar a la página de login', async () => {
    await page.goto(`${process.env.BASE_URL}/practice-test-login/`);
  });

  await test.step('Ingresar credenciales válidas', async () => {
    await page.fill('#username', process.env.USERNAME || '');
    await page.fill('#password', process.env.PASSWORD || '');
  });

  await test.step('Hacer clic en el botón de login', async () => {
    await page.click('button[id="submit"]');
  });

  await test.step('Verificar redirección al dashboard', async () => {
    await expect(page).toHaveURL(`${process.env.BASE_URL}/logged-in-successfully/`);
  });
});
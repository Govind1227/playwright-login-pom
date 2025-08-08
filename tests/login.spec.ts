import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid login should succeed', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('sample123456789@gmail.com', 'Pass123');
  await loginPage.assertLoginSuccess();
});

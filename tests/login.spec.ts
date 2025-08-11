// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import {users} from '../Data/UserData';

// test('Valid login should succeed', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login(users.Loginuser.email, users.Loginuser.password);
//   await loginPage.assertLoginSuccess();
// });


import { test } from '@playwright/test';
import { UserService } from '../services/UserService';

test("Login Test", async ({ page }) => {
  const userService = new UserService(page);
  await userService.loginUser();
  await userService.page.screenshot({path:"Reports/Login.png"});
});

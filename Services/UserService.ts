import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { Page } from '@playwright/test';
import { users } from '../data/UserData';

export class UserService {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly registrationPage: RegistrationPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.registrationPage = new RegistrationPage(page);
  }

  async registerUser() {
    await this.registrationPage.RegistrationLink();
    await this.registrationPage.Registration(
      users.validUser.firstName,
      users.validUser.lastName,
      users.validUser.email,
      users.validUser.telephone,
      users.validUser.password
    );
    await this.registrationPage.page.click("(//label[@class='custom-control-label'])[3]");
    await this.registrationPage.page.click("//input[@value='Continue']");
  }

  async loginUser() {
    await this.loginPage.goto();
    await this.loginPage.login(users.Loginuser.email, users.Loginuser.password);
    await this.loginPage.assertLoginSuccess();
  }
}

import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly myAccountButton: Locator;
  readonly loginLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly successHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountButton = page.getByRole('button', { name: 'My account' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.emailInput = page.getByRole('textbox', { name: 'E-Mail Address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.successHeader = page.locator('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
  }

  async goto() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/');
  }

  async login(email: string, password: string) {
    await this.myAccountButton.click(); 
    await this.loginLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginSuccess() {
    await expect(this.successHeader).toBeVisible();
  }
}

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
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
    this.successHeader = page.locator('h2:has-text("My Account")');
  }

  async goto() {
    await this.page.goto('/');
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

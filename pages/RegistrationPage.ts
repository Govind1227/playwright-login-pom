import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly FirstName: Locator;
  readonly LastName: Locator;
  readonly Email: Locator;
  readonly Telephone: Locator;
  readonly Password: Locator;
  readonly PasswordConfirm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.FirstName = page.locator("//input[@placeholder='First Name']");
    this.LastName = page.locator("//input[@placeholder='Last Name']");
    this.Email = page.locator("//input[@placeholder='E-Mail']");
    this.Telephone = page.locator("//input[@placeholder='Telephone']");
    this.Password = page.locator("//input[@placeholder='Password']");
    this.PasswordConfirm = page.locator("//input[@placeholder='Password Confirm']");
  }

  async RegistrationLink() {
    await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
  }

  async Registration(firstname: string, lastname: string, email: string, telephone: string, password: string) {
    await this.FirstName.fill(firstname);
    await this.LastName.fill(lastname);
    await this.Email.fill(email);
    await this.Telephone.fill(telephone);
    await this.Password.fill(password);
    await this.PasswordConfirm.fill(password);
  }
}

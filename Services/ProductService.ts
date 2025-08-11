import { Page } from '@playwright/test';

export class ProductService {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLaptopsCategory() {
    await this.page.click("a.icon-left.both.text-reset");
    await this.page.click("//span[normalize-space(text())='Laptops & Notebooks']");
  }

  async selectProductByTitle(title: string) {
    await this.page.getByTitle(title).first().scrollIntoViewIfNeeded();
    await this.page.getByTitle(title).first().click();
  }

  async selectOptionByValue(selectIndex: number, value: string) {
    const locator = this.page.locator(`(//select[@class='custom-select'])[${selectIndex}]`);
    await locator.selectOption(value);
  }
}

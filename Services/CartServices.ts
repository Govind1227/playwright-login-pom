import { Page } from '@playwright/test';
import { carts } from '../data/UserData';
import {} from "../data/UserData"

export class CartService {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

 async addToCartByTitle(title : string, nth : number) {
  await this.page.getByTitle(title).nth(nth).click();
}


  async openCartIcon() {
    await this.page.locator("(//div[@class='cart-icon']//div)[2]").click();
  }

  async proceedToCheckout(nthButton = 1) {
    await this.page.getByRole('button').nth(nthButton).click();
  }
}

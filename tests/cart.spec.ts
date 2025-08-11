import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Adding to Cart", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("sample123456789@gmail.com", "Pass123");
    await loginPage.assertLoginSuccess();
    await loginPage.page.click("a.icon-left.both.text-reset");
    await loginPage.page.click("//span[normalize-space(text())='Laptops & Notebooks']");
    await loginPage.page.click("//label[@for='mz-fss-0--1']");
    await loginPage.page.getByTitle('Apple Cinema 30"').first().scrollIntoViewIfNeeded();
    await loginPage.page.getByText('Apple Cinema 30"').first().click();
    await loginPage.page.locator("(//select[@class='custom-select'])[1]").selectOption("34");

    await loginPage.page.getByTitle('Add to Cart').nth(1).click();
    // await loginPage.page.waitForTimeout(10_000);

    const componentsLink = page.locator("a.icon-left.both.nav-link >> text=Components");
    await componentsLink.waitFor({ state: "visible" });
    await componentsLink.scrollIntoViewIfNeeded();
    await loginPage.page.screenshot({path : "Reports/cart.png"});
});
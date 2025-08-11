import {test} from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";


test("Registration Page", async({page}) => {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.RegistrationLink();
    await registrationPage.Registration("Fname", "Lname", "sample1234567890@gmail.com", "+91-9876543210", "Pass@123");
    await registrationPage.page.click("(//label[@class='custom-control-label'])[3]");
    await registrationPage.page.click("//input[@value='Continue']");
    await registrationPage.page.screenshot({path : "Reports/Registration.png"});

});

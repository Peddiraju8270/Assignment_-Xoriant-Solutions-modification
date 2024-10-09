const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/LoginPage');

Given(/^I launch the app$/, async () => {
    // App launch handled automatically
});

When(/^I login with "(.*)" and "(.*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see the "(.*)"$/, async (result) => {
    if (result === "dashboard page") {
        await expect(LoginPage.isLoggedIn()).toBeTrue();
    } else {
        await expect(LoginPage.isErrorDisplayed()).toBeTrue();
    }
});

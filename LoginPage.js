class LoginPage {
    /**
     * Locators for the username input field.
     */
    get usernameInput() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-Username")')
            : $('~test-Username');
    }

    /**
     * Locators for the password input field.
     */
    get passwordInput() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-Password")')
            : $('~test-Password');
    }

    /**
     * Locators for the login button.
     */
    get loginButton() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-LOGIN")')
            : $('~test-LOGIN');
    }

    /**
     * Locators for the error message displayed after failed login.
     */
    get errorMessage() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-ErrorMessage")')
            : $('~test-ErrorMessage');
    }

    /**
     * Locators for the welcome message displayed after successful login.
     */
    get welcomeMessage() {
        return driver.isAndroid
            ? $('android=new UiSelector().resourceId("test-Welcome")')
            : $('~test-Welcome');
    }

    /**
     * Logs in the user by setting username and password, and clicking the login button.
     * 
     * @param {string} username - The username to input.
     * @param {string} password - The password to input.
     */
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    /**
     * Checks if the user is logged in by looking for the welcome message.
     * 
     * @returns {Promise<boolean>} - True if the welcome message is displayed, false otherwise.
     */
    async isLoggedIn() {
        return await this.welcomeMessage.isDisplayed();
    }

    /**
     * Checks if an error message is displayed after failed login.
     * 
     * @returns {Promise<boolean>} - True if the error message is displayed, false otherwise.
     */
    async isErrorDisplayed() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();

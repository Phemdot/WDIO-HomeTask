
const basePage = require('./basePage');

class loginPage extends basePage{

/**
     * define selectors using getter methods
     */
 get inputEmail () {
    return $('input[name="email"]');
}

get inputPassword () {
    return $('input[name="password"]');
}

get btnSubmit () {
    return $('button[type="submit"] div');
}

get usernameLabel () {
    return $('h1[class="mr-6"]');
}

get helpButton () {
    return $('button.MuiButton-root:nth-child(1)');
}

get acceptCookieBanner () {
    return $('[id="CybotCookiebotDialogBodyButtonAccept"]');
}

get welcomeModal () {
    return $('[class="deel-ui__whats-new-popup__icon-button"]');
}


/**
 * a method to encapsule automation code to interact with the page
 * e.g. to login using username and password
 */
async login (email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
    await this.welcomeModal.waitForClickable({ timeout: 30000 });
    await this.welcomeModal.click();
    await this.acceptCookieBanner.waitForClickable({ timeout: 30000 });
    await this.acceptCookieBanner.click();
}

/**
 * overwrite specific options to adapt it to page object
 */
open () {
    return super.open('login');
}

}

module.exports = new loginPage();

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
    return $('#CybotCookiebotDialogBodyButtonAccept');
}

get welcomeModal () {
    return $('[class="deel-ui__icon-close-1"]');
}
/**
 * a method to encapsule automation code to interact with the page
 * e.g. to login using username and password
 */
async login (email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
    await this.acceptCookieBanner.click();
    await this.welcomeModal.click();
}

/**
 * overwrite specific options to adapt it to page object
 */
open () {
    return super.open('login');
}

}

module.exports = new loginPage();
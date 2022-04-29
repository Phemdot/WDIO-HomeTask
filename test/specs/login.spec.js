const loginPage = require('../pageobjects/loginPage');
const loginData = require('../testdata/logindata');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login(loginData.email, loginData.password);
        await expect(loginPage.usernameLabel).toHaveTextContaining('Femi');
        await expect(loginPage.helpButton).toBeClickable();
        
    });

});
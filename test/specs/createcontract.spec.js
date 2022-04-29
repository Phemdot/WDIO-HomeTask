const createContractPage = require('../pageobjects/createContractPage');
const loginPage = require('../pageobjects/loginPage');
const createContractData = require('../testdata/createcontractdata');
const loginData = require('../testdata/logindata');



describe('Create A Contract', () => {
    it('create a fixed contract', async () => {
        await loginPage.open();
        await loginPage.login(loginData.email, loginData.password);
        await createContractPage.clickOnCreateContract();
        await createContractPage.selectFixedRateContract();
        await createContractPage.fillContractName(createContractData.contractname);
        await createContractPage.selectCountry(createContractData.contractorresidence);
        await createContractPage.selectState(createContractData.contractorstate);
        await createContractPage.enterJobTitle(createContractData.jobtitle);
        await createContractPage.selectJobLevel(createContractData.level);
        await createContractPage.defineScopeOfWork(createContractData.scope);
        await createContractPage.selectContractStartDate();
        await createContractPage.clickOnNextButton();
        await createContractPage.choosePaymentCurrency(createContractData.currency);
        await createContractPage.enterPaymentRate(createContractData.rate);
        await createContractPage.choosePaymentFrequency(createContractData.frequency);
        await createContractPage.clickOnNextButton();
        await createContractPage.clickOnNextButton();
        await createContractPage.clickOnNextButton();
        //await createContractPage.submitContract();


        
    });

});
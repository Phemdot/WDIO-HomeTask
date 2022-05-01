
const loginPage = require('./loginPage');
const createContractData = require('../testdata/createcontractdata')

class createContractPage{

    get createContractButton() {
        return $('[class="anchor sidebar-menu-link"][href="/create"]');
    }

    get fixedRateContract() {
        return $('#root > div:nth-child(2) > div.sidebar-space > div > div.row > div:nth-child(1) > a > div > div > div.deel-ui__stack.deel-ui__stack_vertical.deel-ui__stack_with-spacing > div > h6');
    }

    get contractName() {
        return $('input[name="name"]');
    }

    get h1() {
        return $('#root > div:nth-child(2) > div.sidebar-space > div > div.mb-10 > div.editable-text > h1');
    }

    get contratorTaxResidence () {
        return $('[data-qa="contractor-tax-residence"][class="input-container"]');
    }

    get contratorTaxResidenceText () {
        return $('input[id="react-select-3-input"]');
    }

    get contratorStateResidence () {
        return $('[data-qa="contractor-tax-residence-province"]');
    }

    get contratorStateResidenceText () {
        return $('#react-select-5-input');
    }

    get jobTitle () {
        return $('input[name="jobTitle"]');
    }

    get seniorityLevel () {
        return $('[data-qa="selector-seniority-level"]');
    }
    get seniorityLevelText () {
        return $('#react-select-4-input');
    }

    get scopeofWork () {
        return $('textarea[name="scope"]');
    }

    get startDate () {
        return $('input[name="effectiveDate"]');
    }

    get paymentCurrency () {
        return $('[data-qa="currency-select"]');
    }

    get paymentCurrencyText () {
        return $('#react-select-6-input');
    }

    get setRate () {
        return $('input[name="rate"]');
    }

    get genInfoNextButton () {
        return $('button[type="submit"]');
    }

    get paymentFrequency () {
        return $('[data-qa="cycle-select"][class="input-container"]');
    }

    get paymentFrequencyText () {
        return $('#react-select-7-input');
    }

    get invoicingCheckbox () {
        return $('.deel-ui__checkbox__shadow');
    }

    get paymentDue () {
        return $('[data-qa="payments-occur"][class="input-container"]');
    }

    get invoicingCycleEnd () {
        return $('[data-qa="work-cycle-end"][class="input-container"]');
    }

    get firstPaymentDate () {
        return $('[data-qa="selector-first-payment-date"]');
    }

    get nextButton () {
        return $('[data-qa="next"]');
    }

    get submitContractButton () {
        return $('[data-qa="create-contract"]');
    }

    get reviewContractButton () {
        return $('[data-qa="review-sign"]');
    }

    get signContractButton () {
        return $('[data-qa="agree-sign"]');
    }

   


    async clickOnCreateContract(){
        await this.createContractButton.waitForClickable({ timeout: 10000 });
        await this.createContractButton.click();
        await expect(browser).toHaveUrlContaining('create');
    }

    async selectFixedRateContract(){
        await this.fixedRateContract.waitForClickable({ timeout: 10000 });
        await this.fixedRateContract.click();
    }

    async fillContractName(name){
        await this.contractName.waitForClickable({ timeout: 10000 });
        await this.contractName.setValue(name);
    }

    async selectCountry(country){ 
       await this.contratorTaxResidence.click();
       await this.contratorTaxResidenceText.setValue(country);
       await browser.keys("Enter");
        
    }

    async selectState(state){
        await this.contratorStateResidence.click();
        await this.contratorStateResidenceText.setValue(state);
        await browser.keys("Enter");
    }

    async enterJobTitle(name){
        await this.jobTitle.setValue(name);
    }

    async selectJobLevel(level){
        await this.seniorityLevel.click();
        await this.seniorityLevelText.setValue(level);
        await browser.keys("Enter");
    }

    async defineScopeOfWork(text){
        await this.scopeofWork.setValue(text);
    }

    async selectContractStartDate(){
        await this.startDate.click();
        await browser.keys("ArrowLeft");
        await browser.keys("Enter");


        
    }

    async choosePaymentCurrency(currency){
        await this.paymentCurrency.click();
        await this.paymentCurrencyText.setValue(currency);
        await browser.keys("Enter");

    }

    async choosePaymentFrequency(frequency){
        await this.paymentFrequency.click();
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
    }

    async enterPaymentRate(rate){
        await this.setRate.setValue(rate);
    }

    async choosePaymentDate(){

    }

    async clickOnNextButton(){
        await this.nextButton.waitForDisplayed({timeout: 30000});
        await this.nextButton.scrollIntoView();
        await this.nextButton.click();
    }

    async submitContract(){
        await this.submitContractButton.click();
    }

    async reviewContract(){
        await this.reviewContractButton.waitForDisplayed({timeout: 30000});
        await this.reviewContractButton.click();
    }

    async signContract(){
        await this.signContractButton.waitForDisplayed({timeout: 30000});
        await this.signContractButton.click();
        await expect(browser).toHaveUrlContaining('contract');
        
        
    }

    



}

module.exports = new createContractPage();
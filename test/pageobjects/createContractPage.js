
const loginPage = require('./loginPage');

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

    get contratorTaxResidence () {
        return $('[data-qa="contractor-tax-residence"][class="input-container"]');
    }

    get contratorStateResidence () {
        return $('[data-qa="contractor-tax-residence-province"]');
    }

    get jobTitle () {
        return $('input[name="jobTitle"]');
    }

    get seniorityLevel () {
        return $('[class="input-container"][data-qa="selector-seniority-level"]');
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

    get setRate () {
        return $('input[name="rate"]');
    }

    get genInfoNextButton () {
        return $('button[type="submit"]');
    }

    get paymentFrequency () {
        return $('[data-qa="cycle-select"][class="input-container"]');
    }

    get paymentFrequency () {
        return $('[data-qa="cycle-select"][class="input-container"]');
    }

    get invoicingCheckbox () {
        return $('.deel-ui__checkbox__shadow');
    }

    get paymentDue () {
        return $('.[data-qa="payments-occur"][class="input-container"]');
    }

    get invoicingCycleEnd () {
        return $('[data-qa="work-cycle-end"][class="input-container"]');
    }

    get paymentDetailsNextButton () {
        return $('[data-qa="next"][type="submit"]');
    }

    get firstPaymentDate () {
        return $('[data-qa="selector-first-payment-date"]');
    }

    get defineDateNextButton () {
        return $('[data-qa="next"][type="submit"]');
    }

    get benefitsNextButton () {
        return $('[data-qa="next"]');
    }

    get nextButton () {
        return $('[data-qa="next"]');
    }

    get submitContractButton () {
        return $('[data-qa="create-contract"]');
    }


    async clickOnCreateContract(){
        await this.createContractButton.waitForClickable({ timeout: 10000 });
        await this.createContractButton.click();
    }

    async selectFixedRateContract(){
        await this.fixedRateContract.waitForClickable({ timeout: 10000 });
        await this.fixedRateContract.click();
    }

    async fillContractName(name){
        await this.contractName.setValue(name);
    }

    async selectCountry(country){
        await this.contratorTaxResidence.selectByVisibleText(country);
    }

    async selectState(state){
        await this.contratorStateResidence.selectByVisibleText(state);
    }

    async enterJobTitle(name){
        await this.jobTitle.setValue(name);
    }

    async selectJobLevel(level){
        await this.seniorityLevel.selectByVisibleText(level);
    }

    async defineScopeOfWork(text){
        await this.scopeofWork.setValue(text);
    }

    async selectContractStartDate(){
        
    }

    async choosePaymentCurrency(currency){
        await this.paymentCurrency.selectByVisibleText(currency);

    }

    async choosePaymentFrequency(frequency){
        await this.paymentFrequency.selectByVisibleText(frequency);
    }

    async enterPaymentRate(rate){
        await this.setRate.setValue(rate);
    }

    async choosePaymentDate(){

    }

    async clickOnNextButton(){
        await this.nextButton.click();
    }

    async submitContract(){
        await this.submitContractButton.click();
    }

}

module.exports = new createContractPage();
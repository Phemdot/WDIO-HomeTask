/**
* base page object containing all methods, selectors and functionality
* that is shared across all page objects
*/


module.exports = class basePage{
    open (path) {
        browser.maximizeWindow();
        return browser.url(`https://app.deel.training/${path}`)
        
    }
}
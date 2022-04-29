# README

This repository stores wdio test framework for web application .

It uses modern languages, tools, and libraries that are well-known in the testing world:

- [JavaScript](https://www.javascript.com/): The world's most popular programming language of the Web.
- [WDIO](https://webdriver.io/): a popular JavaScript test automation framework that runs on Node. js
- [Mocha](https://mochajs.org/): a feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun.


## Development environment

[Visual Studio Code](https://code.visualstudio.com/) is the recommended code editor, because:

- It's free;
- Available in Windows, Linux and macOS;
- Great extensions for Cypress, and Docker;
- This project already includes all the configurations for a productive environment.

IntelliJ WebStorm, or IDEA Ultimate, are also good choices, but are paid, so it's a matter of choice!

### Visual Studio Code

Start by downloading and installing Visual Studio Code in your machine.

Then install the following extensions:

- [Node.js](https://nodejs.org/en/download/)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Java8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)

## Running the tests

Start by running `npm install`, using the provided `nvmw` command:

    ./nvmw npm install

Then you can open the WDIO Test Runner to execute the tests, and see them running:

    ./nvmw npm run wdio


This repository also contains a `Dockerfile`, so tests will run in [Docker]

## Writing new tests

Test cases must go into the `test/specs` folder, with the `.js` extension. The plugins in VS Code should provide syntax highlighting and step completion, making the writing of test easier.

Page object that are meant to be used by any test, must go into the `WDIO/test/pageobjects/` folder, with the `.js` (JavaScript) extension.

Test data must go into the `test/testdata` folder, with the `.js` extension. This can also be provided as json files.

You can open the WDIO Test Runner (`./nvmw npm run wdio`) to see the tests being executed every time you save a test.
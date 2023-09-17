import LoginPage from '../PatternObject/login.page.copy.js'; // Update the path accordingly

import {Given, When, Then,} from "cypress-cucumber-preprocessor/steps";

Given('I open login page', () => {
    LoginPage.visit();
});

When('I submit login', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
});

Then('I should see homepage', () => {
    cy.get('#account_summary_tab', { timeout: 10000 }).should('be.visible');
});
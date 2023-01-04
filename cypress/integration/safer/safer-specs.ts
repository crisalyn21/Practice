/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";
beforeEach(() => {
  cy.visit("http://web-staging.aonewallet.com/");
});

//Admin sees Main Page
Then(`Admin sees welcome banner`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/betvision/images/welcome.jpg"]`
  ).should("exist");
});

//Admin sees Safer Gaming page

When(`Admin clicks "Safer Gaming"`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.get(`:nth-child(5) > li > .chakra-text`, { timeout: 20000 }).click();
});

Then(`Admin should be routed to Safer Gaming page`, () => {
  cy.get(
    `[src="https://static.nexiux.io/images/@sites/@commons/images/logo/betvision.png"]`
  ).should("exist");
  cy.url().should("include", "/responsible-gambling");
});

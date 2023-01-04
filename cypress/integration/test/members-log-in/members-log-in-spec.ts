/// <reference types="cypress" />
import { And, When, Then } from "cypress-cucumber-preprocessor/steps";
beforeEach(() => {
  cy.visit("http://web-staging.aonewallet.com/");
});
//Member successfully log in

When(` user enters username`, () => {
  cy.get(`div>.chakra-image`).should("exist");
  cy.contains("button", "Login").click();
  cy.get("[placeholder=Username]").type("k456");
});
And(`user enters password`, () => {
  cy.get('[data-testid="toggle-password"] > .chakra-icon');
  cy.get("[type=password]").type("password");
});
And(`user clicks "log in" button`, () => {
  cy.get("[data-testid='toggle-password']").click();
  cy.get(".chakra-checkbox__label").contains("Remember me").click();
  cy.contains("button", "Login").click();
});

Then(`prompt message displayed`, () => {
  // cy.get(".chakra-alert__title").should("exist");
  cy.get('[data-testid="login-form"] > .chakra-button');
});

// Can't login using incorrect password
When(`user enters username`, () => {
  cy.contains("button", "Login").click();
  cy.get("[placeholder=Username]").type("k456");
});
And(`user enters incorrect password`, () => {
  cy.get("[type=password]").type("incorrectpassword");
});
And(`user clicks "log in" button`, () => {
  cy.get("[data-testid='toggle-password']").click();
  cy.contains("button", "Login").click();
});

Then(`prompt message displayed`, () => {
  cy.get(".chakra-alert__title").should("exist");
});

// Can't login using incorrect username

When(`user enters incorrect username`, () => {
  cy.contains("button", "Login").click();
  cy.get("[placeholder=Username]").type("incorrect");
});

And(`user enters  password1`, () => {
  cy.get('[data-testid="toggle-password"] > .chakra-icon');
  cy.get("[type=password]").click();
  cy.get("[type=password]").type("password");
});
And(`user clicks "log in" button`, () => {
  cy.get("[data-testid='toggle-password']").click();
  cy.get(".chakra-checkbox__label").contains("Remember me").click();
  cy.contains("button", "Login").click();
});

Then(`prompt message displayed`, () => {
  cy.get('[data-testid="login-form"] > .chakra-button');
  cy.get(".chakra-alert__title").should("exist");
});

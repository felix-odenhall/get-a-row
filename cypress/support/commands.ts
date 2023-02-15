/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    setUpGame(value: string): Chainable<Element>;
  }
}

Cypress.Commands.add("setUpGame", (username: string) => {
  cy.get("[data-cy=userInput]").type(`${username}`);
  cy.get("[data-cy=submitButton]").click();
  cy.get("[data-cy=pickTaskList]>li").eq(0).click();
  cy.get("[data-cy=pickTaskList]>li").eq(1).click();
  cy.get("[data-cy=pickTaskList]>li").eq(2).click();
  cy.get("[data-cy=pickTaskList]>li").eq(3).click();
  cy.get("[data-cy=pickTaskList]>li").eq(4).click();
  cy.get("[data-cy=pickTaskList]>li").eq(5).click();
  cy.get("[data-cy=pickTaskList]>li").eq(6).click();
  cy.get("[data-cy=pickTaskList]>li").eq(7).click();
  cy.get("[data-cy=pickTaskList]>li").eq(8).click();
});

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('setUpGame', (username) => {
//     cy.get("[data-cy=userInput]").type(`${username}`);
//     cy.get("[data-cy=submitButton]").click();
//     cy.get("[data-cy=pickTaskList]>li").eq(0).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(1).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(2).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(3).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(4).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(5).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(6).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(7).click();
//     cy.get("[data-cy=pickTaskList]>li").eq(8).click();
//     cy.get("[data-cy=startGameButton]").click();
// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// declare namespace Cypress {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//     interface Chainable<Subject> {
//       setupMocks(country: TCountry): void;
//     }
//   }

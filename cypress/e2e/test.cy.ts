describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("successfully loads", () => {
    cy.get("[data-cy=userInput]").should("be.visible");
    cy.get("[data-cy=submitButton]").should("be.visible");
  });
  it("Should only move on when a username is added", () => {
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("exist");
    cy.get("[data-cy=submitButton]").should("exist");
    cy.get("[data-cy=userInput]").type("MyUsername1");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("not.exist");
    cy.get("[data-cy=submitButton]").should("not.exist");
  });
});

describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("successfully loads", () => {
    cy.get("[data-cy=user-input]").should("be.visible");
    cy.get("[data-cy=submit-button]").should("be.visible");
  });
  it("Should only move on when a username is added", () => {
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=user-input]").should("exist");
    cy.get("[data-cy=submit-button]").should("exist");
    cy.get("[data-cy=user-input]").type("MyUsername1");
    cy.get("[data-cy=submit-button]").click();
    cy.get("[data-cy=user-input]").should("not.exist");
    cy.get("[data-cy=submit-button]").should("not.exist");
  });
});

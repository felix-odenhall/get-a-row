describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=user-input]").should("be.visible");
    cy.get("[data-cy=submit-button]").should("be.visible");
  });
});

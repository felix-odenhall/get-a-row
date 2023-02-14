describe("Enter username", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").should("be.visible");
    cy.get("[data-cy=submitButton]").should("be.visible");
    cy.get("[data-cy=pickTasksContainer]").should("not.exist");
    cy.get("[data-cy=pickTaskList]").should("not.exist");
    cy.get("[data-cy=usernameError]").should("not.exist");
  });

  it("should display userInput and submitButton if no username is added", () => {
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("exist");
    cy.get("[data-cy=submitButton]").should("exist");
  });

  it("should not display userInput and submitButton if a valid username is added", () => {
    cy.get("[data-cy=userInput]").should("exist");
    cy.get("[data-cy=submitButton]").should("exist");
    cy.get("[data-cy=userInput]").type("myUsername");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("not.exist");
    cy.get("[data-cy=submitButton]").should("not.exist");
  });
});

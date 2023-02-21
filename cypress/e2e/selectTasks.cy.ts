describe("Select tasks", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").type("user123");
    cy.get("[data-cy=submitButton]").click();
  });
  it("should be able to select and unselect tasks", () => {
    cy.get("[data-cy=pickTasksContainer]").should("be.visible");
    cy.get("[data-cy=pickTaskList]>li").should("have.length.gt", 9);
    cy.get("[data-cy=pickTasksContainer]>p").contains("Select 9 tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Select 8 more tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Select 9 tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(0).click();
    cy.get("[data-cy=pickTaskList]>li").eq(1).click();
    cy.get("[data-cy=pickTaskList]>li").eq(12).click();
    cy.get("[data-cy=pickTaskList]>li").eq(9).click();
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Select 4 more tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTaskList]>li").eq(12).click();
    cy.get("[data-cy=pickTaskList]>li").eq(1).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Select 7 more tasks");
  });
});

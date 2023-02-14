describe("Start game", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").type("user123");
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
  it("should be able to start game when 9 tasks are picked", () => {
    cy.get("[data-cy=pickTasksContainer]>p").should("not.exist");
    cy.get("[data-cy=startGameButton]").should("be.visible");
    cy.get("[data-cy=startGameButton]").click();
    cy.get("[data-cy=pickTasksContainer]").should("not.exist");
    cy.get("[data-cy=usersGameBoardLabel]").should("be.visible");
    cy.get("[data-cy=usersGameBoardLabel]").contains("user123");
    cy.get("[data-cy=bingoBoard]").should("be.visible");
    cy.get("[data-cy=bingoTile]").should("be.visible");
    cy.get("[data-cy=bingoTile]").should("have.length", 9);
  });
});

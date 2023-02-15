describe("Restart the game when having bingo", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.setUpGame("user123");
    cy.get("[data-cy=startGameButton]").click();
    cy.get("[data-cy=bingoTile]").eq(0).click();
    cy.get("[data-cy=bingoTile]").eq(1).click();
    cy.get("[data-cy=bingoTile]").eq(2).click();
  });
  it("should show bingo when getting 3 in a row", () => {
    cy.get("[data-cy=bingoBoard]").should("not.exist");
    cy.get("[data-cy=bingoText]").should("be.visible");
    cy.get("[data-cy=restartGame]").should("be.visible");
    cy.get("[data-cy=restartGame]").click();
    cy.get("[data-cy=bingoText]").should("not.exist");
    cy.get("[data-cy=usersGameBoardLabel]").should("be.visible");
    cy.get("[data-cy=usersGameBoardLabel]").contains("user123");
    cy.get("[data-cy=bingoBoard]").should("be.visible");
    cy.get("[data-cy=bingoTile]").should("have.length", 9);
  });
});

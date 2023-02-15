describe("Get bingo when having 3 in a row", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.setUpGame("user123");
    cy.get("[data-cy=startGameButton]").click();
  });
  it("should get Bingo when having 3 in a row horizontally", () => {
    cy.get("[data-cy=bingoTile]").eq(0).click();
    cy.get("[data-cy=bingoTile]").eq(1).click();
    cy.get("[data-cy=bingoTile]").eq(2).click();
    cy.get("[data-cy=bingoBoard]").should("not.exist");
    cy.get("[data-cy=bingoText]").should("be.visible");
  });
  it("should get Bingo when having  3 in a row vertically", () => {
    cy.get("[data-cy=bingoTile]").eq(0).click();
    cy.get("[data-cy=bingoTile]").eq(3).click();
    cy.get("[data-cy=bingoTile]").eq(6).click();
    cy.get("[data-cy=bingoBoard]").should("not.exist");
    cy.get("[data-cy=bingoText]").should("be.visible");
  });
  it("should get Bingo when having 3 in a row diagonally", () => {
    cy.get("[data-cy=bingoTile]").eq(4).click();
    cy.get("[data-cy=bingoTile]").eq(6).click();
    cy.get("[data-cy=bingoTile]").eq(2).click();
    cy.get("[data-cy=bingoBoard]").should("not.exist");
    cy.get("[data-cy=bingoText]").should("be.visible");
  });
  it("should get Bingo when having 3 in a row when having more than 3 tiles clicked", () => {
    cy.get("[data-cy=bingoTile]").eq(1).click();
    cy.get("[data-cy=bingoTile]").eq(4).click();
    cy.get("[data-cy=bingoTile]").eq(6).click();
    cy.get("[data-cy=bingoTile]").eq(8).click();
    cy.get("[data-cy=bingoTile]").eq(3).click();
    cy.get("[data-cy=bingoTile]").eq(2).click();
    cy.get("[data-cy=bingoBoard]").should("not.exist");
    cy.get("[data-cy=bingoText]").should("be.visible");
  });
});

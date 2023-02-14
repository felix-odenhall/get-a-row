describe("Visit the login page", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should successfully loads", () => {
    cy.get("[data-cy=userInput]").should("be.visible");
    cy.get("[data-cy=submitButton]").should("be.visible");
    cy.get("[data-cy=pickTasksContainer]").should("not.exist");
    cy.get("[data-cy=pickTaskList]").should("not.exist");
  });
});

describe("Enter username", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").should("be.visible");
    cy.get("[data-cy=submitButton]").should("be.visible");
    cy.get("[data-cy=pickTasksContainer]").should("not.exist");
    cy.get("[data-cy=pickTaskList]").should("not.exist");
  });

  it("should not display input field and Add name-button once a username is added", () => {
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("exist");
    cy.get("[data-cy=submitButton]").should("exist");
    cy.get("[data-cy=userInput]").type("user123");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("not.exist");
    cy.get("[data-cy=submitButton]").should("not.exist");
  });
});

describe("Pick tasks", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").type("user123");
    cy.get("[data-cy=submitButton]").click();
  });
  it("should be able to select and unselect tasks when a username is added", () => {
    cy.get("[data-cy=pickTasksContainer]").should("be.visible");
    cy.get("[data-cy=pickTaskList]>li").should("have.length.gt", 9);
    cy.get("[data-cy=pickTasksContainer]>p").contains("Pick 9 tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Pick 8 more tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Pick 9 tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(0).click();
    cy.get("[data-cy=pickTaskList]>li").eq(1).click();
    cy.get("[data-cy=pickTaskList]>li").eq(12).click();
    cy.get("[data-cy=pickTaskList]>li").eq(9).click();
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Pick 4 more tasks");
    cy.get("[data-cy=pickTaskList]>li").eq(2).click();
    cy.get("[data-cy=pickTaskList]>li").eq(12).click();
    cy.get("[data-cy=pickTaskList]>li").eq(1).click();
    cy.get("[data-cy=pickTasksContainer]>p").contains("Pick 7 more tasks");
  });
});

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

describe("Get bingo when having 3 in a row", () => {
  beforeEach(() => {
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

describe("Restart the game when having bingo", () => {
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

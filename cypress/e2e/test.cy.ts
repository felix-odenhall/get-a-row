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

describe("Enter a username", () => {
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
    cy.get("[data-cy=userInput]").type("MyUsername1");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=userInput]").should("not.exist");
    cy.get("[data-cy=submitButton]").should("not.exist");
  });
});

describe("Pick tasks", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").type("MyUsername1");
    cy.get("[data-cy=submitButton]").click();
  });
  it("Should be able to select and unselect tasks when a username is added", () => {
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
  const username = "Username";
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=userInput]").type(`${username}`);
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
  it("Should be able to start game when 9 tasks are picked", () => {
    cy.get("[data-cy=pickTasksContainer]>p").should("not.exist");
    cy.get("[data-cy=startGameButton]").should("be.visible");
    cy.get("[data-cy=startGameButton]").click();
    cy.get("[data-cy=pickTasksContainer]").should("not.exist");
    cy.get("[data-cy=usersGameBoardLabel]").should("be.visible");
    cy.get("[data-cy=usersGameBoardLabel]").contains(`${username}`);
    cy.get("[data-cy=bingoBoard]").should("be.visible");
    cy.get("[data-cy=bingoTile]").should("be.visible");
    cy.get("[data-cy=bingoTile]").should("have.length", 9);
  });
});

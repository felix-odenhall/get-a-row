describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000"); // change URL to match your dev URL
    //cy.get("nav").should("be.visable");
    cy.get("input").should("not.have.value", "Jane");
  });
});

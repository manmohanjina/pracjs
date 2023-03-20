describe("Testing the counter application", () => {
  //the first thing we might want to check is that the application is woking or not;
  //without actully chagning the existing database we have to test our application;

  it("should load up the application", () => {
    cy.visit("http://localhost:3000");
  });

  //counter variable should be on the ui;
  //we can give testid's to our components to verify that it is present in the dom tree or not

  it("should show  counter value set in interceptor", () => {
    //we should not modify the db, but we can intercept the req made to the db;
    cy.intercept("GET", "http://localhost:3000/counter", { count: 200 }).as(
      "countReq"
    );
    cy.visit("http://localhost:3000");
    cy.wait("@countReq");
    cy.get("[data-testid=count-div]").should("be.visible");
    cy.get("[data-testid=count-div]").should("have.text", "count:200");

    //the value of count should be dynamic;
    //or we can send the fake data ;

    // cy.get("[data-testid=count-div]").should("have.text", "count:200");
  });

  //btn should be also visible on the ui;

  it.should("increment the count on clicking the btn", () => {
    cy.intercept("GET", "http://localhost:3001/counter", { count: 200 }).as(
      "vari"
    );

    cy.visit("http://localhost:3001/counter");

    cy.wait("@vari");
  });

  //it should mount up on the ui

  //increasing the todo icrease the count variable
});

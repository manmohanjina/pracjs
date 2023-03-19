describe("Testing the counter application", () => {
  //the first thing we might want to check is that the application is woking or not;
  //without actully chagning the existing database we have to test our application;

  it("should load up the application", () => {
    cy.visit("http://localhost:3001/");
  });

  //counter variable should be on the ui;
  //we can give testid's to our components to verify that it is present in the dom tree or not

  it("should show 0 on first render of our app", () => {
    //we should not modify the db, but we can intercept the req made to the db;

    cy.intercept("GET", "http://localhost:3001/counter", { count: 200 }).as(
      "counterReq"
    );
    cy.visit("http://localhost:3001/counter");
    cy.wait("@counterReq");

    cy.get("[data-testid=count-div]").should("be.visible");
    //the value of count should be dynamic;
    //or we can send the fake data ;

    cy.get("[data-testid=count-div]").should("have.text", "count:200");
  });

  //btn should be also visible on the ui;

  it.skip("btn is there or not ", () => {
    cy.visit("http://localhost:3000/counter");
    cy.get("[data-testid=btncount]").should("be.visible");
    cy.get("[data-testid=btncount]").click();
  });

  //it should mount up on the ui

  //increasing the todo icrease the count variable
});

describe("E2E testing", () => {
  it("should test entire behaviour of the application ", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    //check if page has this text then click on it
    cy.contains("Star Destroyer").click();

    //then there should be items id on the url
    cy.url().should("include", "/3");

    //check it is really that items detail page
    cy.get('[data-cy="starship-name"]').contains("Star Destroyer");

    // try back button
    cy.get('[data-cy="back-button"]').click();

    // type "star" on search field
    cy.get('[data-cy="search-field"]').type("star");

    // click on search button and wait for SSR on that page
    cy.get('[data-cy="search-button"]').click().wait(500);

    // click on next page button and wait for SSR for 2nd page
    cy.get('[data-cy="go-next-page"]').click().wait(500);

    //is it really page 2
    cy.url().should("include", "page=2");

    // after searcing "star" should be in the url
    cy.url().should("include", "search=star");

    // page counter must be 2
    cy.get('[cy-data="page-counter"]').should("contain", "Sayfa:2");

    // in page 2 there should be this ship
    cy.contains("Banking clan frigte"); // ship name

    // change the language of the application
    cy.contains("English").click();

    // url must include en path
    cy.url().should("include", "/en");
  });
});

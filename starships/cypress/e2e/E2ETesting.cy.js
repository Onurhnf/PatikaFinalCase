describe("E2E testing", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.contains("Star Destroyer").click();

    cy.url().should("include", "/3");

    cy.get('[data-cy="starship-name"]').contains("Star Destroyer");

    cy.get('[data-cy="back-button"]').click();

    cy.get('[data-cy="search-field"]').type("star");

    cy.get('[data-cy="search-button"]').click().wait(500);

    cy.get('[data-cy="go-next-page"]').click().wait(500);

    cy.url().should("include", "page=2");

    cy.url().should("include", "search=star");

    cy.get('[cy-data="page-counter"]').should("contain", "Sayfa:2");

    cy.contains("Banking clan frigte");

    cy.contains("English").click();

    cy.url().should("include", "/en");
  });
});

describe("index", () => {
  beforeEach(() => {
    const { PORT = 3000 } = process.env;
    cy.visit(`http://localhost:${PORT}`);
    cy.waitForReact();
  });

  it("should have links in the navigation bar", () => {
    cy.react("Nav").should("exist");
    cy.react("Nav Link").should("have.length", 3);
  });

  it("should go to the staff page when that link is clicked", () => {
    cy.get("header a").eq(1).should("have.text", "All Staff");
    cy.get("header a").eq(1).click();
    cy.contains("Our Staff");
  });

  it("should go to the pets page when that link is clicked", () => {
    cy.get("header a").eq(2).should("have.text", "All Pets");
    cy.get("header a").eq(2).click();
    cy.contains("See All Cats");
  });

  it("should go to the home page when that link is clicked", () => {
    cy.get("header a").eq(0).should("have.text", "Northwest Animal Hospital");
    cy.get("header a").eq(0).click();
    cy.contains("Sign up for our newsletter!");
  });
});

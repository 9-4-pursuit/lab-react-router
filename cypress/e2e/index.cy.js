describe("index", () => {
  beforeEach(() => {
    const { PORT = 3000 } = process.env;
    cy.visit(`http://localhost:${PORT}`);
    cy.waitForReact();
  });

  it("should have all of the relevant components", () => {
    cy.react("Nav").should("exist");
    cy.react("Home").should("exist");
    cy.react("Highlights").should("exist");
    cy.react("NewsletterForm").should("exist");
    cy.react("Footer").should("exist");
  });

  it("does not show non-Home components", () => {
    cy.react("PetsList").should("not.exist");
    cy.react("StaffList").should("not.exist");
  });
});

describe("/staff", () => {
  beforeEach(() => {
    const { PORT = 3000 } = process.env;
    cy.visit(`http://localhost:${PORT}/staff`);
    cy.waitForReact();
  });

  it("should have all of the relevant components", () => {
    cy.react("Nav").should("exist");
    cy.react("StaffList").should("exist");
    cy.react("Staffer").should("exist");
    cy.react("Footer").should("exist");
  });

  it("does not show non-Home components", () => {
    cy.react("Home").should("not.exist");
    cy.react("PetsList").should("not.exist");
  });
});

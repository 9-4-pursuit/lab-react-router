const { PORT = 3000 } = process.env;

describe("/pets", () => {
  before(() => {
    cy.visit(`http://localhost:${PORT}/pets`);
    cy.waitForReact();
  });

  it("should redirect to `/pets/cats`", () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/pets/cats");
    });
  });

  it("should have all of the relevant components", () => {
    cy.visit(`http://localhost:${PORT}/pets/dogs`);
    cy.waitForReact();
    cy.react("Nav").should("exist");
    cy.react("PetsList").should("exist");
    cy.react("PetsListNav").should("exist");
    cy.react("Footer").should("exist");
  });

  it("should have a working link to the dogs page", () => {
    cy.get(".pets-nav a").eq(1).should("contain.text", "Dogs");
    cy.get(".pets-nav a").eq(1).click();
    cy.waitForReact();

    cy.react("PetsList").should("contain.text", "🐕 Bandit");
  });

  it("should have a working link to the cats page", () => {
    cy.get(".pets-nav a").eq(0).should("contain.text", "Cats");
    cy.get(".pets-nav a").eq(0).click();
    cy.waitForReact();

    cy.react("PetsList").should("contain.text", "🐈 Quincy");
  });

  it("does not show non-Home components", () => {
    cy.react("Home").should("not.exist");
    cy.react("StaffList").should("not.exist");
  });
});

context("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains project name", () => {
    cy.get("nav.navbar .navbar-brand").contains("Thuringian Field Names");
  });
});

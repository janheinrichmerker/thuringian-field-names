context("Structure", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has exactly one navigation bar", () => {
    cy.get("#root > nav.AppNav").should("have.length", 1);
  });

  it("contains project name", () => {
    cy.get("#root > nav.AppNav")
      .get(".navbar-brand")
      .contains(/Thuringian Field Names/)
      .should("have.length", 1);
  });

  it("has search bar", () => {
    cy.get("#root > nav.AppNav")
      .get("form")
      .within(() => {
        cy.get("input")
          .invoke("attr", "placeholder")
          .should("match", /.*Search.*/);
        cy.get("svg.fa-search").should("have.length", 1);
      });
  });

  it("has exactly one content container", () => {
    cy.get("#root > .container").should("have.length", 1);
  });

  it("has exactly one footer", () => {
    cy.get("#root > nav.AppFooter").should("have.length", 1);
  });

  it("contains copyright information", () => {
    cy.get("#root > nav.AppFooter")
      .get(".navbar-text")
      .contains(/Copyright/)
      .should("have.length", 1);
  });

  it("has imprint link", () => {
    cy.get("#root > nav.AppFooter")
      .get(".nav-link")
      .contains(/Imprint/)
      .should("have.length", 1);
  });

  it("has privacy policy link", () => {
    cy.get("#root > nav.AppFooter")
      .get(".nav-link")
      .contains(/Privacy/)
      .should("have.length", 1);
  });

  it("has language selector", () => {
    cy.get("#root > nav.AppFooter")
      .get(".nav-link")
      .contains(/Language/)
      .should("have.length", 1);
  });

  it("has language links", () => {
    cy.get("#root > nav.AppFooter")
      .get(".nav-link")
      .contains(/Language/)
      .should("have.length", 1)
      .click()
      .parent()
      .get(".dropdown-menu")
      .within(() => {
        cy.get(".dropdown-item")
          .contains(/English/)
          .should("have.length", 1);
        cy.get(".dropdown-item")
          .contains(/German/)
          .should("have.length", 1);
      });
  });

  it("selected language is English", () => {
    cy.get("#root > nav.AppFooter")
      .get(".nav-link")
      .contains(/Language/)
      .click()
      .parent()
      .get(".dropdown-menu")
      .within(() => {
        cy.get(".dropdown-item")
          .contains(/English/)
          .should("have.class", "active");
        cy.get(".dropdown-item")
          .contains(/German/)
          .should("not.have.class", "active");
      });
  });

  it("has source code link", () => {
    cy.get("#root > nav.AppFooter")
      .get(".nav-link")
      .contains(/GitHub/)
      .should("have.length", 1)
      .should(
        "have.attr",
        "href",
        "https://github.com/heinrichreimer/thuringian-field-names/"
      );
  });
});

// Empty export needed to compile file as module.
export {};

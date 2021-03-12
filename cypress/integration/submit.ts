context("Submit", () => {
  it("redirects to account page if not logged in", () => {
    cy.visit("#/field-names/submit");
    cy.url().should("match", /#\/login$/);
  });

  function login() {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Email|Username/i)
            .siblings("input")
            .type("test");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("test");
          cy.get("button")
            .contains(/Sign in/i)
            .click();
        });
      });
    cy.url().should("match", /#\/$/);
  }

  it("doesn't redirect after login", () => {
    login();
    cy.visit("#/field-names/submit");
    cy.url().should("match", /#\/field-names\/submit$/);
  });

  it("has inputs and button", () => {
    login();
    cy.visit("#/field-names/submit")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Title/i)
            .should("have.length", 1)
            .siblings("input")
            .should("have.length", 1)
            .invoke("attr", "type")
            .should("match", /^text$/i);
          cy.get("label")
            .contains(/Type/i)
            .should("have.length", 1)
            .siblings("select")
            .should("have.length", 1)
            .within(() => {
              cy.get("option").contains(/Card/i).should("have.length", 1);
              cy.get("option")
                .contains(/Marking/i)
                .should("have.length", 1);
            });
          cy.get("label")
            .contains(/GND number/i)
            .should("have.length", 1)
            .siblings("input")
            .should("have.length", 1)
            .invoke("attr", "type")
            .should("match", /^text$/i);
          cy.get("label")
            .contains(/License/i)
            .should("have.length", 1)
            .siblings("select")
            .should("have.length", 1)
            .within(() => {
              cy.get("option")
                .contains(/CC-BY-NC-SA 4\.0/i)
                .should("have.length", 1);
              cy.get("option")
                .contains(/Unknown license/i)
                .should("have.length", 1);
            });
          cy.get("label")
            .contains(/Coordinates/i)
            .should("have.length", 1)
            .siblings(".form-row")
            .should("have.length", 1)
            .within(() => {
              cy.get("label")
                .contains(/North/i)
                .should("have.length", 1)
                .siblings("input")
                .should("have.length", 1)
                .invoke("attr", "type")
                .should("match", /^number$/i);
              cy.get("label")
                .contains(/East/i)
                .should("have.length", 1)
                .siblings("input")
                .should("have.length", 1)
                .invoke("attr", "type")
                .should("match", /^number$/i);
              cy.get("label")
                .contains(/South/i)
                .should("have.length", 1)
                .siblings("input")
                .should("have.length", 1)
                .invoke("attr", "type")
                .should("match", /^number$/i);
              cy.get("label")
                .contains(/West/i)
                .should("have.length", 1)
                .siblings("input")
                .should("have.length", 1)
                .invoke("attr", "type")
                .should("match", /^number$/i);
            });
          cy.get("button")
            .contains(/Submit/i)
            .should("have.length", 1);
        });
      });
  });

  it("rejects submit without title", () => {
    login();
    cy.visit("#/field-names/submit")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label").contains(/Type/i).siblings("select").select("Card");
          cy.get("label")
            .contains(/License/i)
            .siblings("select")
            .select("Unknown license");
          cy.get("button")
            .contains(/Submit/i)
            .click();
          cy.get("label")
            .contains(/Title/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("rejects submit with too short title", () => {
    login();
    cy.visit("#/field-names/submit")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label").contains(/Title/i).siblings("input").type("Short");
          cy.get("label").contains(/Type/i).siblings("select").select("Card");
          cy.get("label")
            .contains(/License/i)
            .siblings("select")
            .select("Unknown license");
          cy.get("button")
            .contains(/Submit/i)
            .click();
          cy.get("label")
            .contains(/Title/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("rejects submit without type", () => {
    login();
    cy.visit("#/field-names/submit")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Title/i)
            .siblings("input")
            .type("Long enough name");
          cy.get("label")
            .contains(/License/i)
            .siblings("select")
            .select("Unknown license");
          cy.get("button")
            .contains(/Submit/i)
            .click();
          cy.get("label")
            .contains(/Type/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("rejects submit without type", () => {
    login();
    cy.visit("#/field-names/submit")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Title/i)
            .siblings("input")
            .type("Long enough name");
          cy.get("label").contains(/Type/i).siblings("select").select("Card");
          cy.get("button")
            .contains(/Submit/i)
            .click();
          cy.get("label")
            .contains(/License/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("can submit with valid input", () => {
    login();
    cy.visit("#/field-names/submit")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Title/i)
            .siblings("input")
            .type("Long enough name");
          cy.get("label").contains(/Type/i).siblings("select").select("Card");
          cy.get("label")
            .contains(/License/i)
            .siblings("select")
            .select("Unknown license");
          cy.get("button")
            .contains(/Submit/i)
            .click();
        });
        cy.get(".alert")
          .contains(/Thank you/i)
          .should("have.length", 1);
      });
  });
});

// Empty export needed to compile file as module.
export {};

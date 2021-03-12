context("Card details", () => {
  it("finds details for 'Hahnengrundweg' (GND 7621022-4)", () => {
    cy.visit("#/search")
      .get("#root > .container")
      .within(() => {
        cy.get("form")
          .should("have.length", 1)
          .within(() => {
            cy.get("input").type("Hahnengrundweg");
          })
          .submit();
        cy.get(".card").within(() => {
          cy.get(".card-text")
            .contains(/7621022-4/i)
            .parents(".card")
            .within(() => {
              cy.get(".card-title")
                .contains(/Hahnengrundweg/i)
                .should("have.length", 1);
              cy.get(".card-link")
                .contains(/View details/i)
                .click();
            });
        });
        cy.url().should("match", /#\/details\/HisBest_cbu_00038239$/);
      });
  });

  it("has details for 'Hahnengrundweg' (GND 7621022-4)", () => {
    cy.visit("#/details/HisBest_cbu_00038239")
      .get("#root > .container")
      .within(() => {
        cy.get("h1,h2,h3,h4,h5,h6")
          .contains(/Hahnengrundweg/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Type/i)
          .siblings("td")
          .contains(/Card/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/GND number/i)
          .siblings("td")
          .contains(/7621022-4/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Region/i)
          .siblings("td")
          .contains(/Jena/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Location/i)
          .siblings("td")
          .within(() => {
            cy.contains(/From/i).should("have.length", 1);
            cy.contains(/To/i).should("have.length", 1);
            cy.contains(/\d+° \d+' \d+"/i).should("have.length", 1);
          });
        cy.get("th")
          .contains(/Utilisation/i)
          .siblings("td")
          .contains(/Straßenname/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Last updated/i)
          .siblings("td")
          .contains(/.+/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Created/i)
          .siblings("td")
          .within(() => {
            cy.contains(/October 11, 2018 at 9:05 AM/i).should(
              "have.length",
              1
            );
            cy.contains(/arcadmin/i).should("have.length", 1);
          });
        cy.get("th")
          .contains(/ID/i)
          .siblings("td")
          .contains(/HisBest_cbu_00038239/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/License/i)
          .siblings("td")
          .contains(/CC-BY-NC-SA 4\.0/i)
          .should("have.length", 1);
        cy.get(".leaflet-container") // Map view.
          .should("have.length", 1);
      });
  });

  it("shows error for mistyped URL", () => {
    cy.visit("#/details/Oops")
      .get("#root > .container")
      .within(() => {
        cy.get(".alert-warning,.alert-error")
          .contains(/Error/i)
          .should("have.length", 1);
      });
  });
});

// Empty export needed to compile file as module.
export {};

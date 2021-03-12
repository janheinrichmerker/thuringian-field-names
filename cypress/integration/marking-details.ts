context("Marking details", () => {
  it("finds details for 'Marolterode' (GND 7740698-9)", () => {
    cy.visit("#/search")
      .get("#root > .container")
      .within(() => {
        cy.get("form")
          .should("have.length", 1)
          .within(() => {
            cy.get("input").type("Marolterode");
          })
          .submit();
        cy.get(".card").within(() => {
          cy.get(".card-text")
            .contains(/7740698-9/i)
            .parents(".card")
            .within(() => {
              cy.get(".card-title").contains(/Marolterode/i);
              cy.get(".card-link")
                .contains(/View details/i)
                .should("have.length", 1)
                .click();
            });
        });
        cy.url().should("match", /#\/details\/HisBest_cbu_00038730$/);
      });
  });

  it("has details for 'Marolterode' (GND 7740698-9)", () => {
    cy.visit("#/details/HisBest_cbu_00038730")
      .get("#root > .container")
      .within(() => {
        cy.get("h1,h2,h3,h4,h5,h6")
          .contains(/Marolterode/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Type/i)
          .siblings("td")
          .contains(/Marking/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/GND number/i)
          .siblings("td")
          .contains(/7740698-9/i)
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
          .contains(/Last updated/i)
          .siblings("td")
          .contains(/.+/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Created/i)
          .siblings("td")
          .within(() => {
            cy.contains(/May 12, 2019 at 11:05 AM/i).should("have.length", 1);
            cy.contains(/arcadmin/i).should("have.length", 1);
          });
        cy.get("th")
          .contains(/ID/i)
          .siblings("td")
          .contains(/HisBest_cbu_00038730/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/License/i)
          .siblings("td")
          .contains(/Unknown license/i)
          .should("have.length", 1);
        cy.get("th")
          .contains(/Children/i)
          .siblings("td")
          .within(() => {
            cy.get("a").should("have.length", 65);
          });
        cy.get(".leaflet-container") // Map view.
          .should("have.length", 1);
      });
  });

  it("shows error for mistyped URL", () => {
    cy.visit("#/details/Urgh")
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

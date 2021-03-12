context("Information", () => {
  it("homepage links to project overview", () => {
    cy.visit("#/")
      .get("#root > .container")
      .within(() => {
        cy.get(".jumbotron a")
          .contains(/Learn more/i)
          .should("have.length", 1)
          .click();
      });
    cy.url().should("match", /#\/project$/);
  });

  it("project overview contains basic project information", () => {
    cy.visit("#/project")
      .get("#root > .container")
      .within(() => {
        cy.contains(/digitalize/i).should("have.lengthOf.at.least", 1);
        cy.contains(/Archive?/i).should("have.lengthOf.at.least", 1);
        cy.contains(/Friedrich-Schiller-Universität/i).should(
          "have.lengthOf.at.least",
          1
        );
        cy.contains(/GND/i).should("have.lengthOf.at.least", 1);
        cy.contains(/OpenStreetMap/i).should("have.lengthOf.at.least", 1);
        cy.contains(/amateurs/i).should("have.lengthOf.at.least", 1);
        cy.contains(/researchers/i).should("have.lengthOf.at.least", 1);
      });
  });

  it("project overview links to archive page", () => {
    cy.visit("#/project")
      .get("#root > .container")
      .within(() => {
        cy.get("a")
          .contains(/Archive/i)
          .should("have.length", 1)
          .click();
      });
    cy.url().should("match", /#\/project\/archive$/);
  });

  it("project overview links to data page", () => {
    cy.visit("#/project")
      .get("#root > .container")
      .within(() => {
        cy.get("a").contains(/Data/i).should("have.length", 1).click();
      });
    cy.url().should("match", /#\/project\/data$/);
  });

  it("project overview links to partners page", () => {
    cy.visit("#/project")
      .get("#root > .container")
      .within(() => {
        cy.get("a")
          .contains(/Partners/i)
          .should("have.length", 1)
          .click();
      });
    cy.url().should("match", /#\/project\/partners$/);
  });

  it("archive page contains information", () => {
    cy.visit("#/project/archive")
      .get("#root > .container")
      .within(() => {
        cy.contains(/1933/i).should("have.lengthOf.at.least", 1);
        cy.contains(/Landesstelle für Volkskunde/i).should(
          "have.lengthOf.at.least",
          1
        );
        cy.contains(/Material/i).should("have.lengthOf.at.least", 1);
        cy.contains(/Eckhard Meineke/i).should("have.lengthOf.at.least", 1);
        cy.contains(/Barbara Aehnlich/i).should("have.lengthOf.at.least", 1);
        cy.contains(/digital/i).should("have.lengthOf.at.least", 1);
      });
  });

  it("data page contains information", () => {
    cy.visit("#/project/data")
      .get("#root > .container")
      .within(() => {
        cy.contains(/Name/i).should("have.lengthOf.at.least", 1);
        cy.contains(/histor/i).should("have.lengthOf.at.least", 1);
        cy.contains(/GPS/i).should("have.lengthOf.at.least", 1);
        cy.contains(/GND/i).should("have.lengthOf.at.least", 1);
      });
  });

  it("partners page contains information", () => {
    cy.visit("#/project/partners")
      .get("#root > .container")
      .within(() => {
        cy.contains(/Thüringer Universitäts- und Landesbibliothek/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://www.thulb.uni-jena.de/");
        cy.contains(/Historische Kommission für Thüringen/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "http://historische-kommission-fuer-thueringen.de/");
        cy.contains(/Landesvermessungsamt Thüringen/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://tlbg.thueringen.de/");
        cy.contains(/Heimatbund Thüringen/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://heimatbund-thueringen.de/");
        cy.contains(/DHnet/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://dhnet.uni-jena.de/");
        cy.contains(/Michael Stifel Center Jena/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://mscj.uni-jena.de/");
        cy.contains(/Gemeinsamer Bibliotheksverbund/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://gbv.de/");
        cy.contains(/Thüringer Landesamt für Archäologie/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://denkmalpflege.thueringen.de/");
        cy.contains(/digiCULT Verbund/i)
          .should("have.length", 1)
          .invoke("attr", "href")
          .should("equal", "https://digicult-verbund.de/");
      });
  });
});

// Empty export needed to compile file as module.
export {};

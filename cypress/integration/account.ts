context("Account", () => {
  it("has sign in link", () => {
    cy.visit("#/")
      .get("#root > nav.AppNav")
      .within(() => {
        cy.get(".nav-link")
          .contains(/Sign in/i)
          .should("have.length", 1);
      });
  });

  it("has sign up link", () => {
    cy.visit("#/")
      .get("#root > nav.AppNav")
      .within(() => {
        cy.get(".nav-link")
          .contains(/Sign up/i)
          .should("have.length", 1);
      });
  });

  it("sign in link goes to sign in page", () => {
    cy.visit("#/")
      .get("#root > nav.AppNav")
      .within(() => {
        cy.get(".nav-link")
          .contains(/Sign in/i)
          .click()
          .url()
          .should("match", /#\/login$/);
      });
  });

  it("sign up link goes to sign up page", () => {
    cy.visit("#/")
      .get("#root > nav.AppNav")
      .within(() => {
        cy.get(".nav-link")
          .contains(/Sign up/i)
          .click()
          .url()
          .should("match", /#\/signup$/);
      });
  });

  it("has tabs", () => {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {
        cy.get(".nav.nav-tabs").within(() => {
          cy.get(".nav-link")
            .contains(/Sign in/i)
            .should("have.length", 1);
          cy.get(".nav-link")
            .contains(/Sign up/i)
            .should("have.length", 1);
        });
      });
  });

  it("can switch tabs", () => {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {})
      .get(".nav.nav-tabs")
      .within(() => {
        cy.get(".nav-link")
          .contains(/Sign up/i)
          .click()
          .url()
          .should("match", /#\/signup$/);
        cy.get(".nav-link")
          .contains(/Sign in/i)
          .click()
          .url()
          .should("match", /#\/login$/);
      });
  });

  it("login has inputs and button", () => {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Email|Username/i)
            .should("have.length", 1)
            .siblings("input")
            .invoke("attr", "type")
            .should("match", /^email|text$/i);
          cy.get("label")
            .contains(/Password/i)
            .should("have.length", 1)
            .siblings("input")
            .invoke("attr", "type")
            .should("match", /^password$/i);
          cy.get("button")
            .contains(/Sign in/i)
            .should("have.length", 1);
        });
      });
  });

  it("login rejects blank email", () => {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("test");
          cy.get("button")
            .contains(/Sign in/i)
            .click();
          cy.get("label")
            .contains(/Email|Username/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("login rejects blank password", () => {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Email|Username/i)
            .siblings("input")
            .type("test");
          cy.get("button")
            .contains(/Sign in/i)
            .click();
          cy.get("label")
            .contains(/Password/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("login rejects invalid credentials", () => {
    cy.visit("#/login")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Email|Username/i)
            .siblings("input")
            .type("user that should never exist");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("totally unlikely password");
          cy.get("button")
            .contains(/Sign in/i)
            .click();
          cy.get(".alert")
            .should("have.length", 1)
            .invoke("text")
            .should("match", /Incorrect/i);
        });
      });
  });

  it("login with valid credentials", () => {
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
    cy.get("#root > nav.AppNav").within(() => {
      cy.get(".nav-link")
        .contains(/Signed in/i)
        .should("have.length", 1);
    });
  });

  it("sign up has inputs and button", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .should("have.length", 1)
            .siblings("input")
            .invoke("attr", "type")
            .should("match", /^text$/i);
          cy.get("label")
            .contains(/Email/i)
            .should("have.length", 1)
            .siblings("input")
            .invoke("attr", "type")
            .should("match", /^email$/i);
          cy.get("label")
            .contains(/Password/i)
            .should("have.length", 1)
            .siblings("input")
            .invoke("attr", "type")
            .should("match", /^password$/i);
          cy.get("button")
            .contains(/Sign up/i)
            .should("have.length", 1);
        });
      });
  });

  it("sign up rejects blank username", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("not-yet-existing@example.com");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("strong password that should pass strength test");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get("label")
            .contains(/Username/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("sign up rejects blank email", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("not yet existing user");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("strong password that should pass strength test");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get("label")
            .contains(/Email/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("sign up rejects blank password", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("not yet existing user");
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("not-yet-existing@example.com");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get("label")
            .contains(/Password/i)
            .siblings(".invalid-feedback")
            .should("not.be.empty");
        });
      });
  });

  it("sign up rejects invalid email", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("not yet existing user");
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("this is not an email");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("strong password that should pass strength test");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get(".alert")
            .should("have.length", 1)
            .invoke("text")
            .should("match", /Invalid email/i);
        });
      });
  });

  it("sign up rejects weak password", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("not yet existing user");
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("not-yet-existing@example.com");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("weak password");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get(".alert")
            .should("have.length", 1)
            .invoke("text")
            .should("match", /Password/i);
        });
      });
  });

  it("sign up rejects existing username", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("test"); // User already exists.
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("not-yet-existing@example.com");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("strong password that should pass strength test");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get(".alert")
            .should("have.length", 1)
            .invoke("text")
            .should("match", /already exists/i);
        });
      });
  });

  it("sign up rejects existing email", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("not yet existing user");
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("test@example.com"); // Email already exists.
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("strong password that should pass strength test");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
          cy.get(".alert")
            .should("have.length", 1)
            .invoke("text")
            .should("match", /already exists/i);
        });
      });
  });

  it("sign up with unique username/email and valid credentials", () => {
    cy.visit("#/signup")
      .get("#root > .container")
      .within(() => {
        cy.get("form").within(() => {
          cy.get("label")
            .contains(/Username/i)
            .siblings("input")
            .type("not yet existing user");
          cy.get("label")
            .contains(/Email/i)
            .siblings("input")
            .type("not-yet-existing@example.com");
          cy.get("label")
            .contains(/Password/i)
            .siblings("input")
            .type("strong password that should pass strength test");
          cy.get("button")
            .contains(/Sign up/i)
            .click();
        });
      });
    cy.url().should("match", /#\/$/);
    cy.get("#root > nav.AppNav").within(() => {
      cy.get(".nav-link")
        .contains(/Signed in/i)
        .should("have.length", 1);
    });
  });
});

// Empty export needed to compile file as module.
export {};

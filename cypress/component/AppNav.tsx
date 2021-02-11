/// <reference types="cypress" />

import { mount } from "@cypress/react";
import { AppNav } from "../../src/components/AppNav";

describe("App navigation", () => {
  beforeEach(() => {
    mount(<AppNav />);
  });

  it("contains project name", () => {
    cy.get(".navbar-brand").contains("Thüringische Flurnamen");
  });
});

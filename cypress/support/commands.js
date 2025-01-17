/* eslint-disable no-undef */

Cypress.Commands.add("sessionLogin", (email, password) => {
  const args = { email, password };

  cy.session(args, () => {
    cy.visit("/");
    cy.get("#qsLoginBtn").click();

    cy.origin(Cypress.env("AUTH_URL"), { args }, (args) => {
      cy.get("input[inputmode='email']").type(args.email);
      cy.get("input[type='password']").type(args.password);
      cy.contains("button[type='submit']", "Continue").click();
    });
  });
  return cy.visit("/");
});

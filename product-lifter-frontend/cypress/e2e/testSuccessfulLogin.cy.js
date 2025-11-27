const baseUrl = Cypress.env("BASE_URL");

describe("Login test", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it("Successful login", () => {
    cy.get('#root a[href="/login"]')
      .click()
      .get('#root [name="user"]')
      .click()
      .get('#root [name="user"]')
      .type("sample_username")
      .get('#root [name="email"]')
      .click()
      .get('#root [name="email"]')
      .type("sample_email@email.com")
      .get('#root [name="password"]')
      .click()
      .get('#root [name="password"]')
      .type("sample_password")
      .get('#root [name="country"]')
      .select("France")
      .get("#root button.primary")
      .click()
      .url()
      .should("include", "shopping");
  });
  it("Not successful login", () => {
    cy.get('#root a[href="/login"]')
      .click()
      .get("#root button.primary")
      .click()
      .get('span[class="error"]')
      .should("have.length", 4)
      .and("be.visible");
  });
});

const baseUrl = Cypress.env("BASE_URL");

describe("Login test", () => {
  beforeEach(() => {
    cy.visit("https://adg08101.github.io/react-vite/");
  });

  it("Successful login", () => {
    cy.intercept(
      "GET",
      "https://adg08101.github.io/react-vite/data/products.json",
      (req) => {
        console.log(req);
      }
    ).as("getProductsRequest");

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

    cy.wait("@getProductsRequest");
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

  it("Username and Password equals", function () {
    cy.get('#root a[href="/login"]')
      .click()
      .get('#root [name="user"]')
      .click()
      .get('#root [name="user"]')
      .type("username_123")
      .get('#root [name="password"]')
      .click()
      .get('#root [name="password"]')
      .type("username_123");

    // Assert both fields match each other
    cy.get('#root [name="user"]')
      .invoke("val")
      .then((userVal) => {
        cy.get('#root [name="password"]')
          .invoke("val")
          .should((passwordVal) => {
            expect(userVal).to.equal(passwordVal);
          });
      });
  });
});

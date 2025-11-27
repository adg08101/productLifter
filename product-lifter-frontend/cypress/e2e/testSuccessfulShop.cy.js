const baseUrl = Cypress.env("BASE_URL");

describe("Login test", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Successful login", () => {
    cy.get('#root a[href="/shopping"]')
      .click()
      .get("#root div:nth-child(1) > button:nth-child(5)")
      .click()
      .get("#root div:nth-child(1) > button:nth-child(4)")
      .click()
      .get("#root > div:nth-child(5) > button")
      .click()
      .get("#root div:nth-child(2) button:nth-child(5)")
      .click()
      .get("#root div:nth-child(2) button:nth-child(5)")
      .click()
      .get("#root div:nth-child(2) button:nth-child(4)")
      .click()
      .get("#root div:nth-child(3) > button:nth-child(5)")
      .click()
      .get("#root div:nth-child(3) > button:nth-child(5)")
      .click()
      .get("#root div:nth-child(3) > button:nth-child(4)")
      .click()
      .get("#root > div:nth-child(5) > button")
      .click()
      .get("#root > div:nth-child(5) > button")
      .click()
      .get("#root p:nth-child(5)")
      .invoke("text")
      .then((text) => {
        console.log(text);
        expect(text.trim()).to.include("Total money");
      });
  });
});

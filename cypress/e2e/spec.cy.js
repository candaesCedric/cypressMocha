describe("go to backmarket", () => {
  it("accept cookies", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get("button").contains("OK").click();
    cy.get("form").eq(2).find("input").eq(0).type("Pamela");
    cy.get("form").eq(2).find("input").eq(1).type("Pamela");
    cy.get("form")
      .eq(2)
      .find("input")
      .eq(2)
      .type("Pamelac'estlameileur@gmail.com");
    cy.get("form").eq(2).find("input").eq(3).type("Pamela1.");
    cy.get("button").contains("Enchantés ").click();
  });
  // describe("create account", () => {
  it("accept cookies", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get("button").contains("OK").click();
    cy.get("form").eq(2).find("input").eq(0).type("Pamela");
    cy.get("form").eq(2).find("input").eq(1).type("Pamela");
    cy.get("form")
      .eq(2)
      .find("input")
      .eq(2)
      .type("Pamelac'estlameileur@gmail.com");
    cy.get("form").eq(2).find("input").eq(3).type("Pamela");
    cy.get("button").contains("Enchantés ").click();
  });
  // });
  // describe("go to backmarket", () => {
  it("accept cookies", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get("button").contains("OK").click();
    cy.get("form")
      .eq(1)
      .find("input")
      .eq(0)
      .type("Pamelac'estlameileur@gmail.com");
    cy.get("form").eq(1).find("input").eq(1).type("Pamela1.");
    cy.get("button").contains("Welcome ").click();
  });
});
// });

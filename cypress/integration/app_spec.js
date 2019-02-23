describe("Knowledge Base Application", () => {
    it("Shows a text", () => {
      cy.visit("/");
      cy.get('#root').get(".MainComponent").get("h1:first")
        .should("have.text", "Hello, Sherlock!");
    });
  });
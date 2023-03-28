
describe("Add Dog Page", () => {
    it("should navigate to add dog page and generate image", () => {
    cy.visit("/");
    cy.contains("Add Dog").click();
    cy.url().should("include", "/add-dog");
    cy.get("select").select("boxer");
    cy.contains("Get Random Image").click();
    cy.get("img").should("be.visible");
    });
});
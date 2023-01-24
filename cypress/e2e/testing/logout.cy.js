describe("logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-bs-target="#loginModal"]`).click();
    cy.wait(500);
    cy.get("#loginForm #loginEmail").type("ca-workflow@stud.noroff.no");
    cy.get("#loginForm #loginPassword").type("password123");
    cy.get("#loginForm").submit();
    cy.wait(500);
  });
  it("can log out with the logout button", () => {
    cy.get(`header button[data-auth="logout"]`)
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
        expect(localStorage.getItem("profile")).to.be.null;
      });
  });
});

describe("login", () => {
  beforeEach(() => {
    cy.wait(500);
    cy.visit("/");
  });
  it("can login with valid credentials", () => {
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-bs-target="#loginModal"]`).click();
    cy.wait(500);
    cy.get("#loginForm #loginEmail").type("ca-workflow@stud.noroff.no");
    cy.get("#loginForm #loginPassword").type("password123");
    cy.get(`#loginForm`)
      .submit()
      .should(() => {
        expect(localStorage.getItem("token")).to.exist;
      });
  });
});

describe("login", () => {
  beforeEach(() => {
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
  it("cannot submit the login form with invalid credentials and is shown a message", () => {
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-bs-target="#loginModal"]`).click();
    cy.wait(500);
    cy.get("#loginForm #loginEmail").type("invalidEmail@stud.norff.no");
    cy.get("#loginForm #loginPassword").type("invalidPassword");
    cy.get(`#loginForm`)
      .submit()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
        cy.on("window:alert", (str) => {
          expect(str).to.equal(
            "Either your username was not found or your password is incorrect"
          );
        });
      });
  });
});

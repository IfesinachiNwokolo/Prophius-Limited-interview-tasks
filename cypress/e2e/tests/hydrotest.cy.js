describe('Landing page', () => {
  it('Ifesinachi should be able to log in', () => {
    cy.visit('https://dashboard.hydrogenpay.com/login');
    cy.get('[name="emailAddress"]').type('ify@gmail.com');
    cy.get('[name="new-password"]').type('@Password0987');
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/dashboard');

  })
})
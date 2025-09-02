export class loginpages
{

invalidLogin()
{
    cy.get('input[name="username"]').type("ify25353");
    cy.get('#password').type("hsgdffg434");
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!').should('be.visible');
}
}
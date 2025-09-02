import {loginpages} from "../pages/loginpages";
const login = new loginpages();
describe("herokuapp Test suit", ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
    })

  it('verify login with invalid details', ()=> {
    login.invalidLogin();

  });

});
 
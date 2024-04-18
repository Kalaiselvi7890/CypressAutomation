describe('fixture',()=>{
let userdata;
    before(()=>{
        cy.fixture("Orangehrm").then((data)=>{
userdata=data;
        })
    })
it('fixture&DataDriven',()=>{
cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
cy.wait(2000)
cy.get('#input-username').type(userdata.username);
cy.get('#input-password').type(userdata.password);
cy.get('[type="submit"]').click();
 cy.get('.modal-title.text-danger').should('be.visible')
 })
})
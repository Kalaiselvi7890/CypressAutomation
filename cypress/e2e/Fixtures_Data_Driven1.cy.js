describe('fixture',()=>{
    let userdata;
       it('fixture&DataDriven',()=>{
    
    cy.wait(2000)
    cy.fixture("Orangehrm1").then((data)=>{
       
    data.forEach((userdata) => {
    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
    cy.get('#input-username').type(userdata.username);
    cy.get('#input-password').type(userdata.password);
    cy.get('[type="submit"]').click();

        });
    })
    })})
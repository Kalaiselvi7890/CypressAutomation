

describe('Handling liks using custom cmd',()=>{
  
    it('custom cmd', ()=>{
        cy.visit('https://www.opencart.com/index.php?route=cms/demo');
        cy.link('Contact Us');
        cy.xpath('((//*[@class="list-unstyled"])[2]/li/a)[1]').should('have.text','Contact Us');
    })

    it.only('custom cmd login',()=>{
    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
    cy.wait(2000)
    cy.login('demo','demo')
    })
})
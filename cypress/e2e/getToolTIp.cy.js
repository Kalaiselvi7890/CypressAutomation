describe('gettooltip',()=>{
    it('gettooltip',()=>{
        cy.visit('https://practice.expandtesting.com/tooltips')
     cy.get('#btn1').trigger('mouseover')
     cy.get('.tooltip-inner').should('have.text','Tooltip on top')
     })
})
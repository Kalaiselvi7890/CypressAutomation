describe('Xpath and length',() =>{
it('Xpath', () =>{
cy.visit("https://www.amazon.in")
cy.xpath('//*[@alt="Refrigerators"]/preceding::div[1]').should('have.length',1)
})
it('Chain Xpath', () =>{
    cy.visit("https://www.amazon.in")
    cy.xpath('//*[@alt="Refrigerators"]').xpath('./preceding::div[1]').should('have.length',1)
    })
})
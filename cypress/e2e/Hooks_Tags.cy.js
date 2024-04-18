describe('Hooks',()=>{
    before(()=>{
        console.log('............launch the app.....................')
        cy.visit('https://facebook.com')
    })
    after(()=>{
        console.log('............close the app.....................')
        cy.visit('https://www.w3schools.com/')
    })
    beforeEach(()=>{
        console.log('..............login................')
        cy.visit('https://amazon.com')
    })
        afterEach(()=>{
        console.log('..............logout................')
        cy.visit('https://flipkart.com')
    })

    it('verifytitle', ()=>{
        console.log('............Title..............')
    })
    it('list the products',()=>{
        console.log('.............products.................')
    })
   
})
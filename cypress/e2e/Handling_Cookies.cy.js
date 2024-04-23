describe('Handling cookies',()=>{
    it('cookies',()=>{
        cy.visit('https://docs.cypress.io/api/cypress-api/cookies')
        console.log(cy.getCookies())
        cy.setCookie('foo', 'bar')
        cy.clearCookie('foo')
        cy.getCookies().then((cookies) => {
            console.log(cookies);
          });
      // cy.getCookies('osan').should('include','osan')
})
})

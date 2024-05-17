describe('QR Code', () => {
    it('can read qrcode', () => {
      cy.visit('https://www.the-qrcode-generator.com/');
      cy.get('[type="text"]').click();
      cy.get('[type="text"]').type('https://www.cypress.io')
     // cy.wait(100000)
      cy.get('.MuiGrid-root.css-1s152lx').should('be.visible')
        // .then($el => {
        //   const img = $el[0];
        //   const image = new Image();
        //   image.width = img.width;
        //   image.height = img.height;
        //   image.src = img.src;
        //   image.crossOrigin = 'Anonymous';
        //   return image;
        // })
    //     .then(image => {
    //       const reader = new BrowserMultiFormatReader();
    //       return reader.decodeFromImageElement(image[0])
    //     })
    //     .then(result => {
    //       expect(result.getText()).to.equal('https://www.cypress.io');
    //     });
    });
  });
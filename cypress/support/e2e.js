// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import cypress from 'cypress'
// import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add('frame', (iframe) => {
    return cy.get(iframe)
      .its('0.contentDocument.body')
      .should('be.visible') 
      .then(cy.wrap)
  });
require('cypress-xpath')

Cypress.Commands.add('link', (label) => {
    cy.get('a').contains(label).click({force: true});
 });


// Cypress.Commands.overwrite('contains',(origitionalfn, subject, filter, text, options = {})=>{
//     if(typeof text === 'object'){
//         text=options
//         options=filter
//         filter=undefined }
//     options.matchCase=false
//     return origitionalfn(subject, filter, text, options);
//   })

  Cypress.Commands.add('login' ,(username,password)=>{
    cy.get('#input-username').screenshot('usernameinput')
    cy.get('#input-username').type(username);
    cy.get('#input-password').type(password);
    cy.get('[type="submit"]').click();
    cy.screenshot('landingpage')
  })

  import 'cypress-mochawesome-reporter/register';

//   const fs = require('fs-extra');
// const path = require('path');

// module.exports = (on, config) => {
//   on('task', {
//     async captureVideo(videohome) {
//       const videosFolder = config.videoUploadDir || 'cypress/videos';
//       const videoPath = path.join(videosFolder, fileName);
//       await fs.ensureDir(videosFolder);
//       await fs.copyFile('cypress/videos/test.mp4', videoPath);
//       return null;
//     }
//   });
// };

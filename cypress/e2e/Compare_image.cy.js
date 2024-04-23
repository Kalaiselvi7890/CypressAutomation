

describe('compare image',()=>{
    it('compare image',()=>{
cy.visit('https://www.google.com/search?q=image&rlz=1C1CHZN_enIN1065IN1065&oq=image&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABixAxiABDIKCAIQABixAxiABDIHCAMQABiABDIKCAQQABixAxiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCTEyNDQxajBqNKgCALACAA&sourceid=chrome&ie=UTF-8')
cy.get('a').each(link => {

if (link.prop('href'))
    cy.request({
    url: link.prop('href'),
    failOnStatusCode: false
    })
    cy.log( link.prop('href'))
     })
    });
    })

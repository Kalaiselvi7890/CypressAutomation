describe('dbtest',()=>{
    it('dbtest',()=>{
       // cy.wait(10000);
        cy.task("queryDb","SELECT *FROM `test`.`user`; ").then(res =>{
            var rec=res
            const results=Object.values(rec[0])
            cy.log(results[0])
            cy.log(results[1])
            cy.log(results[2])
            cy.log(results[3])
        })
    })
})
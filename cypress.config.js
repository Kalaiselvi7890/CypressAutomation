const { defineConfig } = require("cypress");
const mysql=require("mysql");


module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    video:true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
   require('cypress-mochawesome-reporter/plugin')(on);
      on('task',{
        queryDb: (query)=>{
          return queryTestDb(query, config);
        }
      })
      
  
     
 },
 //experimentalStudio:true,
 
 "env":{
  "DB": {
    "server": "localhost",
  user: "root",
  database: "test",
  password: "root",
  //  host : "localhost",
  // port: "3306" 
 
  }
  }
  },
  
});

function queryTestDb(query, config){
 
  //create a new connection using credentials from cypress.json
   const connection= mysql.createConnection(config.env.DB);

  //start connection to database
  connection.connect();

  //execute query + disconnect to db as a promise
return new Promise((resolve, reject) => {
  connection.query(query, (error, results)=>{
    if(error) reject(error);
    else(connection.end())

    //console log results
    return resolve(results) ;
  })
})

}
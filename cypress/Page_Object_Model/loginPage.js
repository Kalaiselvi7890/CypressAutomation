class Login{
    launchbrowser(){
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
    }

    setUserName(username){
      cy.get('#input-username').type(username)
    }

    setPassword(password){
        cy.get('#input-password').type(password)
    }

    clickonlogin(expected){
        cy.get('[type="submit"]').click;
    }
} export default Login;
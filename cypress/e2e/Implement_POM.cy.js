import Login from "../Page_Object_Model/loginPage";
describe('login', ()=>{
    it('login',()=>{
        const ln=new Login();
        ln.launchbrowser();
        ln.setUserName("demo");
        ln.setPassword("demo");
        ln.clickonlogin();
    })
})

import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'

describe('Cypress topic', () => {
  it('cssSelector', () => {
    cy.visit('https://facebook.com')
    cy.title().should('eq','Facebook - உள்நுழையவும் அல்லது பதிவுசெய்யவும்')
    cy.get('#email').type('kalaiselvi')
    cy.get('#passContainer').type('Kalai')
    cy.get('[name="login"]').click()
 })
 it('getvalue', () => {
  cy.visit('https://facebook.com')
  cy.title().should('eq','Facebook - உள்நுழையவும் அல்லது பதிவுசெய்யவும்')
  cy.get('#email').type('kalaiselvi')
  cy.get('#passContainer').type('Kalai')
  cy.get('#email').should('have.value', 'kalaiselvi')
})
it('getcurrenturl', () => {
  cy.visit('https://facebook.com');
  cy.url().should('contain',"face")
  cy.url().should('include','book')
  cy.url().should('exist','facebook')
})
it('implictassertion', () => {
  cy.visit('https://facebook.com')
  cy.url().should('contain',"face")
  .and('include','book')
  .and('exist','facebook')
})
it('explictassertion', () => {
  cy.visit('https://www.amazon.in')
  let expecttext='Customer Service'
 cy.xpath("(//*[text()='Customer Service'])[1]").then((x)=>{
    let actualtext=x.text()
    console.log(actualtext)
    //BDD style chai 
expect(expecttext).to.equal(actualtext)
// expect(expecttext).to.not.equal(actualtext)
//TDD style
assert.equal(expecttext,actualtext)
// assert.notEqual(expecttext,actualtext)
  })
  })
it('handling radiobutton',()=>{
cy.visit("https://www.leafground.com/checkbox.xhtml;jsessionid=node0vl8ewqx15cb574v9qpx1rkuf572766.node0")
cy.xpath('//span[text()="Basic"]').click();

//cy.xpath('//span[text()="Basic"]').debug().should('be.checked');
for(let i=2; i<=8;i++){
cy.xpath('(//*[contains(@class, "ui-chkbox-box ")])[position() = '+i+']').click()}

for(let i=2; i<=8;i++){
  cy.xpath('(//*[contains(@class, "blank ")])[position() = '+i+']').should('not.be.visible')}
 for(let i=2; i<=8;i++){
    cy.xpath('(//*[contains(@class, "ui-chkbox-box ")])[position() = '+i+']').click()}
 })
 it('dropdown',()=>{
cy.visit('https://www.leafground.com/select.xhtml;jsessionid=node07spmt9ywbp41byz3mzahfb4e378344.node0')

//select tag
cy.xpath('//div[@class="grid formgrid"]/div/select').select('Playwright')

//label and li tag
cy.xpath('//label[text()="Select Country"]').click()
cy.xpath('//div[@class="ui-selectonemenu-items-wrapper"]/ul/li').each(($ele , index, $length)=>{
if($ele.text()=='Brazil'){
  cy.wrap($ele).click()
}
})

//input dropdown
cy.xpath('//input[@placeholder="Choose Course"]').type('Appium').type('{enter}').type('Palywright').type('{enter}')
.type('AWS').type('{enter}').type('{enter}')

//label and li tag
cy.xpath('//label[text()="Select Language"]').click()
cy.xpath('//li[text()="English"]').click()

//label and li tag
cy.xpath('//label[text()="Select Values"]').should('have.visible')
cy.xpath('//label[text()="Select Values"]').click()
cy.xpath('//li[text()="One"]').click()
})

it('window Alerts', ()=>{
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  cy.get('button[onclick="jsAlert()"]').click()
 
  //simple window alert getting text 
  cy.on('window:confirm',(t)=>{
    expect(t).to.contains('I am a JS Alert')
    console.log("alert text"+t.text())

})})
it('confirm Alerts', ()=>{
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//confirmationalert ok
cy.get('button[onclick="jsConfirm()"]').click()
cy.on ('window:confirm',(t)=>{
expect(t).to.contains('I am a JS Confirm')
})
//cy.get('#result').should('have.text','You clicked: Ok')
//cy.wait(5000)
//cancel
cy.get('button[onclick="jsConfirm()"]').click()
cy.on('window:confirm',()=> false)
cy.get('#result').should('have.text','You clicked: Cancel')
  })


  it('prompt Alerts', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.window().then((win)=>{
cy.stub(win,'prompt').returns('Welcome')
    })
    cy.get('button[onclick="jsPrompt()"]').click()
    cy.get('#result').should('have.text','You entered: Welcome')
   
  })
  it('authentication Alerts', ()=>{
  // cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')

  cy.visit('http://the-internet.herokuapp.com/basic_auth',{auh:{username:'admin',password:'admin'}});

})

it('child window & Navigation', ()=>{
  cy.visit('http://the-internet.herokuapp.com/windows');
  cy.get('.example>a').invoke('removeAttr','target').click();
  cy.get('.example>h3').should('have.text','New Window');
  cy.go('back');
  cy.get('.example>a').should('be.visible')
  cy.go('forward');
  cy.get('.example>h3').should('have.text','New Window');
  cy.go(-1);
  cy.get('.example>a').should('be.visible');
  cy.go(1);
  cy.get('.example>h3').should('have.text','New Window');
  cy.reload();
})


it('iframe approch1', ()=>{
  cy.visit('http://the-internet.herokuapp.com/iframe');
  //switching in to iframe
  const iframe=cy.get('#mce_0_ifr')
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap);

  //clear and type in input field and select that
  iframe.clear().type('Welcome {selectall}'); //cmd+a not working for select, so used selectall
  cy.get('[aria-label="Bold"]').click();
})
it('iframe approch2', ()=>{
  cy.visit('http://the-internet.herokuapp.com/iframe');
  //switching in to iframe its not working
 cy.frame('#mce_0_ifr').clear().type('Welcome {selectall}');
//cmd+a not working for select, so used selectall
  cy.get('[aria-label="Bold"]').click();
})

it('gettooltip',()=>{
  cy.visit('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_tooltip')
  cy.frameLoaded('#iframeResult');
  cy.iframe('#iframeResult')
   cy.get('#tooltip').trigger('mouseover')

})

it.only('iframe approch3 using cypress-iframe plugin', ()=>{
  cy.visit('http://the-internet.herokuapp.com/iframe');
  //switching in to iframe 
cy.frameLoaded('#mce_0_ifr')
cy.iframe('#mce_0_ifr').clear().type('Welcome {selectall}');
 cy.get('[aria-label="Bold"]').click();
 //cy.get('.tox-tbtn__select-label').trigger('mouseover')

})

//Handling WebTable 
// beforeEach('launch url', ()=>{
// cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
// cy.wait(2000)
// cy.get('#input-username').type('demo');
// cy.get('#input-password').type('demo');
// cy.get('[type="submit"]').click();
// cy.get('.btn-close').click();
// cy.get('#menu-customer>a').click();
// cy.get('#menu-customer>ul>li:first-child').click();
// })
it('check data from specific rows and coloum', ()=>{
  cy.get('.table-responsive>table>tbody>tr').should('be.visible').should('have.length',10)
  cy.get('.table-responsive>table>tbody>tr>td').should('be.visible').should('have.length',70)
})
it('check particular data in table', ()=>{
  cy.get('.table-responsive>table>tbody>tr:nth-child(7)>td:nth-child(3)').contains('demo234566@gmail.com');
})
it('read the all the data from row & coloum', ()=>{
  cy.get('.table-responsive>table>tbody>tr').each(($row, index, $rows)=>{
cy.wrap($row).within( ()=>{
cy.get('td').each(($col, index, $cols)=>{
  console.log($col.text())
})
})
  })
})
it('pagination', ()=>{
  cy.get('[class="col-sm-6 text-end"]').then((pages)=>{
   let pagecount= pages.text();
   let totalpages= pagecount.substring(pagecount.indexOf('(')+1,pagecount.indexOf('Pages')-1);
   console.log("Total num of pages in table===========> "+totalpages)
  
for(let i=1;i<=20;i++){
  cy.xpath('//*[@class="row"]/div/ul/li//*[text()='+i+']').click();
  cy.wait(2000)
  cy.get('.table-responsive>table>tbody>tr').each(($row, index, $rows)=>{
    cy.wrap($row).within( ()=>{
    cy.get('td:nth-child(3)').each(($col, index, $cols)=>{
      console.log($col.text())
    })
  }) 
  })
}
})})

//mouse Events
it('mouseHover event', ()=>{
  cy.visit('https://demo.opencart.com/')
  cy.get('#menu>div>ul>li:nth-child(1)').trigger('mouseover').click();
  
})

it('Rightclick',()=>{
  cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo/input.html')
  //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
  cy.get('.context-menu-one.btn.btn-neutral').rightclick();
})

it('Double click',()=>{
cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_html');
cy.frameLoaded('#iframeResult');
// cy.iframe('#iframeResult').find('#demo').trigger('dblclick');
cy.iframe('#iframeResult').find('#demo').dblclick();
})

it('draganddrop', ()=>{
  cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  cy.get('#box6').should('be.visible')
  cy.get('#box106').should('be.visible')
  cy.get('#box6').drag('#box106',{force:true})
})

//file uploads
it('single file upload',()=>{
cy.visit('https://the-internet.herokuapp.com/upload')
cy.get('#file-upload').attachFile('errormessage (1)')
cy.get('#file-submit').click();
cy.get('.example>h3').should('have.text','File Uploaded!')
})

it('file upload-rename',()=>{
  cy.visit('https://the-internet.herokuapp.com/upload')
  cy.get('#file-upload').attachFile({filePath:'errormessage (1).PNG', fileName:'MYFILE.PNG'})
  cy.get('#file-submit').click();
  cy.get('.example>h3').should('have.text','File Uploaded!')
  })

  it('file upload-drag and drop',()=>{
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.wait(5000)
    cy.get('#drag-drop-upload').attachFile("errormessage (1).PNG",{subjectType:'drag-n-drop'})
    cy.wait(5000)
  })
  it('file upload-mutiple files',()=>{
    cy.visit('https://www.ilovepdf.com/merge_pdf')
    cy.wait(5000)
    cy.get('#pickfiles').attachFile(["atest1.pdf","errormessage.PNG"])
    cy.wait(5000)
  })
  it('mutiple file upload-shadow Dom', ()=>{
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
    cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile(['atest1.pdf','errormessage (1).PNG']);
    cy.get('.smart-item-name',{includeShadowDom:true}).should('contain.text','atest1')
     })
    it('Scroll Function', ()=>{
      cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/')
      cy.xpath('(//footer/div/div/ul/li/a)[1]').scrollIntoView();
      cy.wait(5000)
      cy.get('.demo-title').scrollIntoView();
    })
    })
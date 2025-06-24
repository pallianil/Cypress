

describe('My First Test', () => {
  it('test-verify-title', () => {
    //expect(true).to.equal(true)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    // cy.fixture('orangehrm').then((data)=>{
    // cy.xpath("//input[@placeholder='Username']").type(data.username)
    // cy.xpath("//input[@placeholder='Password']").type(data.password)
    // cy.xpath("//button[normalize-space()='Login']").click()
    // cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)
    })

    let userdata;
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            userdata=data;
        })
    }) 
     
    it.only('test-verify-title', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')   
     cy.xpath("//input[@placeholder='Username']").type(userdata.username)
     cy.xpath("//input[@placeholder='Password']").type(userdata.password)
     cy.xpath("//button[normalize-space()='Login']").click()
     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
  })
})
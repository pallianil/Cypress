
// id locator we use #
//class  .class
//.class[attribut='value']



describe('My First Test', () => {
  it('test-verify-title', () => {
    //expect(true).to.equal(true)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
  })

   it('test-verify-title-negative', () => {
    //expect(true).to.equal(true)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM123')
  })

 
})
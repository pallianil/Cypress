

describe('CSS locator', () => {
    it('csslocators',() =>{
        cy.visit('https://practice-automation.com/')
        cy.xpath("//a[normalize-space()='Form Fields']").click();
        cy.url().should('include','practice-automation.com')
        cy.url().should('contain','practice')

       // cy.get('h1').should('exist')
        cy.get('h1').should('be.visible').and('exist')


    })
})
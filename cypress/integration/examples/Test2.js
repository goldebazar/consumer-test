/// <reference types="Cypress" />

describe('My FirstSuite',function(){
    // it('TestCase 1',function(){
    //    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //    cy.get('#checkBoxOption1').check().should('be.visible');
    //    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    //    //static dropdown
    //    cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')
    // })

    it('Verify Shop Page',function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.checkd()
        
    })

})
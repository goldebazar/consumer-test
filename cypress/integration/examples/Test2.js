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
    it('Items 3', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-icon>img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })
    describe('prod local',function(){

    })
    describe('prod suite2sd',function(){

    })
    describe('Gobinda Updated',function(){
        cy.visit('https://rahulshettyacademy.com1/seleniumPractise/#/')
        console.log("Print")
    })
    describe('add to cart',function(){

    })

})
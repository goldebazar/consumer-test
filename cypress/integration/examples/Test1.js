/// <reference types="Cypress" />
import HomePage from '../../pageObjects/HomePage'

describe('Cart Test', function(){

    beforeEach('Hook',function () {
        cy.fixture('TestData').then(function (data) {
          this.data = data;
        })
      })

    it('Verify ADD TO cart click is successful', function(){
        const hp=new HomePage()
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        hp.searchText().type('ca')
        cy.wait(2000)
        hp.productVisible().should('have.length.gt', 2)
        cy.get('.products').find('.product').each(($el, index,$list) => {
            const vegName=$el.find('h4.product-name').text()
            if(vegName.includes(this.data.item1))
            {
                cy.wrap($el.find('button[type="button"]')).click()
            }
        });
    })

    it('Verify home page', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)
        cy.get('div.greenLogo:visible').should('have.length.gt', 0)

        cy.get('div.greenLogo').then(function(logoName){
            const logoData=logoName.text()
            if(logoData==this.data.logoName1){
                cy.log("Matched Value= "+logoData)
            }
            expect(logoData).to.equal(this.data.logoName1)
        })
    })

    it('Verify item added in Cart Page', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').each(($el, index,$list) => {
            const vegName=$el.find('h4.product-name').text()
            if(vegName.includes(this.data.item1))
            {
                cy.wrap($el.find('button[type="button"]')).click()
            }
        });
        cy.get('.cart-icon>img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })

    it('Items 2', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-icon>img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })
})

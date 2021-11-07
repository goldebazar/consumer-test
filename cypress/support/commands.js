// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("findAndClickTheProduct", (productName) => { 
    cy.get('.products').find('.product').each(($el, index,$list) => {
        const vegName=$el.find('h4.product-name').text()
        if(vegName.includes(productName))
        {
            cy.wrap($el.find('button[type="button"]')).click()
        }
    });
})

Cypress.Commands.add('clickButton', (buttonLabel) => {
    cy.get('button').contains(buttonLabel).click();
  })

  Cypress.Commands.add('checkd',()=>{
    cy.log("Check")
    cy.get(':nth-child(1) > .form-control').should('be.visible');
  })
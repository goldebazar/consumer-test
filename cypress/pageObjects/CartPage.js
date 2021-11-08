class CartPgae {    
    productProdVisible(){
        return cy.get('.product:visible')
    }
    searchProText() {
        return cy.get('.search-keyword')
    }
}
export default CartPgae;
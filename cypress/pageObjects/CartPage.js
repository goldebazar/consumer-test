class CartPage {    
    productProdVisible(){
        return cy.get('.product:visible')
    }

    searchText() {
        return cy.get('.search-keyword')
    }
}
export default CartPage;
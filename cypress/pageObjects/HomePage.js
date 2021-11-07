class HomePage {

    searchText() {
        return cy.get('.search-keyword')
    }

    productVisible(){
        return cy.get('.product:visible')
    }
}

export default HomePage;
class CustomerPage {
    closeModal() {
        cy.get('[data-dismiss="modal"]:visible').click()
    }

    searchCustomer(name) {
        cy.get('#drpDefaultCustomerSearch').select('Name')
        cy.get('#txtCustomer').type(name)
        cy.get('.tt-dropdown-menu')
                .should('be.visible')
        cy.get('.tt-suggestion').first().click()
    }

    verifyCustomerDetails() {
        cy.fixture('lang').then(lang => {
            cy.get('.PageLabes2').invoke('text')
                .should('be.oneOf', lang.CustomerDetails)
        })
    }

    clickPerPieceOrder() {
        cy.get('#lnkDrop').click()
    }

    clickPerWeightOrder() {
        cy.get('#lnkLaundry').click()
    }
}

export default new CustomerPage()
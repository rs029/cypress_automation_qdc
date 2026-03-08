class PickupSchedulerPage {
    verifyPage() {
        cy.url().should('contain', '/frmHomePickUpScheduler')
    }

    searchCustomer() {
        cy.get('#txtCustomerSearch').type('Rishu')
        cy.get('.tt-dropdown-menu').first().click()
    }

    verifySuccess() {
        cy.get('#divShowMsg')
            .should('be.visible')

        cy.get('#lblMsg')
            .should('be.visible')
            .should('have.text', 'New pickup created successfully.')
    }
}

export default new PickupSchedulerPage()
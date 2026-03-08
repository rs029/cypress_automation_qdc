class DropOffSchedulerPage {
    verifyPage() {
        cy.url().should('contain', '/frmDropOffScheduler')
    }

    searchPickupNo(value) {
        cy.get('#spnPickUpNo').click()
        cy.get('#txtPickUpNo').type(value)
    }

    verifySuccess() {
        cy.get('#divShowMsg')
            .should('be.visible')

        cy.get('#lblMsg')
            .should('be.visible')
            .should('have.text', 'New drop off created successfully.')
    }
}

export default new DropOffSchedulerPage()
class CommonSelector {
    saveButton() {
        cy.get('#btnSave').click()
    }

    dropdownSelection() {
        cy.get('.tt-dropdown-menu')
                .should('be.visible')
        cy.get('.tt-suggestion').first().click()
    }
}

export default new CommonSelector()
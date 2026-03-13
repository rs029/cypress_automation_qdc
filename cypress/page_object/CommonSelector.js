class CommonSelector {
    saveButton() {
        cy.get('#btnSave').click()
    }

    dropdownSelection() {
        cy.get('.tt-dropdown-menu')
                .should('be.visible')
        cy.get('.tt-suggestion').first().click()
    }

    match(fetchData) {
        cy.get('#grdReport')
            .contains('td', fetchData)
            .parent('tr')
            .find('td')
            .eq(2)
            .should('contain', '400')
    }
}

export default new CommonSelector()
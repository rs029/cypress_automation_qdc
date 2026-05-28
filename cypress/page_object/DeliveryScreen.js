class DeliveryScreen {
    verifyDeliveryScreen(status) {
        cy.get('#grdData')
            .contains('td', status)
            .scrollIntoView()
            .parent('tr')
            .find('td')
            .eq(5)
            .should('contain', 'Delivered')
    }

    verifyDeliveryScreenPerWeight(status) {
        cy.get('#grdData')
            .contains('td', status)
            .scrollIntoView()
            .parent('tr')
            .find('td')
            .eq(5)
            .should('contain', 'Delivered')
    }

    deliverGarments() {
        cy.get('body').then(($body) => {

            if ($body.find('#btnPkgSkip').length > 0) {

                cy.get('#btnPkgSkip').click()

            }

            cy.get('#btnDeliver').click()

        })
    }
}

export default new DeliveryScreen()
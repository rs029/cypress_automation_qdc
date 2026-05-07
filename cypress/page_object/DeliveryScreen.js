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
}

export default new DeliveryScreen()
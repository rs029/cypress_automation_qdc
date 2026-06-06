import DeliveryPageLocator from '../locators/DeliveryPageLocator'

class DeliverPageAssertion {
    verifyDeliveryScreen(status) {
        cy.get(DeliveryPageLocator.gridData)
            .contains('td', status)
            .scrollIntoView()
            .parent('tr')
            .find('td')
            .eq(5)
            .should('contain', 'Delivered')
    }

    verifyDeliveryScreenPerWeight(status) {
        cy.get(DeliveryPageLocator.gridData)
            .contains('td', status)
            .scrollIntoView()
            .parent('tr')
            .find('td')
            .eq(5)
            .should('contain', 'Delivered')
    }
}

export default new DeliverPageAssertion()
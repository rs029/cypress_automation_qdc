class AlertUtil {

    captureAlert() {

        cy.on('window:alert', (text) => {
            cy.wrap(text).as('alertText')
        })

    }

}

export default new AlertUtil()
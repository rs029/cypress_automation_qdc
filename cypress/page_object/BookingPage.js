class BookingPage {

    uncheckPrintTagIfChecked() {
        cy.get('#chkPrintTag').then($el => {
            if ($el.is(':checked')) {
                cy.wrap($el)
                    .parent('label')
                    .click()
            }
        })
    }

    createOrder() {
        cy.get('#btnCreateOrder').click()
    }

    createOrderPerWeight() {
        cy.get('#btnCreateBooking').click()
    }

    skipPackage() {
        cy.get('#btnPkgSkip').click()
    }

    verifyBookingSlip() {
        cy.url().should('include', '/BookingSlip')
    }
}

export default new BookingPage()
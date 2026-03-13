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

    setRate(rate) {
        cy.get('#txtAdvance').clear().type(rate)
    }

    createOrder() {
        cy.get('#btnCreateOrder').click()
    }

    saveAsBalance() {
        cy.get('#btnOkAdvance').click()
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
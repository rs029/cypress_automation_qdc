class BookingPageAssertion {
    verifyBookingSlip() {
        cy.url().should('include', '/BookingSlip')
    }
}

export default new BookingPageAssertion()
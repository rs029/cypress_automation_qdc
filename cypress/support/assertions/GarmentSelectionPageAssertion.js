class GarmentSelectionPageAssertion {
    verifyPage() {
        cy.url().should('include', '/App/Bookings_New')
    }
}
export default new GarmentSelectionPageAssertion()
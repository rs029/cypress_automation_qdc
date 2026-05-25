class GarmentSelectionPage {
    verifyPage() {
        cy.url().should('include', '/App/Bookings_New')
    }

    selectRandomGarment() {
        // cy.clickRandom('.Service-binding')
        // cy.clickRandom('.Group-binding')
        cy.clickRandom('.Garment-Binding')
    }

    addGarmentWeightAndQuantity() {
        cy.get('#txtWeight').clear().type('1')
        cy.get('#txtQuantity').clear().type('1')
    }

    setRate(rate) {
        cy.get('#txtGarmentRate').clear().type(rate)
    }
    
    addItem() {
        cy.get('#achrAddItem').click()
    }

    closePage() {
        cy.get('#btnCancel').click()
    }
}

export default new GarmentSelectionPage()
class CustomerAdvance {
    advanceReceived(bookingNumber) {
        cy.get('#grdReport')
            .contains('td', bookingNumber)
            .scrollIntoView()
            .parent('tr')
            .find('td')
            .eq(2)
            .should('contain', '400')
            // .then((text) => {
            //     const trimmedText = text.trim()
            //     expect(value.advanceReceived).to.include(trimmedText)
            // })
    }

    advanceUsed(bookingNumber) {
        cy.fixture('value').then((value) => {
            cy.get('#grdReport')
                .contains('td', bookingNumber)
                .scrollIntoView()
                .parent('tr')
                .find('td')
                .eq(3)
                .should('contain', '100')
            //     .then((text) => {
            //     const trimmedText = text.trim()
            //     expect(value.AdvanceUsed).to.include(trimmedText)
            // })
        })
    }
}

export default new CustomerAdvance()
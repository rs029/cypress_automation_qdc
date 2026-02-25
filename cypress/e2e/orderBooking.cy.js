import LoginPage from "../page_object/loginPage";
const userData = require('../fixtures/userData.json')

const loginPage = new LoginPage()

describe('Simple Order Booking Scenarios', () => {
    beforeEach(() => {
        cy.visitURL()
        loginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )
    })

    it('Order Per Piece', () => {
        cy.get('[data-dismiss="modal"]:visible').click()

        cy.get('#drpDefaultCustomerSearch').select('Name')
        cy.get('#txtCustomer').type('Rishu')
        cy.get('.tt-dropdown-menu').first().click()

        // On Customer Details page
        cy.get('.PageLabes2').should('contain', 'Customer Details')
        cy.get('#lnkDrop').click()

        // On Garment Selection Screen
        cy.url().should('include', '/App/Bookings_New')
        cy.clickRandom('.Garment-Binding')
        cy.get('#txtGarmentRate').clear().type('100')
        cy.get('#achrAddItem').click()
        cy.get('#btnCancel').click()

        // On booking Screen
        cy.get('#chkPrintTag').then($el => {
            if ($el.is(':checked')) {
                cy.wrap($el)
                    .parent('label')
                    .click()
            }
        })
        cy.get('#btnCreateOrder').click()
        cy.selectRandomOptionTable('#drpCheckedBy')
        cy.get('#btnConfirmDate').click()
        cy.url().should('include', '/BookingSlip')
    })
})
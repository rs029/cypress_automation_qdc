import LoginPage from "../page_object/loginPage";
import CustomerPage from "../page_object/CustomerPage";
import GarmentSelectionPage from "../page_object/GarmentSelectionPage";
import BookingPage from "../page_object/BookingPage";
const userData = require('../fixtures/userData.json')
const lang = require('../fixtures/lang.json')

const loginPage = new LoginPage()

describe('Simple Order Booking Scenarios', () => {
    beforeEach(() => {
        cy.visitURL()
        cy.get('#qdc-current-language').click()
        cy.selectRandom('.qdc-language-card')
        CustomerPage.closeModal()
        loginPage.login(
            userData.GCCUser.username,
            userData.GCCUser.password,
            userData.GCCUser.storeCode
        )
    })

    it('Order Per Piece', () => {

        CustomerPage.closeModal()
        CustomerPage.searchCustomer('Rishu')
        CustomerPage.verifyCustomerDetails()
        CustomerPage.clickPerPieceOrder()

        // On Garment Selection Screen
        GarmentSelectionPage.verifyPage()
        GarmentSelectionPage.selectRandomGarment()
        GarmentSelectionPage.setRate('100')
        GarmentSelectionPage.addItem()
        GarmentSelectionPage.closePage()

        // On booking Screen
        BookingPage.uncheckPrintTagIfChecked()
        BookingPage.createOrder()
        BookingPage.skipPackage()
        // cy.selectRandomOptionTable('#drpCheckedBy')
        // cy.get('#btnConfirmDate').click()
        BookingPage.verifyBookingSlip()
    })

    it('Order Per Weight', () => {

        CustomerPage.closeModal()
        CustomerPage.searchCustomer('Rishu')

        CustomerPage.verifyCustomerDetails()
        CustomerPage.clickPerWeightOrder()

        // On selecting weights
        GarmentSelectionPage.verifyPage()
        GarmentSelectionPage.addGarmentWeightAndQuantity()
        GarmentSelectionPage.addItem()

        // On booking Screen
        BookingPage.createOrder()
        BookingPage.createOrderPerWeight()
        BookingPage.skipPackage()
        // cy.selectRandomOptionTable('#drpCheckedBy')
        // cy.get('#btnConfirmDate').click()
        BookingPage.verifyBookingSlip()
    })
})
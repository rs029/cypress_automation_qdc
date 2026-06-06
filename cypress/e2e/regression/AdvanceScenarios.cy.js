import CustomerPage from "../page_object/CustomerPage"
import LoginPage from "../page_object/loginPage"
import GarmentSelectionPage from "../page_object/GarmentSelectionPage"
import BookingPage from "../page_object/BookingPage"
import CommonSelector from "../page_object/CommonSelector"
import CustomerAdvance from "../page_object/CustomerAdvance"
const userData = require('../fixtures/userData.json')

describe('Advance Scenarios', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('stagingUrl'))
        cy.viewport(1920, 1080)
        // CustomerPage.closeModal()
        LoginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )
    })

    it('Amount Paid > Order Amount', () => {

        // CustomerPage.closeModal()
        CustomerPage.searchCustomer('Automation Testing')
        CustomerPage.verifyCustomerDetails()
        CustomerPage.clickPerPieceOrder()

        // On Garment Selection Screen
        GarmentSelectionPage.verifyPage()
        GarmentSelectionPage.selectRandomGarment()
        GarmentSelectionPage.setRate('100')
        GarmentSelectionPage.addItem()
        GarmentSelectionPage.closePage()

        // On booking Screen
        BookingPage.uncheckReceiptTagIfChecked()
        cy.get('#chkPrintReceipt').parent().invoke('prop','tagName')
        BookingPage.uncheckPrintTagIfChecked()
        BookingPage.setRate('500')
        BookingPage.createOrder()
        BookingPage.saveAsBalance()
        BookingPage.verifyBookingSlip()
        cy.getBookingNumber()


        // Navigate to Customer Advance & search customer
        cy.selectMenu('Customer', 'Advance Payment')
        cy.get('#txtCustName').type('Automation Testing')
        CommonSelector.dropdownSelection()
        cy.clickWithoutNewTab('#ctl00_ContentPlaceHolder1_grdReport_ctl02_hypCashBookDetails')

        // Verify the data on the page
        cy.get('@bookingNumber').then((bookingNo) => {
            CustomerAdvance.advanceReceived(bookingNo)
        })
    })

    it('CN applied on Booking', () => {

        // CustomerPage.closeModal()
        CustomerPage.searchCustomer('Automation Testing')
        CustomerPage.verifyCustomerDetails()
        CustomerPage.clickPerPieceOrder()

        // On Garment Selection Screen
        GarmentSelectionPage.verifyPage()
        GarmentSelectionPage.selectRandomGarment()
        GarmentSelectionPage.setRate('100')
        GarmentSelectionPage.addItem()
        GarmentSelectionPage.closePage()

        // On booking Screen
        BookingPage.uncheckReceiptTagIfChecked()
        cy.get('#chkPrintReceipt').parent().invoke('prop','tagName')
        BookingPage.uncheckPrintTagIfChecked()
        BookingPage.createOrder()
        BookingPage.verifyBookingSlip()
        cy.getBookingNumber()


        // Navigate to Customer Advance & search customer
        cy.selectMenu('Customer', 'Advance Payment')
        cy.get('#txtCustName').type('Automation Testing')
        CommonSelector.dropdownSelection()
        cy.clickWithoutNewTab('#ctl00_ContentPlaceHolder1_grdReport_ctl02_hypCashBookDetails')

        // Verify the data on the page
        cy.get('@bookingNumber').then((bookingNo) => {
            CustomerAdvance.advanceUsed(bookingNo)
        })
    })
})
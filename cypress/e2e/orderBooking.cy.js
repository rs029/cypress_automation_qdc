import LoginPage from "../page_object/loginPage";
import CustomerPage from "../page_object/CustomerPage";
import GarmentSelectionPage from "../page_object/GarmentSelectionPage";
import BookingPage from "../page_object/BookingPage";
import SelectMenu from "../page_object/SelectMenu";
import DeliveryScreen from "../page_object/DeliveryScreen";
const userData = require('../fixtures/userData.json')
const lang = require('../fixtures/lang.json')

describe('Simple Order Booking Scenarios', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('stagingUrl'))
        cy.viewport(1920, 1080)
        // cy.get('#qdc-current-language').click()
        // cy.selectRandom('.qdc-language-card')
        // CustomerPage.closeModal()
        LoginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )
    })

    it('Order Per Piece', () => {

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
        BookingPage.uncheckPrintTagIfChecked()
        BookingPage.createOrder()
        // BookingPage.skipPackage()
        // cy.selectRandomOptionTable('#drpCheckedBy')
        // cy.get('#btnConfirmDate').click()
        BookingPage.verifyBookingSlip()
    })

    it('Order Per Weight', () => {

        // CustomerPage.closeModal()
        CustomerPage.searchCustomer('Automation Testing')

        CustomerPage.verifyCustomerDetails()
        CustomerPage.clickPerWeightOrder()

        // On selecting weights
        GarmentSelectionPage.verifyPage()
        GarmentSelectionPage.addGarmentWeightAndQuantity()
        GarmentSelectionPage.addItem()

        // On booking Screen
        BookingPage.createOrder()
        BookingPage.createOrderPerWeight()
        // BookingPage.skipPackage()
        // cy.selectRandomOptionTable('#drpCheckedBy')
        // cy.get('#btnConfirmDate').click()
        BookingPage.verifyBookingSlip()
    })

    it.only('Order Per Piece -  Complete Flow', () => {

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
        BookingPage.uncheckPrintTagIfChecked()
        BookingPage.createOrder()
        // BookingPage.skipPackage()
        // cy.selectRandomOptionTable('#drpCheckedBy')
        // cy.get('#btnConfirmDate').click()
        BookingPage.verifyBookingSlip()
        cy.getBookingNumber()

        // Now navigate to the Process & Mark Ready for Pickup
        SelectMenu.dropdownMenu('Customer', 'Home')
        cy.contains('span', 'Search Invoice').click()
        // .prev('#rdbInvoice')
        // .check()
        cy.get('@bookingNumber').then((bookingNo) => {
            cy.get('#txtBarcode').type(bookingNo)
            cy.get('.tt-dropdown-menu')
                .should('be.visible')
            cy.get('.tt-suggestion').first().click()
        })
        SelectMenu.selectProcessMenu()
        // SelectMenu.selectOption('#mnuProcess', 'Process', 'Send to Workshop')
        cy.get('@bookingNumber').then((bookingNo) => {
            cy.get('#txtBarcode').type(bookingNo + '{enter}')
        })
        cy.get('#chkIsActive').click()
        cy.get('#btnMoveRight').click()
        cy.get('#btnSaveChallan').click()
        cy.get('#drpMultiStage').select('Ready')
        cy.get('#btnSend').click()
        SelectMenu.dropdownMenu('Customer', 'Home')
        cy.contains('span', 'Search Invoice').click()
        cy.get('@bookingNumber').then((bookingNo) => {
            cy.get('#txtBarcode').type(bookingNo)
            cy.get('.tt-dropdown-menu')
                .should('be.visible')
            cy.get('.tt-suggestion').first().click()
        })
        cy.get('#btnDelAndAcceptPayment').click()
        BookingPage.skipPackage()
        
        cy.get('#btnDeliver').click()
        cy.get('#btnAccept').click()
        DeliveryScreen.verifyDeliveryScreen('Delivered')
    })
})
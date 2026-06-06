import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage';
import CustomerLandingPage from '../../support/pages/CustomerLandingPage';
import GarmentSelectionPage from '../../support/pages/GarmentSelectionPage'
import BookingPage from '../../support/pages/BookingPage';
import MenuPage from '../../support/pages/MenuPage';
import CustomerActionPage from '../../support/pages/CustomerActionPage';
import DeliveryPage from '../../support/pages/DeliveryPage';

import CustomerLandingPageAssertion from '../../support/assertions/CustomerLandingPageAssertion';
import GarmentSelectionPageAssertion from '../../support/assertions/GarmentSelectionPageAssertion';
import BookingPageAssertion from '../../support/assertions/BookingPageAssertion'; 
import DeliverPageAssertion from '../../support/assertions/DeliverPageAssertion';

import customer from "../../fixtures/customer.json"
import lang from "../../fixtures/lang.json"
import userData from '../../fixtures/userData.json'

describe('Simple Order Booking Scenarios', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('stagingUrl'))
        cy.viewport(1920, 1080)

        LoginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )
    })

    it('Order Per Piece', () => {

        // Home Page - Search Customer and click on Per Piece Order
        HomePage.searchCustomer(customer.regularCustomer)
        CustomerLandingPageAssertion.verifyCustomerDetailsLabel()
        CustomerLandingPage.clickPerPieceOrder()


        // On Garment Selection Screen
        GarmentSelectionPageAssertion.verifyPage()
        GarmentSelectionPage.selectRandomGarment()
        GarmentSelectionPage.setRate()
        GarmentSelectionPage.addItem()
        GarmentSelectionPage.closePage()

        // On booking Screen
        BookingPage.uncheckPrintTagIfChecked()
        BookingPage.createOrder()
        BookingPageAssertion.verifyBookingSlip()
    })

    it('Order Per Weight', () => {

        // Home Page - Search Customer and click on Per Weight Order
        HomePage.searchCustomer(customer.regularCustomer)
        CustomerLandingPageAssertion.verifyCustomerDetailsLabel()
        CustomerLandingPage.clickPerWeightOrder()

        // On selecting weights
        GarmentSelectionPageAssertion.verifyPage()
        GarmentSelectionPage.addGarmentWeightAndQuantity()
        GarmentSelectionPage.addItem()

        // On booking Screen
        BookingPage.createOrder()
        BookingPage.createOrderPerWeight()
        BookingPageAssertion.verifyBookingSlip()
    })

    it('Order Per Piece - Complete Flow', () => {

        // CustomerPage.closeModal()
        HomePage.searchCustomer(customer.regularCustomer)
        CustomerLandingPageAssertion.verifyCustomerDetailsLabel()
        CustomerLandingPage.clickPerPieceOrder()

        // On Garment Selection Screen
        GarmentSelectionPageAssertion.verifyPage()
        GarmentSelectionPage.selectRandomGarment()
        GarmentSelectionPage.setRate()
        GarmentSelectionPage.addItem()
        GarmentSelectionPage.closePage()

        // On booking Screen
        BookingPage.createBookingPerPieceOrder()

        // Now navigate to the Process & Mark Ready for Pickup
        CustomerActionPage.searchInvoice()

        CustomerActionPage.markReadyForPickup()

        // Pay & Deliver through Delivery Screen
        CustomerActionPage.searchInvoice()
        DeliveryPage.clickDeliverAndAcceptPayment()
        DeliveryPage.deliverGarments()
        DeliveryPage.clickAcceptButton()
        DeliverPageAssertion.verifyDeliveryScreen('Delivered')
    })

    it.only('Order Per Weight - Complete Flow', () => {

        // CustomerPage.closeModal()
        HomePage.searchCustomer(customer.regularCustomer)
        CustomerLandingPageAssertion.verifyCustomerDetailsLabel()
        CustomerLandingPage.clickPerWeightOrder()

        // On selecting weights
        GarmentSelectionPageAssertion.verifyPage()
        GarmentSelectionPage.addGarmentWeightAndQuantity()
        GarmentSelectionPage.addItem()

        // On booking Screen
        BookingPage.createBookingPerWeightOrder()

        // Now navigate to the Process & Mark Ready for Pickup
        CustomerActionPage.searchInvoice()
        CustomerActionPage.markReadyForPickup()

        // Pay & Deliver through Delivery Screen
        CustomerActionPage.searchInvoice()
        DeliveryPage.clickDeliverAndAcceptPayment()
        BookingPage.skipPackage()

        DeliveryPage.clickDeliverButton()
        DeliveryPage.clickAcceptButton()
        DeliverPageAssertion.verifyDeliveryScreen('Delivered')
    })
})
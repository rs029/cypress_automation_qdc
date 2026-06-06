import BasePage from "./BasePage";
import BookingPageAssertion from "../assertions/BookingPageAssertion";
import BookingPageLocator from "../locators/BookingPageLocator";

class BookingPage extends BasePage {
    uncheckPrintTagIfChecked() {
        cy.get(BookingPageLocator.tagPrintingCheckbox).then($el => {
            if ($el.is(':checked')) {
                cy.wrap($el)
                    .parent('label')
                    .click()
            }
        })
    }

    uncheckReceiptTagIfChecked() {
        cy.get(BookingPageLocator.tagReceiptCheckbox)
            .then($el => {
                if ($el.is(':checked')) {
                    cy.wrap($el)
                        .parent('label')
                        .click()
                }
            })
    }

    setRate() {
        this.type(BookingPageLocator.inputAdvance, '100')   
    }

    createOrder() {
        this.click(BookingPageLocator.createOrderButton)
    }

    createOrderPerWeight() {
        this.click(BookingPageLocator.createOrderPerWeightButton)
    }

    saveAsBalance() {
        this.click(BookingPageLocator.saveAsBalanceButton)
    }

    skipPackage() {
        this.click(BookingPageLocator.skipPackageButton)
    }

    createBookingPerPieceOrder() {
        this.uncheckPrintTagIfChecked()
        this.createOrder()
        BookingPageAssertion.verifyBookingSlip()
        cy.getBookingNumber()
    }

    createBookingPerWeightOrder() {
        this.createOrder()
        this.createOrderPerWeight()
        BookingPageAssertion.verifyBookingSlip()
        cy.getBookingNumber()
    }
}

export default new BookingPage()
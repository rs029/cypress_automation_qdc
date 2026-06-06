import BasePage from "./BasePage";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import ProcessPage from "./ProcessPage";
import CommonSelector from "../../page_object/CommonSelector";

class CustomerActionPage extends BasePage {
    searchInvoice() {
        MenuPage.dropdownMenu('Customer', 'Home')
        HomePage.clickSearchInvoice()

        cy.get('@bookingNumber').then((bookingNo) => {
            cy.get('#txtBarcode').type(bookingNo)
            CommonSelector.dropdownSelection()
        })
    }

    markReadyForPickup() {
        MenuPage.selectProcessMenu()
        // SelectMenu.selectOption('#mnuProcess', 'Process', 'Send to Workshop')
        cy.get('@bookingNumber').then((bookingNo) => {
            cy.get('#txtBarcode').type(bookingNo + '{enter}')
        })
        ProcessPage.markReady()
    }
}

export default new CustomerActionPage()
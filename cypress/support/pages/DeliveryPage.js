import BasePage from "./BasePage";
import DeliveryPageLocator from "../locators/DeliveryPageLocator";

class DeliveryPage extends BasePage {

    deliverGarments() {
        cy.get('body').then(($body) => {

            if ($body.find(DeliveryPageLocator.packageSkipButton).length > 0) {

                cy.get(DeliveryPageLocator.packageSkipButton).click()

            }

            cy.get(DeliveryPageLocator.deliverButton).click()

        })
    }

    clickDeliverAndAcceptPayment() {
        this.click(DeliveryPageLocator.deliverAndAcceptPaymentButton)
    }

    clickAcceptButton() {
        this.click(DeliveryPageLocator.aceptButton)
    }

    clickDeliverButton() {
        this.click(DeliveryPageLocator.deliverButton)
    }
}

export default new DeliveryPage()
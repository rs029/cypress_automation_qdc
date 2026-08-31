import BasePage from "./BasePage";
import CustomerLandingPageLocator from "../locators/CustomerLandingPageLocator";

class CustomerLandingPage extends BasePage {
    clickPerPieceOrder() {
        this.click(CustomerLandingPageLocator.perPieceOrderLink)
    }

    clickPerWeightOrder() {
        this.click(CustomerLandingPageLocator.perWeightOrderLink)
    }
}

export default new CustomerLandingPage()
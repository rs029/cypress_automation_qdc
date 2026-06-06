import HomePageLocator from "../locators/HomePageLocator"
import BasePage from "./BasePage"


class HomePage extends BasePage {
    searchCustomer(customerName) {
        this.select(HomePageLocator.searchCustomer, 'Name')
        this.type(HomePageLocator.searchInput, customerName)
        this.verifyVisible(HomePageLocator.searchDropdown)
        this.clickFirst(HomePageLocator.searchSuggestion)
    }

    clickSearchInvoice() {
        this.clickByText('span', 'Search Invoice')
    }
}

export default new HomePage()
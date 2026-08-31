import CustomerLandingPageLocator from "../locators/CustomerLandingPageLocator";

class CustomerLandingPageAssertion {
    verifyCustomerDetailsLabel() {
        cy.fixture('lang').then(lang => {
            cy.get(CustomerLandingPageLocator.customerDetailsLabel).invoke('text')
                .should('be.oneOf', lang.CustomerDetails)
        })
    }
}

export default new CustomerLandingPageAssertion()
class BasePage {

    click(locator) {
        cy.get(locator).click()
    }

    clickFirst(locator) {
        cy.get(locator).first().click()
    }

    clickByText(tag, text) {
        cy.contains(tag, text).click()
    }
    
    clickAfterVisible(locator) {
        cy.get(locator).should('be.visible').click()
    }

    type(locator, value) {
        cy.get(locator).clear().type(value)
    }

    select(locator, value) {
        cy.get(locator).select(value)
    }

    verifyVisible(locator) {
        cy.get(locator).should('be.visible')
    }
}

export default BasePage

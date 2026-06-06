import LoginLocator from '../locators/LoginLocator'

class LoginAssertion {
    verifyLoginPageTitle() {
        cy.title().should('include', 'Quick Dry Cleaning Software - Login')
    }

    verifyDashboardTitle() {
        cy.title().should('include', 'Quick Drycleaning Software')
    }

    verifyWrongPasswordError() {
        cy.contains('Your user name or password is incorrect')
            .should('be.visible')
    }

    verifyWrongUsernameError() {
        cy.contains('Your user name or password is incorrect')
            .should('be.visible')
    }

    verifyErrorMessageForWrongStoreCode() {
        cy.get(LoginLocator.errorMessage)
            .should('have.text', 'Please enter correct store code.')
    }

    verifyRequiredFieldAlert() {

        cy.on('window:alert', (text) => {
            const expectedLines = [
                'User Id is a required field',
                'Password is a required field',
                'Branch Pin is a required field'
            ]

            expectedLines.forEach((line) => {
                expect(text).to.include(line)
            })
        })

    }
}

export default new LoginAssertion()
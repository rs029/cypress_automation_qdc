import LoginPage from '../../support/pages/LoginPage'
import userData from '../../fixtures/userData.json'
import loginAssertion from '../../support/assertions/loginAssertion'

describe('Login Test', () => {

    beforeEach(() => {
        cy.visitURL()
    })

    afterEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })

    it('Visits website & check Title', () => {
        loginAssertion.verifyLoginPageTitle()
    })

    it('Logging In - Positive case - all fields are correct & filled', () => {
        LoginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )
        loginAssertion.verifyDashboardTitle()

    })

    it('Login - Negative Scenario, Wrong password', () => {
        LoginPage.login(
            userData.validUser.username,
            userData.invalidUser.password,
            userData.validUser.storeCode
        )

        loginAssertion.verifyWrongPasswordError()
    })

    it('Login - Negative Scenario, Wrong username', () => {
        LoginPage.login(
            userData.invalidUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )

        loginAssertion.verifyWrongUsernameError()
    })

    it('Login - Negative Scenario, Wrong store code', () => {
        LoginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.invalidUser.storeCode
        )

        loginAssertion.verifyErrorMessageForWrongStoreCode()
    })

    it('Login -  Empty Fields', () => {

        LoginPage.clickLoginButton()
        loginAssertion.verifyRequiredFieldAlert()
    })
})
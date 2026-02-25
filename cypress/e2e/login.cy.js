import LoginPage from '../page_object/loginPage'
const userData = require('../fixtures/userData.json')

const loginPage = new LoginPage()

describe('Login Test', () => {

    beforeEach(() => {
        cy.visitURL()
    })

    it('Visits website & check Title', () => {
        cy.title().should('include', 'Quick Dry Cleaning Software - Login')
    })

    it('Logging In - Positive case - all fields are correct & filled', () => {
        loginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )
        cy.title().should('include', 'Quick Drycleaning Software')
    })

    it('Login - Negative Scenario, Wrong password', () => {
        loginPage.login(
            userData.validUser.username,
            userData.invalidUser.password,
            userData.validUser.storeCode
        )

        // cy.get('#lblMsg')
        // .should('contain', 'incorrect')
        cy.contains('Your user name or password is incorrect')
        .should('be.visible')
    })

    it('Login - Negative Scenario, Wrong username', () => {
        loginPage.login(
            userData.invalidUser.username,
            userData.validUser.password,
            userData.validUser.storeCode
        )

        // cy.get('#lblMsg')
        // .should('contain', 'incorrect')
        cy.contains('Your user name or password is incorrect')
        .should('be.visible')
    })

    it('Login - Negative Scenario, Wrong store code', () => {
        loginPage.login(
            userData.validUser.username,
            userData.validUser.password,
            userData.invalidUser.storeCode
        )

        // cy.get('#lblMsg')
        // .should('contain', 'incorrect')
        // cy.contains('Your user name or password is incorrect')
        // .should('be.visible')
        cy.get('#lblMsg')
        .should('have.text', 'Please enter correct store code.')
    })

    it('Login -  Empty Fields', () => {
        cy.get('input[name="btnLogin"]').click()
        
        cy.on('window:alert', (text) => {
            const expectedLines = [
                'User Id is a required field',
                'Password is a required field',
                'Branch Pin is a required field'
            ]
            // expect(text).to.eq(
            //     '- User Id is a required field and cannot be left blank\n' +
            //     '- Password is a required field and cannot be left blank\n' +
            //     '- Branch Pin is a required field and cannot be left blank'
            // )

            expectedLines.forEach((line) => {
                expect(text).to.include(line)
            })
        })
    })
})
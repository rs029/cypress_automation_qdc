import LoginPage from "../page_object/loginPage"  
const userData = require('../fixtures/userData.json')

const loginPage = new LoginPage()

describe('Pickup & Dropoff scenarios', () => {
    beforeEach(() => {
        cy.visitURL()
        loginPage.login(
            userData.GCCUser.username,
            userData.GCCUser.password,
            userData.GCCUser.storeCode
        )
    })

    it('Create Pickup', () => {
        cy.get('[data-dismiss="modal"]:visible').click()

        // Select Home Pickup Schduler from Menu
        cy.get('#sidebarNameToggle')
        .should('be.visible')
        .click()
        cy.get('[data-localize="StoreMenu.Menu.PickUp"]').click()
        cy.get('[data-localize="StoreMenu.PickUp.HomePickUpScheduler"]').click()

        // Verify Home Pickup Scheduler page
        cy.url().should('contain', '/frmHomePickUpScheduler')

        // Search Customer and schedule a pickup
        


    })
})
import CommonSelector from "../page_object/CommonSelector"
import CustomerPage from "../page_object/CustomerPage"
import DropOffSchedulerPage from "../page_object/DropOffSchedulerPage"
import LoginPage from "../page_object/loginPage"  
import Menu from "../page_object/Menu"
import PickupSchedulerPage from "../page_object/PickupSchedulerPage"
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
        CustomerPage.closeModal()

        // Select Home Pickup Schduler from Menu
        Menu.menuIcon()
        Menu.pickupMenu()
        Menu.homePickupSubMenu()

        // Verify Home Pickup Scheduler page
        PickupSchedulerPage.verifyPage()

        // Search Customer and schedule a pickup
        PickupSchedulerPage.searchCustomer()
        CommonSelector.saveButton()
        PickupSchedulerPage.verifySuccess()
    })

    it('Create DropOff from latest Pickup', () => {
        CustomerPage.closeModal()

        // Select Home Pickup Schduler from Menu
        Menu.menuIcon()
        Menu.pickupMenu()
        Menu.homePickupSubMenu()

        // Verify Home Pickup Scheduler page
        PickupSchedulerPage.verifyPage()

        // Search Customer and schedule a pickup
        PickupSchedulerPage.searchCustomer()
        CommonSelector.saveButton()
        PickupSchedulerPage.verifySuccess()

        // Now store the selected pickup no.
        // const value = cy.getLatestValue().then(pickupNo => pickupNo.trim())
        cy.getLatestValue().then((pickupNo) => {
            cy.wrap(pickupNo).as('pickupNo')
        })

        // Moving to the DropOff Page
        Menu.menuIcon()
        Menu.homeDropOffSubMenu()
        DropOffSchedulerPage.verifyPage()

        // Search Pickup No.
        cy.get('@pickupNo').then((pickupNo) => {
            DropOffSchedulerPage.searchPickupNo(pickupNo)
        })
        CommonSelector.dropdownSelection()
        CommonSelector.saveButton()
        DropOffSchedulerPage.verifySuccess()
    })
})
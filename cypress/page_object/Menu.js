class Menu {
    menuIcon() {
        cy.get('#sidebarNameToggle')
        .should('be.visible')
        .click()
    }

    pickupMenu() {
        cy.get('[data-localize="StoreMenu.Menu.PickUp"]').click()
    }

    homePickupSubMenu() {
        cy.get('[data-localize="StoreMenu.PickUp.HomePickUpScheduler"]').click()
    }

    homeDropOffSubMenu() {
        cy.get('[data-localize="StoreMenu.PickUp.HomeDropOffScheduler"]').click()
    }
}

export default new Menu()
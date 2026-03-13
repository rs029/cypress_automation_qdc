// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitURL', () => {
    cy.visit('/Login')
    cy.get('[data-dismiss="modal"]:visible').click()
})

Cypress.Commands.add('clickRandom', (selector) => {
    cy.get(selector).then(($el) => {
        const randomIndex = Math.floor(Math.random() * $el.length)
        cy.wrap($el.eq(randomIndex)).click()
    })
})

Cypress.Commands.add('selectRandomOptionTable', (selector, options = {}) => {
    const {
        skipFirst = true,
        avoidDisabled = true,
        alias = 'selectedOption'
    } = options

    // wait until dropdown is visible
    cy.get(selector)
        .should('be.visible')
        .and('not.be.disabled')

    // wait until dropdowns are properly loaded
    cy.get(`${selector} option`)
        .should('have.length.greaterThan', skipFirst ? 1 : 0)

    cy.get(selector)
        .find('option')
        .then($options => {
            let validOptions = [...$options]

            if (skipFirst) {
                validOptions = validOptions.slice(1)
            }

            if (avoidDisabled) {
                validOptions = validOptions.filter(opt => !opt.disabled)
            }

            expect(validOptions.length).to.be.greaterThan(0)

            const randomIndex = Cypress._.random(0, validOptions.length - 1)
            const selectedOption = validOptions[randomIndex]

            const value = selectedOption.value
            const text = selectedOption.innerText

            cy.log(`Stable Random Selection: ${text}`)

            if (alias) {
                cy.wrap({ value, text }).as(alias)
            }

            cy.get(selector)
                .select(value)
                .should('have.value', value)
        })
})

Cypress.Commands.add('selectRandom', (selector) => {
    cy.get(selector).then(($els) => {
        const randomIndex = Cypress._.random(0, $els.length - 1)
        cy.wrap($els.eq(randomIndex)).click()
    }) 
})

Cypress.Commands.add('getLatestValue', () => {
    return cy.get('#grdEntry tbody tr:has(td)')
        .should('have.length.greaterThan', 0)
        .first()
        .find('td')
        .eq(2)
        .invoke('text')
        .then((text) => {
            return text.trim()
        })
})

Cypress.Commands.add('getBookingNumber', () => {
    return cy.url().then((url) => {
        const bnValue = new URL(url).searchParams.get('BN')
        const bookingNo = bnValue.split('-')[0]
        cy.wrap(bookingNo).as('bookingNumber')
    })
})

Cypress.Commands.add('selectMenu', (menu, option) => {
    // Open Main Menu
    cy.contains('a.dropdown-toggle', menu)
            .should('be.visible')
                .click()

    // Open Sub-Menu
    cy.get('.dropdown-menu')
        .contains('li a', option)
            .should('be.visible')
                .click()
})

Cypress.Commands.add('clickWithoutNewTab', (selector) => {
    cy.get(selector)
        .invoke('removeAttr', 'target')
            .click()
})
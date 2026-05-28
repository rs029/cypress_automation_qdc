class SelectMenu {
    selectOption(selector, optionText, subMenu) {
        cy.get(selector).should('contain', optionText).click()
        cy.contains(subMenu).click()
    }

    dropdownMenu(optionText, subMenu) {
        cy.contains('a.dropdown-toggle', optionText)
            .click()
            .parent()
            .find('a')
            .contains(subMenu)
            .should('be.visible')
            .click()
    }

    processMap = {
        'Unprocessed': 'Send to Workshop',
        'To be Received from Workshop': 'Receive from Workshop',
        'Pending For Finishing': 'Pending for Finishing'
    }

    selectProcessMenu() {
        cy.get("td.verAline")
            .each(($el) => {

                const text = $el.text().trim()

                if (!text) return

                for (const key in this.processMap) {

                    if (text.includes(key)) {
                        const processName = this.processMap[key]
                        cy.log('Matched = ' + processName)

                        cy.get('#mnuProcess')
                            .should('be.visible')
                            .click()
                        cy.contains(processName).click()

                        return false
                    }
                }
            })
    }

    selectProcessMenuPerWeight() {
        // cy.contains('tr', orderNumber)
            cy.get('td.verAline')
            .each(($el) => {

                const text = $el.text().trim()

                if (!text) return

                for (const key in this.processMap) {

                    if (text.includes(key)) {
                        const processName = this.processMap[key]
                        cy.log('Matched = ' + processName)

                        cy.get('#mnuProcess')
                            .should('be.visible')
                            .click()
                        cy.contains(processName).click()

                        return false
                    }
                }
            })
    }
}

export default new SelectMenu()
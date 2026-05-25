class ProcessPage {
    markReady() {
        cy.get('#chkIsActive').click()
        cy.get('#btnMoveRight').click()
        cy.get('#btnSaveChallan').click()
        cy.get('#drpMultiStage').select('Ready')
        cy.get('#btnSend').click()
    }

    markReadyPerWeight() {
        cy.get('#chkIsActive').click()
        cy.get('#btnMoveRight').click()
        cy.get('#btnSaveChallan').click()
    }
}

export default new ProcessPage()
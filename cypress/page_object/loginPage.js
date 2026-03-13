class LoginPage {

    visitURL(){
        cy.visit('/login')
    }

    login(username, password, storeCode){
        cy.get('input[name="txtUserId"]').type(username)
        cy.get('input[name="txtPassword"]').type(password)
        cy.get('input[name="txtBranchPin"]').type(storeCode)
        cy.get('input[name="btnLogin"]').click()
    }
}

export default new LoginPage()
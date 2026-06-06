class SessionManager {

    static login(username,password,storeCode){

        cy.session(
            [username,password,storeCode],
            () => {

                cy.visit('/Login')

                LoginPage.login(
                    username,
                    password,
                    storeCode
                )

            }
        )

    }

}
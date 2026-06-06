import BasePage from "./BasePage";
import LoginLocator from "../locators/LoginLocator";

class LoginPage extends BasePage {
    login(username, password, storeCode) {
        this.type(LoginLocator.username, username)
        this.type(LoginLocator.password, password)
        this.type(LoginLocator.storeCode, storeCode)
        this.click(LoginLocator.loginButton)
    }
    clickLoginButton() {
        this.click(LoginLocator.loginButton)
    }
}

export default new LoginPage()
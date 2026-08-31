import BasePage from "../pages/BasePage"
import ProcessPageLocator from "../locators/ProcessPageLocator"

class ProcessPage extends BasePage {
    markReady() {
        this.click(ProcessPageLocator.checkIfActive),
        this.click(ProcessPageLocator.moveRightButton),
        this.click(ProcessPageLocator.saveChallanButton),
        this.select(ProcessPageLocator.multiStageDropdown, 'Ready'),
        this.click(ProcessPageLocator.sendButton)
    }

    markReadyPerWeight() {
        this.click(ProcessPageLocator.checkIfActive),
        this.click(ProcessPageLocator.moveRightButton),
        this.click(ProcessPageLocator.saveChallanButton)
    }
}

export default new ProcessPage()
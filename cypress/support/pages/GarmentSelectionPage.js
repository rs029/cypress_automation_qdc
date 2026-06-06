import BasePage from "./BasePage"
import GarmentSelectorPageLocator from "../locators/GarmentSelectorPageLocator"

class GarmentSelectionPage extends BasePage {
    selectRandomGarment() {
        cy.clickRandom(GarmentSelectorPageLocator.garment)
    }

    addGarmentWeightAndQuantity() {
        this.type(
            GarmentSelectorPageLocator.weightInput,
            '1'
        )
        this.type(
            GarmentSelectorPageLocator.quantityInput,
            '1'
        )
    }

    setRate() {
        this.type(
            GarmentSelectorPageLocator.rateInput,
            '100'
        )
    }

    addItem() {
        this.click(GarmentSelectorPageLocator.addItemButton)
    }

    closePage() {
        this.click(GarmentSelectorPageLocator.cancelButton) 
    } 
}

export default new GarmentSelectionPage()
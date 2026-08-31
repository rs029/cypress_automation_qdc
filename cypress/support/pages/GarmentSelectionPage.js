import BasePage from "./BasePage"
import GarmentSelectorPageLocator from "../locators/GarmentSelectorPageLocator"


class GarmentSelectionPage extends BasePage {
    selectRandomGarment() {
        cy.clickRandom(GarmentSelectorPageLocator.garment)
    }

    addGarmentWeight(weight) {
        this.type(
            GarmentSelectorPageLocator.weightInput,
            weight
        )
    }

    addGarmentQuantity(quantity) {
        this.type(
            GarmentSelectorPageLocator.quantityInput,
            quantity
        )
    }

    setRate(rate) {
        this.type(
            GarmentSelectorPageLocator.rateInput,
            rate
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
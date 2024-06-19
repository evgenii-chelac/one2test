import { Locator, Page } from "playwright/test";
import { HeliumAnyPage } from "./h10AnyPage";

export class HeliumPricingPage extends HeliumAnyPage {

    readonly table: {
        productResearchRows: {
            rowExpander: Locator,
            diamondColumn: Locator;
        }
    }

    constructor(page: Page) {
        super(page);

        this.table = {
            productResearchRows: {
                rowExpander: page.locator('//div[@id ="pricing-body"]/div[1]/div[1]'),
                diamondColumn: page.locator("(//div[contains (@class, 'pricing-body-category-description')])[1]//div[contains (@class, 'pricing-body-col-2')]/p/i"),
            }
        }
    }

}
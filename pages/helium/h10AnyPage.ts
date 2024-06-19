import { Locator, Page } from "playwright/test";
import { AnyPage } from "../anyPage";

export class HeliumAnyPage extends AnyPage {

    readonly menu: {
        pricingButton: Locator;
    }

    constructor(page: Page) {
        super(page);

        this.menu = {
            pricingButton: page.locator("(//a[text()= 'Pricing'])[1]")
        }
    }

}
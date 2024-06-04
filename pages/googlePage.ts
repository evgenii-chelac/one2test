import { Locator, Page } from "playwright/test";
import { AnyPage } from "./anyPage";

export class GooglePage extends AnyPage {

    readonly textArea: Locator;
    readonly results: {
        imageTitles: Locator,
    }

    constructor(page: Page) {
        super(page);

        this.textArea = page.locator('(//textarea)[1]')
        this.results = {
            imageTitles: page.locator("//div[contains(text(), 'Nicolas Cage')]")
        }
    }

}
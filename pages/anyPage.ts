import { Page } from "playwright/test";


export class AnyPage {

    page;

    constructor(page: Page) {
        this.page = page
    }

}
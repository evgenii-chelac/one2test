import { AnyPage } from "../../anyPage";

export class InstrumentPage extends AnyPage {

    readonly Url = `exchange/instruments`;

    public goto() {
        this.page.goto(this.Url);
    }

    readonly createButton = this.page.locator('//button[@data-testid="open-new-entity-form"]');
    readonly instrumentForm = {
        //first page
        symbolField: this.page.locator('//input[@id="symbol"]'),
        quoteCurrencyField: this.page.locator('//input[@id="quoteCurrency"]'),
        descriptionField: this.page.locator('//input[@id="description"]'),
        calendarField: this.page.locator('//input[@id="calendarId"]'),
        calendar0Option: this.page.locator('//li[@id="calendarId-option-0"]'),
        isActiveChecker: this.page.locator('//input[@id="isActive"]'),
        nextButton1: this.page.locator('(//button[@data-testid="instrument-form-next-btn"])[1]'),
        //second page
        pricePrecisionField:this.page.locator('//input[@id="pricePrecision"]'),
        quantityPrecisionField:this.page.locator('//input[@id="quantityPrecision"]'),
        minQuantityField:this.page.locator('//input[@id="minQuantity"]'),
        maxQuantityField:this.page.locator('//input[@id="maxQuantity"]'),
        nextButton2: this.page.locator('(//button[@data-testid="instrument-form-next-btn"])[2]'),
        //other pages
        nextButton3: this.page.locator('(//button[@data-testid="instrument-form-next-btn"])[3]'),
        nextButton4: this.page.locator('(//button[@data-testid="instrument-form-next-btn"])[4]'),
        saveButton: this.page.locator('//button[@data-testid="submit-btn"]'),
    }
    readonly tableSearchField = this.page.locator('//input[@id="table-search"]');
    readonly symbolCell = this.page.locator('//td[@data-testid="symbol-cell"]');
}

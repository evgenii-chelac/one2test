import { AnyPage } from "../../anyPage";

export class CalendarPage extends AnyPage {

    readonly Url = `exchange/calendars`;

    public goto() {
        this.page.goto(this.Url);
    }

    readonly createButton = this.page.locator('//button[@data-testid="open-new-entity-form"]');
    readonly calendarForm = {
        nameField: this.page.locator('//input[@id="name"]'),
        timeZoneField: this.page.locator('//div[@id="mui-component-select-Time Zone (UTC)"]'),
        timeZone300: this.page.locator('//li[@data-testid="timeZone-select-option-+03:00"]'),
        timeZone400: this.page.locator('//li[@data-testid="timeZone-select-option-+04:00"]'),
        saveButton: this.page.locator('//button[@data-testid="submit-btn"]'),
    }
    readonly tableSearchField = this.page.locator('//input[@id="table-search"]');
    readonly nameCell = this.page.locator('//td[@data-testid="name-cell"]');
    readonly timeZoneCell = this.page.locator('//td[@data-testid="timeZone-cell"]');

    readonly editButton = this.page.locator('//button[@data-testid="open-edit-entity-form"]');
    readonly auctionsButton = this.page.locator('//button[@data-testid="open-calendar-auctions"]');
    readonly auctionForm = {
        createAuction: this.page.locator('//div[@data-testid="auctions-wrapper"]//.//button[@data-testid="open-new-entity-form"]'),
        trigger: {
            input: this.page.locator('//input[@id="trigger"]'),
            'Time Based': this.page.locator('//li[@data-testid="trigger-select-option-TimeBased"]'),
            'Resume': this.page.locator('//li[@data-testid="trigger-select-option-Resume"]'),
            'Auto Resume': this.page.locator('//li[@data-testid="trigger-select-option-AutoResume"]'),
        },
        durationField: this.page.locator('//*[@data-testid="durationNumber-input"]'),
        matchingAlgorithm: {
            input: this.page.locator('//*[@id="matchingAlgorithm"]'),
            'Price & Time': this.page.locator('//*[@data-testid="matchingAlgorithm-select-option-PRICE_AND_TIME"]'),
            'Equilibrium Price': this.page.locator('//*[@data-testid="matchingAlgorithm-select-option-EQUILIBRIUM_PRICE"]'),
            'Equilibrium Price 2': this.page.locator('//*[@data-testid="matchingAlgorithm-select-option-EQUILIBRIUM_PRICE_2"]'),
        },
        eventsPublication: {
            input: this.page.locator('//*[@id="eventsModes"]'),
            'LIT': this.page.locator('//*[@data-testid="eventsModes-select-LIT-checkbox"]'),
            'Indicative Price': this.page.locator('//*[@data-testid="eventsModes-select-INDICATIVE_PRICE-checkbox"]'),
        },
        allowedTIF: {
            input: this.page.locator('//*[@id="allowedTimeInForces"]'),
            'GTC': this.page.locator('//*[@data-value="GTC"]'),
            'GTD': this.page.locator('//*[@data-value="GTD"]'),
            'GAA': this.page.locator('//*[@data-value="GAA"]'),
            'DAY': this.page.locator('//*[@data-value="DAY"]'),
            'IOC': this.page.locator('//*[@data-value="IOC"]'),
        },
        saveEditButton: this.page.locator('//*[@data-testid="save-edit"]'),
    };
    readonly submitButton = this.page.locator('//*[@data-testid="submit-btn"]');
}
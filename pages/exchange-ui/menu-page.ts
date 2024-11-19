import { AnyPage } from "../anyPage";

export class MenuPage extends AnyPage {

    public goto() {
        this.page.goto('')
    }

    readonly exchangeButton = this.page.locator('//div[@data-testid="nav-menu-button-exchange"]');
    readonly settingsButton = this.page.locator('//div[@data-testid="nav-menu-button-settings"]');

    readonly exchange = {
        calendarsButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-calendars"]'),
        instrumentsButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-instruments"]'),
        tickSizesButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-tickSizes"]'),
        mpButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-mps"]'),
        cbrButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-cbrs"]'),
        reportsButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-reports"]'),
        marketWatchButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-market-watch"]'),
        notificationsButton : this.page.locator('//div[@data-testid="nav-menu-button-exchange-notifications"]'),
    };
}

import { AnyPage } from "../anyPage";

export class LogInPage extends AnyPage {

    public goto() {
        this.page.goto('')
    }

    readonly loginField = this.page.locator('//input[@inputmode="email"]');
    readonly passField = this.page.locator('//input[@name="password"]');
    readonly continueButton = this.page.locator('//button[contains(text(),"Continue")]');
}

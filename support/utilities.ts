import { Locator, Page } from "@playwright/test";
import { CalendarPage } from "../pages/exchange-ui/exchange/calendar.page";
import { InstrumentPage } from "../pages/exchange-ui/exchange/instrument.page";
import { LogInPage } from "../pages/exchange-ui/login-page";
import { Account, CalendarObj, InstrumentObj } from "../types";
import { Data } from "./generator";
import { AnyPage } from "../pages/anyPage";

export async function createCalendar(page: Page, sample = Data.generateCalendar() , isOnCalendarPage = true){
    const calendarPage = new CalendarPage(page);

    if (!isOnCalendarPage) {
        await calendarPage.goto();
    }
    await calendarPage.createButton.click();
    await calendarPage.calendarForm.nameField.fill(sample.name);
    await calendarPage.calendarForm.timeZoneField.click();
    await calendarPage.calendarForm.timeZone300.click();
    await calendarPage.calendarForm.saveButton.click();
    await page.waitForTimeout(500);

    return calendarPage;
};

export async function createInstrument(page: Page, sample = Data.generateInstrument() , isOnInstrumentPage = true) {
    const instrumentPage = new InstrumentPage(page)

    if (sample.calendarName == '') {
        let calendarSample = Data.generateCalendar();
        await createCalendar(page, calendarSample, false)

        isOnInstrumentPage = false;
        sample.calendarName = calendarSample.name;
    }
    if (!isOnInstrumentPage) {
        await instrumentPage.goto();
    }

    await instrumentPage.createButton.click();
    await instrumentPage.instrumentForm.symbolField.fill(sample.symbol);
    await instrumentPage.instrumentForm.quoteCurrencyField.fill(sample.quoteCurrency);
    await instrumentPage.instrumentForm.descriptionField.fill(sample.description);
    await instrumentPage.instrumentForm.calendarField.click();
    await instrumentPage.instrumentForm.calendarField.fill(sample.calendarName)
    await instrumentPage.instrumentForm.calendar0Option.click();
    await instrumentPage.instrumentForm.isActiveChecker.click();
    await instrumentPage.instrumentForm.nextButton1.click();
  
    await instrumentPage.instrumentForm.pricePrecisionField.fill(sample.pricePrecision);
    await instrumentPage.instrumentForm.quantityPrecisionField.fill(sample.quantityPrecision);
    await instrumentPage.instrumentForm.minQuantityField.fill(sample.minQuantity);
    await instrumentPage.instrumentForm.maxQuantityField.fill(sample.maxQuantity);
    await instrumentPage.instrumentForm.nextButton2.click();
    await instrumentPage.instrumentForm.saveButton.click();

    return instrumentPage;
}

export async function makeLogIn(page: Page, sample = Data.generateAccount(), isOnLoginPage = true) {
    const loginPage = new LogInPage(page);

    if (!isOnLoginPage) {
        await loginPage.goto();
    }

    await loginPage.loginField.fill(sample.login);
    await loginPage.passField.fill(sample.password);
    await loginPage.continueButton.click();
    await page.waitForTimeout(1000);
}

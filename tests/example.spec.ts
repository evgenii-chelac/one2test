import { test, expect } from '@playwright/test';
import { LogInPage } from '../pages/exchange-ui/login-page';
import { InstrumentPage } from '../pages/exchange-ui/exchange/instrument.page';
import { Data } from '../support/generator';
import { createCalendar, createInstrument, makeLogIn } from '../support/utilities';
import { CalendarPage } from '../pages/exchange-ui/exchange/calendar.page';
import { MenuPage } from '../pages/exchange-ui/menu-page';
require('dotenv').config();

test.beforeEach('', async ({ page }) => {
  let account = Data.generateAccount();
  await makeLogIn(page, account, false);
});

// test('Calendar: create and update', async ({page}) => {
//   const menuPage = await new MenuPage(page);
//   menuPage.exchangeButton.click();
//   menuPage.exchange.calendarsButton.click();
  
//   const calendar = Data.generateCalendar();
//   const calendarPage = await createCalendar(page,calendar);

//   await calendarPage.tableSearchField.fill(calendar.name);
//   await page.waitForTimeout(500);

//   expect(await calendarPage.nameCell.textContent()).toContain(calendar.name);
//   expect(await calendarPage.timeZoneCell.textContent()).toContain(calendar.timeZone);

//   const editedCalendar = Data.generateCalendar();
//   await calendarPage.editButton.click();
//   await calendarPage.calendarForm.nameField.fill(editedCalendar.name);
//   await calendarPage.calendarForm.timeZoneField.click();
//   await calendarPage.calendarForm.timeZone400.click();
//   await calendarPage.calendarForm.saveButton.click();

//   await calendarPage.tableSearchField.fill(editedCalendar.name);
//   await page.waitForTimeout(500);

//   expect(await calendarPage.nameCell.textContent()).toContain(editedCalendar.name);
//   expect(await calendarPage.timeZoneCell.textContent()).toContain('+04:00');
// });

// test('Auction: create and update', async ({page}) => {
//   const menuPage = await new MenuPage(page);
//   menuPage.exchangeButton.click();
//   menuPage.exchange.calendarsButton.click();
  
//   const calendar = Data.generateCalendar();
//   const calendarPage = await createCalendar(page,calendar);

//   await calendarPage.tableSearchField.fill(calendar.name);
//   await page.waitForTimeout(500);

//   const auction = Data.generateAuction();
//   await calendarPage.auctionsButton.click();
//   await calendarPage.auctionForm.trigger.input.click();
//   await calendarPage.auctionForm.trigger.Resume.click();
//   await calendarPage.auctionForm.durationField.fill(auction.duration);
//   await calendarPage.auctionForm.matchingAlgorithm.input.click();
//   await calendarPage.auctionForm.matchingAlgorithm['Equilibrium Price'].click();
//   await calendarPage.auctionForm.eventsPublication.input.click();
//   await calendarPage.auctionForm.eventsPublication['Indicative Price'].click();
//   await calendarPage.auctionForm.eventsPublication.LIT.click();
//   await calendarPage.auctionForm.allowedTIF.input.click();
//   await calendarPage.auctionForm.allowedTIF.GTC.click();
//   await calendarPage.auctionForm.saveEditButton.click();
//   await calendarPage.submitButton.click();

  
//   await calendarPage.tableSearchField.fill(editedCalendar.name);
//   await page.waitForTimeout(500);

//   expect(await calendarPage.nameCell.textContent()).toContain(editedCalendar.name);
//   expect(await calendarPage.timeZoneCell.textContent()).toContain('+04:00');
// });

test('Create instrument', async ({ page }) => {
  let instrumentObj = Data.generateInstrument();
  const instrumentPage = await createInstrument(page, instrumentObj, false);

  await instrumentPage.tableSearchField.fill(instrumentObj.symbol);
  await page.waitForTimeout(2000);
  await instrumentPage.symbolCell.waitFor({ state: 'visible' });
  expect(await instrumentPage.symbolCell.textContent()).toContain(instrumentObj.symbol);
});
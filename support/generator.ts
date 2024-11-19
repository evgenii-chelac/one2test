import { Account, AuctionObj, CalendarObj, InstrumentObj } from "../types";

export const Data = {

  generateAccount: () => {
    return <Account>{
      login: process.env.LOGIN,
      password: process.env.PASS,
    }
  },

  generateInstrument: () => {
    return <InstrumentObj>{
      symbol: `IN${Date.now()}`,
      quoteCurrency: 'USD',
      calendarId: '1',
      pricePrecision: '5',
      quantityPrecision: '5',
      minQuantity: '1',
      maxQuantity: '100000',
      maxDepth: '3000000',
      minPrice: '1',
      maxPrice: '100000',
      maxOrderValue: '100000',
      activityStatus: 'ACTIVE',
      description: 'Instrument',
      calendarName: '',
    };
  },

  generateCalendar: () => {
    return <CalendarObj> {
      name: `Calendar ${Date.now()}`,
      timeZone: '+03:00'
    };
  },

  generateAuction: () => {
    return <AuctionObj> {
      duration: '1',
    };
  },
};
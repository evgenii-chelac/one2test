import { Locator } from "@playwright/test";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOGIN: string;
      PASS: string;
      BASE: string;
    }
  }
}

export interface CalendarObj {
  name: string,
  timeZone: string,
  tradingDays: Array,
}

export interface InstrumentObj {
  symbol: string;
  quoteCurrency: string;
  calendarId: string;
  pricePrecision: string;
  quantityPrecision: string;
  minQuantity: string;
  maxQuantity: string;
  maxDepth: string;
  minPrice: string;
  maxPrice: string;
  maxOrderValue: string;
  activityStatus: string;
  description: string;
  calendarName: string;
}

export interface Account {
  login: string;
  password: string;
}

export interface AuctionObj {
  trigger: string;
  duration: string;
  matchingAlgorithm: string;
  eventsPublication: Array;
  allowedTIF: Array;
}
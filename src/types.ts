export interface User {
  id: string;
  name: string;
  username: string;
  isAdmin: boolean;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface StockInfo {
  Symbol: string;
  Name: string;
  Description: string;
  Exchange: string;
  Currency: string;
  Sector: string;
  Industry: string;
  MarketCapitalization: string;
  EBITDA: string;
  PERatio: string;
  DividendPerShare: string;
  DividendYield: string;
  EPS: string;
  RevenueTTM: string;
  GrossProfitTTM: string;
  QuarterlyEarningsGrowthYOY: string;
  QuarterlyRevenueGrowthYOY: string;
  AnalystTargetPrice: string;
  TrailingPE: string;
  ForwardPE: string;
  PriceToSalesRatioTTM: string;
  PriceToBookRatio: string;
  Beta: string;
  "52WeekHigh": string;
  "52WeekLow": string;
  "50DayMovingAverage": string;
  "200DayMovingAverage": string;
}

export interface IStockNews {
  feed: StockNewsItem[];
}

export interface StockNewsItem {
  title: string;
  url: string;
}

export interface favoriteTickers {
  favoriteTicker: string;
  id: string;
  userId: string;
}

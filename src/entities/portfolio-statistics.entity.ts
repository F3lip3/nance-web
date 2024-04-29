export interface PortfolioStatisticsEntity {
  id: string;
  portfolioId: string;
  allTimeProfit: number;
  allTimeProfitPercentage: number;
  bestPerformer: PortfolioStatisticsPerformerEntity;
  worstPerformer: PortfolioStatisticsPerformerEntity;
}

export interface PortfolioStatisticsPerformerEntity {
  name: string;
  logo: string;
  symbol: string;
  profit: number;
  profitPercentage: number;
}

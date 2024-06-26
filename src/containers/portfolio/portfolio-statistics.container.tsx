import { PortfolioProfitInfo } from '@/components/portfolio/portfolio-profit-info';
import { PortfolioStatisticsPerformer } from '@/components/portfolio/portfolio-statistics-performer';
import { PortfolioStatisticsEntity } from '@/entities/portfolio-statistics.entity';

type ContainerProps = {
  portfolioId: string;
};

const fakeStatistics = [
  {
    id: 'abc',
    portfolioId: 'a',
    allTimeProfit: 3693.32,
    allTimeProfitPercentage: 23.61 / 100,
    bestPerformer: {
      name: 'Bitcoin',
      logo: '',
      symbol: 'BTC',
      profit: 4891.57,
      profitPercentage: 68.95 / 100
    },
    worstPerformer: {
      name: 'Cardano',
      logo: '',
      symbol: 'ADA',
      profit: -403.44,
      profitPercentage: -79.26 / 100
    }
  },
  {
    id: 'def',
    portfolioId: 'b',
    allTimeProfit: -413.32,
    allTimeProfitPercentage: -18.69 / 100,
    bestPerformer: {
      name: 'Bitcoin',
      logo: '',
      symbol: 'BTC',
      profit: 91.57,
      profitPercentage: 22.15 / 100
    },
    worstPerformer: {
      name: 'Ripple',
      logo: '',
      symbol: 'XRP',
      profit: -603.44,
      profitPercentage: -99.64 / 100
    }
  }
] satisfies PortfolioStatisticsEntity[];

export const PortfolioStatisticsContainer = ({
  portfolioId
}: ContainerProps) => {
  const statistics = fakeStatistics.find(x => x.portfolioId === portfolioId);

  if (!statistics) return <></>;

  return (
    <div className="flex flex-row gap-4">
      <div className="py-4 px-6 bg-card rounded-lg flex flex-col">
        <h1 className="text-muted-foreground font-medium pb-2">
          All-time profit
        </h1>

        <PortfolioProfitInfo
          profit={statistics.allTimeProfit}
          className="text-2xl font-bold"
        />

        <PortfolioProfitInfo
          profit={statistics.allTimeProfitPercentage}
          isPercentage={true}
          iconStrokeWidth={3}
        />
      </div>
      <PortfolioStatisticsPerformer
        performer={statistics.bestPerformer}
        title="Best performer"
      />
      <PortfolioStatisticsPerformer
        performer={statistics.worstPerformer}
        title="Worst performer"
      />
    </div>
  );
};

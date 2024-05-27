import { PortfolioAvatar } from '@/components/portfolio/portfolio-avatar';
import { PortfolioProfitInfo } from '@/components/portfolio/portfolio-profit-info';
import { usePortfolios } from '@/hooks/use-portfolios';
import { cn, formatNumber } from '@/lib/utils';

export const PortfolioDetailsHeaderContainer = () => {
  const { portfolio } = usePortfolios();

  if (!portfolio) return <></>;

  return (
    <>
      <div className="flex flex-col gap-2 2xl:gap-3">
        <div className="flex flex-row items-center justify-start gap-2">
          <PortfolioAvatar avatar={portfolio.avatar} size="sm" />
          <span className="text-muted-foreground font-normal text-base 2xl:text-lg">
            {portfolio.name}
          </span>
        </div>
        <div className="text-3xl 2xl:text-5xl font-bold">
          ${formatNumber(portfolio.totalAmount)}
        </div>
        <div
          className={cn(
            'text-base 2xl:text-xl font-normal flex flex-row gap-2 items-center',
            portfolio.valueChange24h >= 0 ? 'text-green-400' : 'text-red-500'
          )}
        >
          <PortfolioProfitInfo
            profit={portfolio.valueChange24h}
            iconSize={12}
          />
          <PortfolioProfitInfo
            profit={portfolio.valueChangePercentage24h}
            isPercentage={true}
            iconStrokeWidth={3}
          />
          (24h)
        </div>
      </div>
    </>
  );
};

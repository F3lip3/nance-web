'use client';

import { PortfolioEmptyState } from '@/components/portfolio/portfolio-empty-state';
import PortfolioChartsContainer from '@/containers/portfolio/portfolio-charts.container';
import PortfolioDetailsActionsContainer from '@/containers/portfolio/portfolio-details-actions.container';
import { PortfolioDetailsHeaderContainer } from '@/containers/portfolio/portfolio-details-header.container';
import { PortfolioStatisticsContainer } from '@/containers/portfolio/portfolio-statistics.container';
import { usePortfolios } from '@/hooks/use-portfolios';

export const PortfolioDetailsContainer = () => {
  const { portfolio } = usePortfolios();

  if (!portfolio) return <></>;

  return (
    <>
      <div className="flex flex-row w-full justify-between">
        <PortfolioDetailsHeaderContainer />
        <PortfolioDetailsActionsContainer />
      </div>
      {portfolio.totalAmount === 0 ? (
        <PortfolioEmptyState />
      ) : (
        <div className="flex flex-col w-full pt-4 pb-8 gap-4 2xl:gap-6">
          <PortfolioStatisticsContainer portfolioId={portfolio.id} />
          <PortfolioChartsContainer />
        </div>
      )}
    </>
  );
};

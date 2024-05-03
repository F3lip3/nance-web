'use client';

import { Button } from '@/components/ui/button';
import PortfolioListSectionContainer from '@/containers/portfolio/portfolio-list-section.container';
import { usePortfolios } from '@/hooks/use-portfolios';

export const PortfoliosListContainer = () => {
  const { portfolios } = usePortfolios();

  return (
    <div className="flex flex-col w-full items-start">
      <PortfolioListSectionContainer
        title="My portfolios"
        portfolios={portfolios.filter(x => x.myPortfolio)}
      />

      <PortfolioListSectionContainer
        title="Other portfolios"
        portfolios={portfolios.filter(x => !x.myPortfolio)}
      />

      <Button
        variant="link"
        className="font-semibold text-base hover:no-underline hover:text-blue-400"
      >
        + Create portfolio
      </Button>
    </div>
  );
};

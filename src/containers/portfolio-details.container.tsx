'use client';

import { PortfolioAvatar } from '@/components/portfolio/portfolio-avatar';
import { usePortfolios } from '@/hooks/use-portfolios';
import { cn } from '@/lib/utils';

export const PortfolioDetailsContainer = () => {
  const { portfolio } = usePortfolios();

  return (
    <div className="flex flex-col w-full pl-4 pr-8 py-8">
      <div className="flex flex-row w-full justify-between">
        {portfolio && (
          <>
            <div className="flex flex-col gap-1 2xl:gap-2">
              <div className="flex flex-row items-center justify-start gap-2">
                <PortfolioAvatar avatar={portfolio.avatar} size="sm" />
                <span className="text-muted-foreground font-normal text-base 2xl:text-lg">
                  {portfolio.name}
                </span>
              </div>
              <div className="text-4xl 2xl:text-5xl font-bold">
                ${portfolio.total}
              </div>
              <div
                className={cn(
                  'text-base 2xl:text-xl font-normal',
                  portfolio.gain24 >= 0 ? 'text-green-600' : 'text-red-500'
                )}
              >
                {portfolio.gain24 >= 0 ? '+' : '-'} ${portfolio.gain24} (24h)
              </div>
            </div>
            <div>ACTIONS</div>
          </>
        )}
      </div>
      <div className="flex flex-col w-full h-96 items-center justify-center">
        ITEMS
      </div>
    </div>
  );
};

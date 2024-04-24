'use client';

import { CheckIcon, Edit2Icon } from 'lucide-react';
import { useState } from 'react';

import { PortfolioList } from '@/components/portfolio/portfolio-list';
import { Button } from '@/components/ui/button';
import { usePortfolios } from '@/hooks/use-portfolios';
import { cn } from '@/lib/utils';

export const PortfoliosContainer = () => {
  const { portfolios } = usePortfolios();

  const [editMyPortfolios, setEditMyPortfolios] = useState(false);
  const [editOtherPortfolios, setEditOtherPortfolios] = useState(false);

  const toggleMyPortfoliosEdit = () => {
    setEditMyPortfolios(currentEdit => !currentEdit);
  };

  const toggleOtherPortfoliosEdit = () => {
    setEditOtherPortfolios(currentEdit => !currentEdit);
  };

  return (
    <div className="flex flex-col w-full items-start">
      <section className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center h-10 group">
          <p className="text-base font-semibold">
            My portfolios{' '}
            {portfolios.filter(x => x.myPortfolio).length > 1 && (
              <span>({portfolios.filter(x => x.myPortfolio).length})</span>
            )}
          </p>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'text-muted-foreground invisible group-hover:visible',
              editMyPortfolios && 'visible'
            )}
            onClick={toggleMyPortfoliosEdit}
          >
            {editMyPortfolios ? (
              <CheckIcon size={18} strokeWidth={2} />
            ) : (
              <Edit2Icon size={18} strokeWidth={2} />
            )}
          </Button>
        </div>
        <div className="py-2 flex flex-col items-start">
          <PortfolioList
            edit={editMyPortfolios}
            portfolios={portfolios.filter(x => x.myPortfolio)}
          />
        </div>
      </section>

      <section className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center group">
          <p className="text-base font-semibold">
            Other portfolios{' '}
            {portfolios.filter(x => !x.myPortfolio).length > 1 && (
              <span>({portfolios.filter(x => !x.myPortfolio).length})</span>
            )}
          </p>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'text-muted-foreground invisible group-hover:visible',
              editOtherPortfolios && 'visible'
            )}
            onClick={toggleOtherPortfoliosEdit}
          >
            {editOtherPortfolios ? (
              <CheckIcon size={18} strokeWidth={2} />
            ) : (
              <Edit2Icon size={18} strokeWidth={2} />
            )}
          </Button>
        </div>
        <div className="py-2 flex flex-col items-start">
          <PortfolioList
            edit={editOtherPortfolios}
            portfolios={portfolios.filter(x => !x.myPortfolio)}
          />
        </div>
      </section>

      <Button
        variant="link"
        className="font-semibold text-base hover:no-underline hover:text-blue-400"
      >
        + Create portfolio
      </Button>
    </div>
  );
};

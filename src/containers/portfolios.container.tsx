'use client';

import { CheckIcon, Edit2Icon } from 'lucide-react';
import { useState } from 'react';

import { PortfolioList } from '@/components/portfolio/portfolio-list';
import { Button } from '@/components/ui/button';
import { usePortfolios } from '@/hooks/use-portfolios';

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
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="text-base font-semibold">
          My portfolios{' '}
          {portfolios.filter(x => x.myPortfolio).length > 1 && (
            <span>({portfolios.filter(x => x.myPortfolio).length})</span>
          )}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
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

      <div className="flex flex-row justify-between items-center">
        <p className="text-base font-semibold">
          Other portfolios{' '}
          {portfolios.filter(x => !x.myPortfolio).length > 1 && (
            <span>({portfolios.filter(x => !x.myPortfolio).length})</span>
          )}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
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

      <div className="flex flex-col items-start">
        <Button
          variant="link"
          className="font-semibold text-base hover:no-underline hover:text-blue-400"
        >
          + Create portfolio
        </Button>
      </div>
    </div>
  );
};

'use client';

import { CheckIcon, Edit2Icon } from 'lucide-react';
import { useState } from 'react';

import { PortfolioList } from '@/components/portfolio/portfolio-list';
import { Button } from '@/components/ui/button';
import { PortfolioEntity } from '@/entities/portfolio';

export const PortfolioContainer = () => {
  const [edit, setEdit] = useState(false);
  const [portfolios, setPortfolios] = useState<PortfolioEntity[]>([
    {
      id: 'a',
      name: 'My first portfolio',
      total: 0,
      selected: true,
      avatar: {
        color: 'silver',
        icon: 'rocket'
      }
    },
    {
      id: 'b',
      name: 'Teste 01',
      total: 0,
      selected: false,
      avatar: {
        color: 'green',
        icon: 'fox'
      }
    }
  ]);

  const toggleEdit = () => {
    setEdit(currentEdit => !currentEdit);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="text-base font-semibold">
          My portfolios{' '}
          {portfolios?.length > 0 && <span>({portfolios.length})</span>}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={toggleEdit}
        >
          {edit ? (
            <CheckIcon size={18} strokeWidth={2} />
          ) : (
            <Edit2Icon size={18} strokeWidth={2} />
          )}
        </Button>
      </div>
      <div className="py-2 flex flex-col gap-2 items-start">
        <PortfolioList edit={edit} portfolios={portfolios} />
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

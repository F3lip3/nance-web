import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import Image from 'next/image';

import { PortfolioStatisticsPerformerEntity } from '@/entities/portfolio-statistics.entity';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  performer: PortfolioStatisticsPerformerEntity;
};

export const PortfolioStatisticsPerformer = ({ performer, title }: Props) => {
  return (
    <div
      className="py-4 px-6 bg-card rounded-lg flex flex-col"
      title={performer.name}
    >
      <h1 className="text-muted-foreground font-medium pb-2">{title}</h1>
      <div className="flex flex-row gap-2 items-center pb-1">
        <Image
          src={`/symbols/${performer.symbol}.png`}
          width={24}
          height={24}
          alt={performer.symbol}
          className="min-w-6 min-h-6 w-6 h-6"
        />
        <span className="text-xl font-bold">{performer.symbol}</span>
      </div>
      <div className="flex flex-row gap-2">
        <p
          className={cn(
            'text-base font-semi',
            performer.profit >= 0 ? 'text-green-400' : 'text-red-500'
          )}
        >
          {performer.profit >= 0 ? '+' : '-'} $
          {performer.profit >= 0 ? performer.profit : performer.profit * -1}
        </p>
        <div
          className={cn(
            'flex flex-row items-center text-base font-semi gap-1',
            performer.profitPercentage >= 0 ? 'text-green-400' : 'text-red-500'
          )}
        >
          {performer.profitPercentage >= 0 ? (
            <ChevronUpIcon size={16} strokeWidth={2} />
          ) : (
            <ChevronDownIcon size={16} strokeWidth={2} />
          )}{' '}
          {performer.profitPercentage >= 0
            ? performer.profitPercentage
            : performer.profitPercentage * -1}
          %
        </div>
      </div>
    </div>
  );
};

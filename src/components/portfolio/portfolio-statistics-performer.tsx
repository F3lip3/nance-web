import Image from 'next/image';

import { PortfolioProfitInfo } from '@/components/portfolio/portfolio-profit-info';
import { PortfolioStatisticsPerformerEntity } from '@/entities/portfolio-statistics.entity';

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
      <div className="flex flex-row gap-2 text-base font-semibold">
        <PortfolioProfitInfo profit={performer.profit} iconSize={12} />
        <PortfolioProfitInfo
          profit={performer.profitPercentage}
          isPercentage={true}
          iconStrokeWidth={3}
        />
      </div>
    </div>
  );
};

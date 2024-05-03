import { PortfolioListItem } from '@/components/portfolio/portfolio-list-item';
import { PortfolioEntity } from '@/entities/portfolio.entity';

type Props = {
  edit: boolean;
  portfolios: PortfolioEntity[];
};

export function PortfolioList({ edit, portfolios }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {portfolios.map(portfolio => (
        <div key={portfolio.id} className="w-full">
          <PortfolioListItem portfolio={portfolio} edit={edit} />
        </div>
      ))}
    </div>
  );
}

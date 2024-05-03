import { PortfolioList } from '@/components/portfolio/portfolio-list';
import { Button } from '@/components/ui/button';
import { PortfolioEntity } from '@/entities/portfolio.entity';
import { cn } from '@/lib/utils';
import { CheckIcon, Edit2Icon } from 'lucide-react';
import { useState } from 'react';

interface PortfolioListSectionContainerProps {
  portfolios: PortfolioEntity[];
  title: string;
}

const PortfolioListSectionContainer = ({
  portfolios,
  title
}: PortfolioListSectionContainerProps) => {
  const [edit, setEdit] = useState(false);

  if (!portfolios.length) return <></>;

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center group">
        <p className="text-base font-semibold">
          {title} {portfolios.length > 1 && <span>({portfolios.length})</span>}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'text-muted-foreground invisible group-hover:visible',
            edit && 'visible'
          )}
          onClick={() => setEdit(currentEdit => !currentEdit)}
        >
          {edit ? (
            <CheckIcon size={18} strokeWidth={2} />
          ) : (
            <Edit2Icon size={18} strokeWidth={2} />
          )}
        </Button>
      </div>
      <div className="py-2 flex flex-col items-start">
        <PortfolioList edit={edit} portfolios={portfolios} />
      </div>
    </section>
  );
};

export default PortfolioListSectionContainer;

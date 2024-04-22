import { PortfolioAvatar } from '@/components/portfolio/portfolio-avatar';
import { Button } from '@/components/ui/button';
import { PortfolioEntity } from '@/entities/portfolio';
import { cn } from '@/lib/utils';
import { EllipsisIcon, GripVerticalIcon } from 'lucide-react';

type Props = {
  portfolio: PortfolioEntity;
  edit: boolean;
};

export function PortfolioListItem({ edit, portfolio }: Props) {
  return (
    <div
      className={cn(
        'flex flex-row w-full rounded-lg justify-between items-center p-2 cursor-pointer border border-slate-900',
        portfolio.selected ? 'bg-slate-800' : 'hover:hover:border-slate-800'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {edit && (
          <GripVerticalIcon
            className="cursor-grab text-muted-foreground"
            size={22}
          />
        )}
        <PortfolioAvatar avatar={portfolio.avatar} />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{portfolio.name}</span>
          <p className="text-xs">${portfolio.total}</p>
        </div>
      </div>
      {edit && (
        <Button
          size="icon_sm"
          variant="ghost"
          className="text-muted-foreground"
        >
          <EllipsisIcon size={18} />
        </Button>
      )}
    </div>
  );
}

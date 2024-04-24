import { PortfolioAvatar } from '@/components/portfolio/portfolio-avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { PortfolioEntity } from '@/entities/portfolio';
import { usePortfolios } from '@/hooks/use-portfolios';
import { cn } from '@/lib/utils';
import {
  Edit2Icon,
  EllipsisIcon,
  GripVerticalIcon,
  Trash2Icon
} from 'lucide-react';

type Props = {
  portfolio: PortfolioEntity;
  edit: boolean;
};

export function PortfolioListItem({ edit, portfolio }: Props) {
  const { setSelected } = usePortfolios();

  if (edit) {
    return (
      <div
        className={cn(
          'flex flex-row w-full rounded-lg justify-between items-center p-2 cursor-pointer border border-transparent',
          portfolio.selected ? 'bg-muted' : 'hover:border-muted'
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
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold">{portfolio.name}</span>
            <p className="text-xs">${portfolio.total}</p>
          </div>
        </div>
        {edit && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon_sm"
                variant="ghost"
                className="text-muted-foreground"
              >
                <EllipsisIcon size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Edit2Icon size={20} className="mr-2" />
                  <span>Edit portfolio</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2Icon size={20} className="mr-2" />
                  <span>Remove portfolio</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    );
  }

  return (
    <button
      className={cn(
        'flex flex-row w-full rounded-lg justify-between items-center p-2 cursor-pointer border border-transparent',
        portfolio.selected ? 'bg-muted' : 'hover:border-muted'
      )}
      onClick={() => setSelected(portfolio.id)}
    >
      <div className="flex flex-row items-center gap-2">
        <PortfolioAvatar avatar={portfolio.avatar} />
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold">{portfolio.name}</span>
          <p className="text-xs">${portfolio.total}</p>
        </div>
      </div>
    </button>
  );
}

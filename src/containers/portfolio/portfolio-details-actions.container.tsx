import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { usePortfolios } from '@/hooks/use-portfolios';
import { Edit2Icon, EllipsisIcon, Trash2Icon } from 'lucide-react';

const PortfolioDetailsActionsContainer = () => {
  const { portfolio, setPortfolio } = usePortfolios();

  const onShowChartsChange = (showCharts: boolean) => {
    if (portfolio) {
      setPortfolio({ ...portfolio, showCharts });
    }
  };

  if (!portfolio) return <></>;

  return (
    <div className="flex flex-row items-center justify-end gap-4">
      <div className="flex flex-row items-center gap-3">
        <Label htmlFor="show-charts">Show charts</Label>
        <Switch
          id="show-charts"
          checked={portfolio.showCharts}
          onCheckedChange={onShowChartsChange}
        />
      </div>
      <Button>+ Add transaction</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <EllipsisIcon size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Portfolio</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Edit2Icon size={20} className="mr-2" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2Icon size={20} className="mr-2" />
              <span>Remove</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PortfolioDetailsActionsContainer;

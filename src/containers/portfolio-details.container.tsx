'use client';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  Edit2Icon,
  EllipsisIcon,
  Trash2Icon
} from 'lucide-react';

import { PortfolioAvatar } from '@/components/portfolio/portfolio-avatar';
import { PortfolioEmptyState } from '@/components/portfolio/portfolio-empty-state';
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
import { PortfolioStatisticsContainer } from '@/containers/portfolio-statistics.container';
import { usePortfolios } from '@/hooks/use-portfolios';
import { cn } from '@/lib/utils';

export const PortfolioDetailsContainer = () => {
  const { portfolio, setPortfolio } = usePortfolios();

  const onShowChartsChange = (checked: boolean) => {
    if (portfolio) {
      setPortfolio({ ...portfolio, showCharts: checked });
    }
  };

  return (
    <div className="flex flex-col w-full pl-4 pr-8 py-8">
      {portfolio && (
        <div className="flex flex-row w-full justify-between">
          <>
            <div className="flex flex-col gap-2 2xl:gap-3">
              <div className="flex flex-row items-center justify-start gap-2">
                <PortfolioAvatar avatar={portfolio.avatar} size="sm" />
                <span className="text-muted-foreground font-normal text-base 2xl:text-lg">
                  {portfolio.name}
                </span>
              </div>
              <div className="text-3xl 2xl:text-5xl font-bold">
                ${portfolio.totalAmount}
              </div>
              <div
                className={cn(
                  'text-base 2xl:text-xl font-normal flex flex-row gap-2 items-center',
                  portfolio.valueChange24h >= 0
                    ? 'text-green-600'
                    : 'text-red-500'
                )}
              >
                {portfolio.valueChange24h >= 0 ? '+' : '-'} $
                {portfolio.valueChange24h >= 0
                  ? portfolio.valueChange24h
                  : portfolio.valueChange24h * -1}{' '}
                {portfolio.valueChangePercentage24h !== 0 && (
                  <>
                    {portfolio.valueChangePercentage24h > 0 ? (
                      <ChevronUpIcon size={16} strokeWidth={4} />
                    ) : (
                      <ChevronDownIcon size={16} strokeWidth={4} />
                    )}
                    {portfolio.valueChangePercentage24h > 0
                      ? portfolio.valueChangePercentage24h
                      : portfolio.valueChangePercentage24h * -1}
                    %
                  </>
                )}
                (24h)
              </div>
            </div>
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
          </>
        </div>
      )}
      {(portfolio?.totalAmount ?? 0) === 0 && <PortfolioEmptyState />}
      {portfolio && portfolio.totalAmount !== 0 && (
        <div className="flex flex-col w-full pt-4 pb-8">
          <PortfolioStatisticsContainer portfolioId={portfolio.id} />
        </div>
      )}
    </div>
  );
};

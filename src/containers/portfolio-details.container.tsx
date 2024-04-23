'use client';

import { ChevronDownIcon, ChevronUpIcon, EllipsisIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import { PortfolioAvatar } from '@/components/portfolio/portfolio-avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { usePortfolios } from '@/hooks/use-portfolios';
import { cn } from '@/lib/utils';

export const PortfolioDetailsContainer = () => {
  const { portfolio } = usePortfolios();
  const { theme } = useTheme();

  console.info(theme);

  const emptyImageSrc =
    theme === 'dark' ? '/img/empty02.svg' : '/img/empty01.svg';

  return (
    <div className="flex flex-col w-full pl-4 pr-8 py-8">
      <div className="flex flex-row w-full justify-between">
        {portfolio && (
          <>
            <div className="flex flex-col gap-2 2xl:gap-3">
              <div className="flex flex-row items-center justify-start gap-2">
                <PortfolioAvatar avatar={portfolio.avatar} size="sm" />
                <span className="text-muted-foreground font-normal text-base 2xl:text-lg">
                  {portfolio.name}
                </span>
              </div>
              <div className="text-3xl 2xl:text-5xl font-bold">
                ${portfolio.total}
              </div>
              <div
                className={cn(
                  'text-base 2xl:text-xl font-normal flex flex-row gap-2 items-center',
                  portfolio.gain24 >= 0 ? 'text-green-600' : 'text-red-500'
                )}
              >
                {portfolio.gain24 >= 0 ? '+' : '-'} $
                {portfolio.gain24 >= 0
                  ? portfolio.gain24
                  : portfolio.gain24 * -1}{' '}
                {portfolio.variation24 !== 0 && (
                  <>
                    {portfolio.variation24 > 0 ? (
                      <ChevronUpIcon size={16} strokeWidth={4} />
                    ) : (
                      <ChevronDownIcon size={16} strokeWidth={4} />
                    )}
                    {portfolio.variation24 > 0
                      ? portfolio.variation24
                      : portfolio.variation24 * -1}
                    %
                  </>
                )}
                (24h)
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-4">
              <div className="flex flex-row items-center gap-3">
                <Label htmlFor="show-charts">Show charts</Label>
                <Switch id="show-charts" />
              </div>
              <Button>+ Add transaction</Button>
              <Button variant="secondary">
                <EllipsisIcon size={20} />
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col w-full min-h-96 items-center justify-center pt-8 pb-16 gap-2">
        <div className="h-96 w-full relative">
          <Image
            src={emptyImageSrc}
            layout="fill"
            objectFit="contain"
            alt="empty"
          />
        </div>
        <h1 className="text-4xl font-bold">
          This portfolio needs more data...
        </h1>
        <p className="text-2xl font-normal text-muted-foreground">
          Add assets to get started
        </p>
        <Button className=" mt-4 mb-6" size="lg">
          + Add transaction
        </Button>
      </div>
    </div>
  );
};

import { useTheme } from 'next-themes';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const PortfolioEmptyState = () => {
  const { theme } = useTheme();

  const emptyImageSrc =
    theme === 'dark' ? '/img/empty02.svg' : '/img/empty01.svg';

  return (
    <div className="flex flex-col w-full min-h-96 items-center justify-center pt-8 pb-16 gap-2">
      <div className="h-96 w-full relative">
        <Image
          src={emptyImageSrc}
          layout="fill"
          objectFit="contain"
          alt="empty"
        />
      </div>
      <h1 className="text-4xl font-bold">This portfolio needs more data...</h1>
      <p className="text-2xl font-normal text-muted-foreground">
        Add assets to get started
      </p>
      <Button className=" mt-4 mb-6" size="lg">
        + Add transaction
      </Button>
    </div>
  );
};

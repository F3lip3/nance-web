import { cn } from '@/lib/utils';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon
} from 'lucide-react';

interface IconProps {
  size: number;
  strokeWidth: number;
}

interface PortfolioProfitInfoProps {
  profit: number;
  isPercentage?: boolean;
  iconSize?: number;
  iconStrokeWidth?: number;
  className?: string;
}

export const PortfolioProfitInfo = ({
  profit,
  className,
  isPercentage = false,
  iconSize = 16,
  iconStrokeWidth = 4
}: PortfolioProfitInfoProps) => {
  const Icon = ({ size, strokeWidth }: IconProps): JSX.Element => {
    if (isPercentage && profit >= 0)
      return <ChevronUpIcon size={size} strokeWidth={strokeWidth} />;

    if (isPercentage && profit < 0)
      return <ChevronDownIcon size={size} strokeWidth={strokeWidth} />;

    if (profit >= 0) return <PlusIcon size={size} strokeWidth={strokeWidth} />;

    return <MinusIcon size={size} strokeWidth={strokeWidth} />;
  };

  return (
    <div
      className={cn(
        'flex flex-row items-center gap-1',
        className,
        profit >= 0 ? 'text-green-400' : 'text-red-500'
      )}
    >
      <Icon size={iconSize} strokeWidth={iconStrokeWidth} />
      <p>
        {!isPercentage && '$'}
        {profit >= 0 ? profit : profit * -1}
        {isPercentage && '%'}
      </p>
    </div>
  );
};

import { PortfolioAvatarEntity } from '@/entities/portfolio-avatar.entity';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type numberFormatStyle = 'decimal' | 'currency' | 'percent' | 'unit';

type formatNumberOpts = {
  currency?: string;
  style?: numberFormatStyle;
  decimalDigits?: number;
};

const locale = () => {
  return navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function avatarColor(name: PortfolioAvatarEntity['color']) {
  switch (name) {
    case 'blue':
      return 'bg-blue-600';
    case 'cyan':
      return 'bg-cyan-400';
    case 'green':
      return 'bg-green-600';
    case 'lime':
      return 'bg-lime-300';
    case 'orange':
      return 'bg-orange-400';
    case 'purple':
      return 'bg-purple-500';
    case 'red':
      return 'bg-red-600';
    case 'rose':
      return 'bg-rose-300';
    case 'silver':
      return 'bg-gray-500';
    case 'yellow':
      return 'bg-yellow-500';
    default:
      break;
  }
}

export function formatDate(value: Date) {
  const currentLocale = locale();
  return new Intl.DateTimeFormat(currentLocale).format(value);
}

export function formatNumber(
  value: number,
  opts: formatNumberOpts = {
    currency: '',
    decimalDigits: 2,
    style: 'decimal'
  }
): string {
  const currentLocale = locale();
  const { currency, decimalDigits, style } = opts;

  if (currency) {
    try {
      const currencyFormatter = new Intl.NumberFormat(currentLocale, {
        style: 'currency',
        currency
      });

      return currencyFormatter.format(value);
    } catch (ex) {
      if ((ex as Error).message.includes('Invalid currency code')) {
        return formatNumber(value, { ...opts, currency: 'USD' });
      }
      throw ex;
    }
  }

  const numberFormatter = new Intl.NumberFormat(currentLocale, {
    style,
    maximumFractionDigits: decimalDigits
  });

  return numberFormatter.format(value);
}

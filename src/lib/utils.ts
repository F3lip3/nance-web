import { PortfolioAvatarEntity } from '@/entities/portfolio';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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

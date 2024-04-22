import Image from 'next/image';

import { PortfolioAvatarEntity } from '@/entities/portfolio';
import { avatarColor, cn } from '@/lib/utils';

type Props = {
  avatar: PortfolioAvatarEntity;
  size?: 'sm' | 'lg';
};

export function PortfolioAvatar({ avatar, size = 'lg' }: Props) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        size === 'lg' && 'w-10 h-10 2xl:w-12 2xl:h-12',
        size === 'sm' && 'w-8 h-8 2xl:w-10 2xl:h-10',
        avatarColor(avatar.color)
      )}
    >
      <Image
        alt={avatar.icon}
        src={`/avatar/${avatar.icon}.png`}
        width={32}
        height={32}
        className={cn(
          size === 'lg' &&
            'max-w-6 max-h-6 w-6 h-6 2xl:max-w-8 2xl:max-h-8 2xl:w-8 2xl:h-8',
          size === 'sm' &&
            'max-w-4 max-h-4 w-4 h-4 2xl:max-w-6 2xl:max-h-6 2xl:w-6 2xl:h-6'
        )}
      />
    </div>
  );
}

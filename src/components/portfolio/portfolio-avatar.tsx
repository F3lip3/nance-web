import Image from 'next/image';

import { PortfolioAvatarEntity } from '@/entities/portfolio';
import { avatarColor, cn } from '@/lib/utils';

type Props = {
  avatar: PortfolioAvatarEntity;
};

export function PortfolioAvatar({ avatar }: Props) {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-12 h-12 rounded-full',
        avatarColor(avatar.color)
      )}
    >
      <Image
        alt={avatar.icon}
        src={`/avatar/${avatar.icon}.png`}
        width={32}
        height={32}
        className="max-w-8 max-h-8 w-8 h-8"
      />
    </div>
  );
}

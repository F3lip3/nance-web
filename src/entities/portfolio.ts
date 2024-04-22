export interface PortfolioEntity {
  id: string;
  name: string;
  total: number;
  selected: boolean;
  avatar: PortfolioAvatarEntity;
  gain24: number;
}

export interface PortfolioAvatarEntity {
  color:
    | 'blue'
    | 'cyan'
    | 'green'
    | 'lime'
    | 'orange'
    | 'rose'
    | 'purple'
    | 'red'
    | 'silver'
    | 'yellow';
  icon:
    | 'ai'
    | 'bank'
    | 'bear'
    | 'bull'
    | 'burger'
    | 'coin'
    | 'coin'
    | 'coins'
    | 'coins'
    | 'cool'
    | 'corgi'
    | 'crown'
    | 'diamond'
    | 'dog'
    | 'drugs'
    | 'fire'
    | 'fox'
    | 'ghost'
    | 'golden'
    | 'heart'
    | 'ingots'
    | 'key'
    | 'kitty'
    | 'kitty'
    | 'lightning'
    | 'lockpick'
    | 'money'
    | 'money'
    | 'money'
    | 'padlock'
    | 'panda'
    | 'piggy'
    | 'pill'
    | 'pizza'
    | 'planet'
    | 'rabbit'
    | 'rainbow'
    | 'robot'
    | 'rocket'
    | 'savings'
    | 'settings'
    | 'simple'
    | 'star'
    | 'tiger'
    | 'vault'
    | 'wallet'
    | 'world';
}

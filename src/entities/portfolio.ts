export interface PortfolioEntity {
  id: string;
  name: string;
  total: number;
  selected: boolean;
  avatar: PortfolioAvatarEntity;
  gain24: number;
  variation24: number;
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
    | 'coin-bank'
    | 'coin'
    | 'coins-money-bag'
    | 'coins'
    | 'cool-tiger'
    | 'corgi'
    | 'crown'
    | 'diamond'
    | 'dog-happy'
    | 'drugs'
    | 'fire'
    | 'fox'
    | 'ghost'
    | 'golden-money-bag'
    | 'heart'
    | 'ingots'
    | 'key'
    | 'kitty-laughing'
    | 'kitty'
    | 'lightning'
    | 'lockpick'
    | 'money-1'
    | 'money-2'
    | 'money-bag'
    | 'padlock'
    | 'panda'
    | 'piggy-bank'
    | 'pill'
    | 'pizza'
    | 'planet-earth'
    | 'rabbit'
    | 'rainbow'
    | 'robot'
    | 'rocket'
    | 'savings'
    | 'settings'
    | 'simple-robot'
    | 'star'
    | 'tiger'
    | 'vault'
    | 'wallet'
    | 'world';
}

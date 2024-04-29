import { PortfolioAvatarEntity } from '@/entities/portfolio-avatar.entity';

export interface PortfolioEntity {
  id: string;
  name: string;
  totalAmount: number;
  selected: boolean;
  avatar: PortfolioAvatarEntity;
  valueChange24h: number;
  valueChangePercentage24h: number;
  showCharts: boolean;
  myPortfolio: boolean;
}

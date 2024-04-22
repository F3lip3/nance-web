import { useContext } from 'react';

import {
  PortfoliosContext,
  PortfoliosContextData
} from '@/contexts/portfolio.context';

export const usePortfolios = (): PortfoliosContextData => {
  const context = useContext(PortfoliosContext);
  if (!context) {
    throw new Error('usePortfolios muste be used within a PortfoliosProvider');
  }

  return context;
};

'use client';

import { PortfolioEntity } from '@/entities/portfolio';
import { createContext, useMemo, useState } from 'react';

interface PortfoliosProviderProps {
  children: React.ReactNode;
}

export interface PortfoliosContextData {
  portfolios: PortfolioEntity[];
  portfolio?: PortfolioEntity;
  setSelected: (portfolioId: string) => void;
}

export const PortfoliosContext = createContext<PortfoliosContextData>(
  {} as PortfoliosContextData
);

export const PortfoliosProvider: React.FC<PortfoliosProviderProps> = ({
  children
}) => {
  const [portfolios, setPortfolios] = useState<PortfolioEntity[]>([
    {
      id: 'a',
      name: 'My first portfolio',
      total: 0,
      gain24: 0,
      selected: true,
      avatar: {
        color: 'silver',
        icon: 'rocket'
      }
    },
    {
      id: 'b',
      name: 'Teste 01',
      total: 0,
      gain24: 0,
      selected: false,
      avatar: {
        color: 'green',
        icon: 'fox'
      }
    }
  ] satisfies PortfolioEntity[]);

  const portfolio = useMemo(() => {
    return portfolios.find(x => x.selected);
  }, [portfolios]);

  const setSelected = (portfolioId: string) => {
    setPortfolios(currentPortfolios =>
      currentPortfolios.map(portfolio => ({
        ...portfolio,
        selected: portfolio.id === portfolioId
      }))
    );
  };

  return (
    <PortfoliosContext.Provider value={{ portfolios, portfolio, setSelected }}>
      {children}
    </PortfoliosContext.Provider>
  );
};

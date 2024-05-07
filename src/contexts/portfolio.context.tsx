'use client';

import { PortfolioEntity } from '@/entities/portfolio.entity';
import { createContext, useMemo, useState } from 'react';

interface PortfoliosProviderProps {
  children: React.ReactNode;
}

export interface PortfoliosContextData {
  portfolios: PortfolioEntity[];
  portfolio?: PortfolioEntity;
  setSelected: (portfolioId: string) => void;
  setPortfolio: (updatedPortfolio: PortfolioEntity) => void;
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
      totalAmount: 13520.46,
      valueChange24h: 5380.22,
      valueChangePercentage24h: 0.039,
      selected: true,
      showCharts: true,
      myPortfolio: true,
      avatar: {
        color: 'silver',
        icon: 'rocket'
      }
    },
    {
      id: 'b',
      name: 'Teste 01',
      totalAmount: 1430.21,
      valueChange24h: -320.77,
      valueChangePercentage24h: -3.21,
      selected: false,
      showCharts: true,
      myPortfolio: true,
      avatar: {
        color: 'green',
        icon: 'fox'
      }
    },
    {
      id: 'c',
      name: 'Teste 02',
      totalAmount: 0,
      valueChange24h: 0,
      valueChangePercentage24h: 0,
      selected: false,
      showCharts: false,
      myPortfolio: false,
      avatar: {
        color: 'rose',
        icon: 'money-1'
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

  const setPortfolio = (updatedPortfolio: PortfolioEntity) => {
    setPortfolios(currentPortfolios =>
      currentPortfolios.map(portfolio =>
        portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
      )
    );
  };

  return (
    <PortfoliosContext.Provider
      value={{ portfolios, portfolio, setPortfolio, setSelected }}
    >
      {children}
    </PortfoliosContext.Provider>
  );
};

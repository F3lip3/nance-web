import { PortfolioDetailsContainer } from '@/containers/portfolio-details.container';
import { PortfoliosContainer } from '@/containers/portfolios.container';
import { PortfoliosProvider } from '@/contexts/portfolio.context';

export default function Portfolio() {
  return (
    <PortfoliosProvider>
      <div className="flex flex-1 flex-row gap-4">
        <div className="flex-none w-[340px] p-6">
          <PortfoliosContainer />
        </div>
        <div className="flex flex-1">
          <PortfolioDetailsContainer />
        </div>
      </div>
    </PortfoliosProvider>
  );
}

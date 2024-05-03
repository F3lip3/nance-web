import { PortfolioDetailsContainer } from '@/containers/portfolio/portfolio-details.container';
import { PortfoliosListContainer } from '@/containers/portfolio/portfolio-list.container';
import { PortfoliosProvider } from '@/contexts/portfolio.context';

export default function Portfolio() {
  return (
    <PortfoliosProvider>
      <div className="flex flex-1 flex-row gap-4">
        <div className="flex-none w-[340px] p-6">
          <PortfoliosListContainer />
        </div>
        <div className="flex flex-col flex-1 w-full pl-4 pr-8 py-8">
          <PortfolioDetailsContainer />
        </div>
      </div>
    </PortfoliosProvider>
  );
}

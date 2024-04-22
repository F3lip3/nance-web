import { PortfolioContainer } from '@/containers/portfolio.container';

export default function Portfolio() {
  return (
    <div className="flex flex-1 flex-row gap-4">
      <div className="flex-none w-[340px] p-6">
        <PortfolioContainer />
      </div>
      <div className="flex flex-1">ASSETS</div>
    </div>
  );
}

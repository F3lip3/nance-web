import { PortfolioAllocationChart } from '@/components/portfolio/portfolio-allocation-chart';
import { PortfolioHistoryChart } from '@/components/portfolio/portfolio-history-chart';
import { PortfolioPerformanceChart } from '@/components/portfolio/portfolio-performance-chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PortfolioChartsContainer = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-4">
      <div className="flex flex-col flex-1 aspect-video bg-card rounded-lg p-6 w-full">
        <PortfolioHistoryChart />
      </div>
      <div className="2xl:hidden flex flex-col flex-1 aspect-video bg-card rounded-lg p-6 w-full">
        <Tabs defaultValue="performance" className="min-w-[240px]">
          <TabsList className="grid w-full grid-cols-2 p-0.5 h-auto">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
          </TabsList>
          <TabsContent value="performance">
            <PortfolioPerformanceChart />
          </TabsContent>
          <TabsContent value="allocation">
            <PortfolioAllocationChart />
          </TabsContent>
        </Tabs>
      </div>
      <div className="2xl:flex hidden flex-col flex-1 aspect-video bg-card rounded-lg p-6">
        <h1 className="text-xl font-extrabold h-9">Performance (cumulative)</h1>
        <PortfolioPerformanceChart />
      </div>
      <div className="2xl:flex hidden flex-col flex-1 aspect-video bg-card rounded-lg p-6">
        <PortfolioAllocationChart />
      </div>
    </div>
  );
};

export default PortfolioChartsContainer;

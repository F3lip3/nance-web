import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const PortfolioHistoryChart = () => {
  const handleHistoryPeriodChange = (period: string) => {
    console.info(period);
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-extrabold">History</h1>
      <Tabs
        defaultValue="twenty_four_hours"
        className="w-[300px]"
        onValueChange={handleHistoryPeriodChange}
      >
        <TabsList className="grid w-full grid-cols-5 p-0.5 h-auto">
          <TabsTrigger value="twenty_four_hours">24H</TabsTrigger>
          <TabsTrigger value="seven_days">7D</TabsTrigger>
          <TabsTrigger value="thirty_days">30D</TabsTrigger>
          <TabsTrigger value="ninety_days">90D</TabsTrigger>
          <TabsTrigger value="all">ALL</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

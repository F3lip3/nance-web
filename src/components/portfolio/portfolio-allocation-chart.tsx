import { formatNumber } from '@/lib/utils';
import ReactECharts from 'echarts-for-react';
import { useMemo } from 'react';

interface Allocation {
  holdings: number;
  cryptoId: number;
  name: string;
  symbol: string;
  holdingsPercent: number;
}

interface SeriesData {
  data: {
    name: string;
    value: number;
  };
  color: string;
  marker: string;
}

const allocation: Allocation[] = [
  {
    holdings: 111.074906139374813776575222,
    cryptoId: 11840,
    name: 'Optimism',
    symbol: 'OP',
    holdingsPercent: 0.00775
  },
  {
    holdings: 80.4210036384083199222,
    cryptoId: 8000,
    name: 'Lido DAO',
    symbol: 'LDO',
    holdingsPercent: 0.00561
  },
  {
    holdings: 0e-30,
    cryptoId: 5632,
    name: 'Arweave',
    symbol: 'AR',
    holdingsPercent: 0.0
  },
  {
    holdings: 0e-30,
    cryptoId: 5824,
    name: 'Smooth Love Potion',
    symbol: 'SLP',
    holdingsPercent: 0.0
  },
  {
    holdings: 108.92638170507244682794059,
    cryptoId: 11841,
    name: 'Arbitrum',
    symbol: 'ARB',
    holdingsPercent: 0.00761
  },
  {
    holdings: 8153.4590771034639259328,
    cryptoId: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    holdingsPercent: 0.5702
  },
  {
    holdings: 0e-30,
    cryptoId: 6210,
    name: 'The Sandbox',
    symbol: 'SAND',
    holdingsPercent: 0.0
  },
  {
    holdings: 0e-30,
    cryptoId: 2,
    name: 'Litecoin',
    symbol: 'LTC',
    holdingsPercent: 0.0
  },
  {
    holdings: 2954.0202871536591436194,
    cryptoId: 1027,
    name: 'Ethereum',
    symbol: 'ETH',
    holdingsPercent: 0.20628
  },
  {
    holdings: 38.4828079956482360940328,
    cryptoId: 12999,
    name: 'ssv.network',
    symbol: 'SSV',
    holdingsPercent: 0.00269
  },
  {
    holdings: 0e-30,
    cryptoId: 8719,
    name: 'Illuvium',
    symbol: 'ILV',
    holdingsPercent: 0.0
  },
  {
    holdings: 1.88425759572,
    cryptoId: 83,
    name: 'Omni',
    symbol: 'OMNI',
    holdingsPercent: 0.00013
  },
  {
    holdings: 0e-30,
    cryptoId: 20314,
    name: 'Terra',
    symbol: 'LUNA',
    holdingsPercent: 0.0
  },
  {
    holdings: 0e-30,
    cryptoId: 2010,
    name: 'Cardano',
    symbol: 'ADA',
    holdingsPercent: 0.0
  },
  {
    holdings: 114.88813565405737131119484,
    cryptoId: 24478,
    name: 'Pepe',
    symbol: 'PEPE',
    holdingsPercent: 0.00803
  },
  {
    holdings: 0e-30,
    cryptoId: 4066,
    name: 'Chiliz',
    symbol: 'CHZ',
    holdingsPercent: 0.0
  },
  {
    holdings: 5.3021637082550734265308,
    cryptoId: 30372,
    name: 'Saga',
    symbol: 'SAGA',
    holdingsPercent: 0.00037
  },
  {
    holdings: 93.321187582452796437211664,
    cryptoId: 28324,
    name: 'dYdX (Native)',
    symbol: 'DYDX',
    holdingsPercent: 0.00651
  },
  {
    holdings: 0e-30,
    cryptoId: 5604,
    name: 'Secret',
    symbol: 'SCRT',
    holdingsPercent: 0.0
  },
  {
    holdings: 0e-30,
    cryptoId: 5994,
    name: 'Shiba Inu',
    symbol: 'SHIB',
    holdingsPercent: 0.0
  },
  {
    holdings: 91.8919763601153929806698,
    cryptoId: 10603,
    name: 'Immutable',
    symbol: 'IMX',
    holdingsPercent: 0.00642
  },
  {
    holdings: 0e-30,
    cryptoId: 6636,
    name: 'Polkadot',
    symbol: 'DOT',
    holdingsPercent: 0.0
  },
  {
    holdings: 199.9000458833090595,
    cryptoId: 27565,
    name: 'Arkham',
    symbol: 'ARKM',
    holdingsPercent: 0.01396
  },
  {
    holdings: 0e-30,
    cryptoId: 1966,
    name: 'Decentraland',
    symbol: 'MANA',
    holdingsPercent: 0.0
  },
  {
    holdings: 91.517860985251950823149747,
    cryptoId: 4847,
    name: 'Stacks',
    symbol: 'STX',
    holdingsPercent: 0.00639
  },
  {
    holdings: 602.83051190900556969525,
    cryptoId: 1839,
    name: 'BNB',
    symbol: 'BNB',
    holdingsPercent: 0.0421
  },
  {
    holdings: 0e-30,
    cryptoId: 9905,
    name: 'Rune',
    symbol: 'RUNE',
    holdingsPercent: 0.0
  },
  {
    holdings: 0e-30,
    cryptoId: 3890,
    name: 'Polygon',
    symbol: 'MATIC',
    holdingsPercent: 0.0
  },
  {
    holdings: 283.8954125421558093428666,
    cryptoId: 5426,
    name: 'Solana',
    symbol: 'SOL',
    holdingsPercent: 0.01981
  },
  {
    holdings: 5.272219722324456466705476,
    cryptoId: 52,
    name: 'XRP',
    symbol: 'XRP',
    holdingsPercent: 0.00037
  },
  {
    holdings: 197.723401816781412425064,
    cryptoId: 1975,
    name: 'Chainlink',
    symbol: 'LINK',
    holdingsPercent: 0.01381
  },
  {
    holdings: 369.298343438309660278427244,
    cryptoId: 2424,
    name: 'SingularityNET',
    symbol: 'AGIX',
    holdingsPercent: 0.02579
  },
  {
    holdings: 804.93219071934650474862032,
    cryptoId: 5690,
    name: 'Render',
    symbol: 'RNDR',
    holdingsPercent: 0.05616
  },
  {
    holdings: 0.16134097356191278226,
    cryptoId: 30843,
    name: 'Renzo',
    symbol: 'REZ',
    holdingsPercent: 0.00001
  },
  {
    holdings: 0e-30,
    cryptoId: 6719,
    name: 'The Graph',
    symbol: 'GRT',
    holdingsPercent: 0.0
  },
  {
    holdings: 0e-30,
    cryptoId: 6783,
    name: 'Axie Infinity',
    symbol: 'AXS',
    holdingsPercent: 0.0
  }
];

export const PortfolioAllocationChart = () => {
  const series = useMemo(() => {
    const otherData = allocation
      .sort((a, b) => b.holdingsPercent - a.holdingsPercent)
      .slice(7)
      .reduce(
        (acc, item) => {
          return {
            ...acc,
            value: acc.value + item.holdingsPercent * 100
          };
        },
        { name: 'OTHER', value: 0 }
      );

    const series_data = allocation
      .sort((a, b) => b.holdingsPercent - a.holdingsPercent)
      .slice(0, 7)
      .map(item => ({
        name: item.symbol,
        value: item.holdingsPercent * 100
      }));

    series_data.push(otherData);

    return series_data;
  }, []);

  const option = useMemo(() => {
    return {
      backgroundColor: 'transparent',
      legend: {
        right: 'right',
        orient: 'vertical',
        icon: 'circle',
        top: 'center',
        formatter: function (name: string) {
          const raw_value = series.find(item => item.name === name)?.value ?? 0;
          const value = formatNumber(raw_value / 100, {
            style: 'percent',
            decimalDigits: 2
          });
          return `${name.padEnd(7, ' ')}${value}`;
        },
        textStyle: {
          fontFamily: 'monospace'
        }
      },
      series: [
        {
          name: 'Allocation',
          type: 'pie',
          radius: ['65%', '80%'],
          center: ['40%', '50%'],
          avoidLabelOverlap: true,
          label: { show: false },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: { show: false },
          data: series
        }
      ],
      tooltip: {
        confine: true,
        trigger: 'item',
        extraCssText:
          'padding: 0px; border: none; background: transparent; box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
        formatter: function ({ marker, data }: SeriesData) {
          const value = formatNumber(data.value / 100, {
            style: 'percent',
            decimalDigits: 2
          });

          return `
            <div class="text-sm text-white border-0 rounded-sm p-2 bg-muted shadow-xl">
              ${marker}&nbsp;${data.name}: ${value}
            </div>`;
        }
      }
    };
  }, [series]);

  return (
    <div className="flex flex-col w-full">
      <ReactECharts
        option={option}
        theme="dark"
        style={{ height: '240px', width: '100%' }}
        showLoading={false}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

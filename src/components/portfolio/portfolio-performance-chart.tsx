import { formatNumber } from '@/lib/utils';
import ReactECharts from 'echarts-for-react';
import { useMemo } from 'react';

interface CumulativeChange {
  timestamp: Date;
  plPercentage: number;
  plValue: number;
  hasBuySpent: boolean;
  klinePercentage: number;
}

interface SeriesData {
  data: [Date, number];
  color: string;
  marker: string;
  seriesName: string;
}

const cumulativeChangeList: CumulativeChange[] = [
  {
    timestamp: new Date('2021-05-30T00:00:00.000Z'),
    plPercentage: -0.04688,
    plValue: -44.843851160079692,
    hasBuySpent: true,
    klinePercentage: 0.0
  },
  {
    timestamp: new Date('2021-06-02T18:45:00.000Z'),
    plPercentage: 0.09213,
    plValue: 88.13716873011599180335,
    hasBuySpent: true,
    klinePercentage: 0.0997
  },
  {
    timestamp: new Date('2021-06-06T13:30:00.000Z'),
    plPercentage: 0.03829,
    plValue: 36.63088786973311465661,
    hasBuySpent: true,
    klinePercentage: 0.0345
  },
  {
    timestamp: new Date('2021-06-10T08:15:00.000Z'),
    plPercentage: 0.0345,
    plValue: 33.0047124712720063457,
    hasBuySpent: true,
    klinePercentage: 0.0653
  },
  {
    timestamp: new Date('2021-06-14T03:00:00.000Z'),
    plPercentage: 0.06237,
    plValue: 59.6684029786256091199,
    hasBuySpent: true,
    klinePercentage: 0.1263
  },
  {
    timestamp: new Date('2021-06-17T21:45:00.000Z'),
    plPercentage: 0.01786,
    plValue: 17.08974136208824517075,
    hasBuySpent: true,
    klinePercentage: 0.0926
  },
  {
    timestamp: new Date('2021-06-21T16:30:00.000Z'),
    plPercentage: -0.14136,
    plValue: -135.227840129467765845415,
    hasBuySpent: true,
    klinePercentage: -0.0666
  },
  {
    timestamp: new Date('2021-06-25T11:15:00.000Z'),
    plPercentage: -0.08073,
    plValue: -158.80698158260170173365,
    hasBuySpent: true,
    klinePercentage: -0.0303
  },
  {
    timestamp: new Date('2021-06-29T06:00:00.000Z'),
    plPercentage: -0.0334,
    plValue: -65.71266019703119219823,
    hasBuySpent: true,
    klinePercentage: 0.0032
  },
  {
    timestamp: new Date('2021-07-03T00:45:00.000Z'),
    plPercentage: -0.05817,
    plValue: -114.434115353958865429395,
    hasBuySpent: true,
    klinePercentage: -0.0305
  },
  {
    timestamp: new Date('2021-07-06T19:30:00.000Z'),
    plPercentage: -0.03561,
    plValue: -70.040864879734411474745,
    hasBuySpent: true,
    klinePercentage: -0.0197
  },
  {
    timestamp: new Date('2021-07-10T14:15:00.000Z'),
    plPercentage: -0.05723,
    plValue: -112.58894846761643971744,
    hasBuySpent: true,
    klinePercentage: -0.0257
  },
  {
    timestamp: new Date('2021-07-14T09:00:00.000Z'),
    plPercentage: -0.12034,
    plValue: -236.732901402511849678455,
    hasBuySpent: true,
    klinePercentage: -0.0823
  },
  {
    timestamp: new Date('2021-07-18T03:45:00.000Z'),
    plPercentage: -0.10409,
    plValue: -204.765378768917563369305,
    hasBuySpent: true,
    klinePercentage: -0.0717
  },
  {
    timestamp: new Date('2021-07-21T22:30:00.000Z'),
    plPercentage: -0.10724,
    plValue: -210.95760211884490876789,
    hasBuySpent: true,
    klinePercentage: -0.0748
  },
  {
    timestamp: new Date('2021-07-25T17:15:00.000Z'),
    plPercentage: -0.04209,
    plValue: -82.8056673067115123051,
    hasBuySpent: true,
    klinePercentage: -0.0099
  },
  {
    timestamp: new Date('2021-07-29T12:00:00.000Z'),
    plPercentage: 0.09735,
    plValue: 191.49776801284726028629,
    hasBuySpent: true,
    klinePercentage: 0.1499
  },
  {
    timestamp: new Date('2021-08-02T06:45:00.000Z'),
    plPercentage: 0.13167,
    plValue: 259.02271374150172907705,
    hasBuySpent: true,
    klinePercentage: 0.1614
  },
  {
    timestamp: new Date('2021-08-06T01:30:00.000Z'),
    plPercentage: 0.14767,
    plValue: 290.491466785904833853145,
    hasBuySpent: true,
    klinePercentage: 0.1628
  },
  {
    timestamp: new Date('2021-08-09T20:15:00.000Z'),
    plPercentage: 0.31739,
    plValue: 624.347083941986787608665,
    hasBuySpent: true,
    klinePercentage: 0.3402
  },
  {
    timestamp: new Date('2021-08-13T15:00:00.000Z'),
    plPercentage: 0.32382,
    plValue: 637.011932447067588339225,
    hasBuySpent: true,
    klinePercentage: 0.3423
  },
  {
    timestamp: new Date('2021-08-17T09:45:00.000Z'),
    plPercentage: 0.331,
    plValue: 651.12991017525268153985,
    hasBuySpent: true,
    klinePercentage: 0.3495
  },
  {
    timestamp: new Date('2021-08-21T04:30:00.000Z'),
    plPercentage: 0.16446,
    plValue: 636.967361611295828176475,
    hasBuySpent: true,
    klinePercentage: 0.4089
  },
  {
    timestamp: new Date('2021-08-24T23:15:00.000Z'),
    plPercentage: 0.15425,
    plValue: 597.450875105983741355752,
    hasBuySpent: true,
    klinePercentage: 0.3925
  },
  {
    timestamp: new Date('2021-08-28T18:00:00.000Z'),
    plPercentage: 0.15768,
    plValue: 610.715845421437896008111,
    hasBuySpent: true,
    klinePercentage: 0.417
  },
  {
    timestamp: new Date('2021-09-01T12:45:00.000Z'),
    plPercentage: 0.1717,
    plValue: 665.040645233139274352418,
    hasBuySpent: true,
    klinePercentage: 0.3797
  },
  {
    timestamp: new Date('2021-09-05T07:30:00.000Z'),
    plPercentage: 0.18207,
    plValue: 775.756669406792913865081,
    hasBuySpent: true,
    klinePercentage: 0.4436
  },
  {
    timestamp: new Date('2021-09-09T02:15:00.000Z'),
    plPercentage: 0.11308,
    plValue: 503.3071273802063014860362,
    hasBuySpent: true,
    klinePercentage: 0.3364
  },
  {
    timestamp: new Date('2021-09-12T21:00:00.000Z'),
    plPercentage: 0.10198,
    plValue: 453.9268620519562583457978,
    hasBuySpent: true,
    klinePercentage: 0.3039
  },
  {
    timestamp: new Date('2021-09-16T15:45:00.000Z'),
    plPercentage: 0.12625,
    plValue: 561.9351710664582144535456,
    hasBuySpent: true,
    klinePercentage: 0.3867
  },
  {
    timestamp: new Date('2021-09-20T10:30:00.000Z'),
    plPercentage: 0.06562,
    plValue: 292.0533208760092141113496,
    hasBuySpent: true,
    klinePercentage: 0.2934
  },
  {
    timestamp: new Date('2021-09-24T05:15:00.000Z'),
    plPercentage: 0.05904,
    plValue: 290.4797026567881654631512,
    hasBuySpent: true,
    klinePercentage: 0.2756
  },
  {
    timestamp: new Date('2021-09-28T00:00:00.000Z'),
    plPercentage: 0.03015,
    plValue: 148.344894705988059526269,
    hasBuySpent: true,
    klinePercentage: 0.2195
  },
  {
    timestamp: new Date('2021-10-01T18:45:00.000Z'),
    plPercentage: 0.08937,
    plValue: 439.709236259233936122416544,
    hasBuySpent: true,
    klinePercentage: 0.3791
  },
  {
    timestamp: new Date('2021-10-05T13:30:00.000Z'),
    plPercentage: 0.09913,
    plValue: 542.5172094882147399232806129,
    hasBuySpent: true,
    klinePercentage: 0.4461
  },
  {
    timestamp: new Date('2021-10-09T08:15:00.000Z'),
    plPercentage: 0.12836,
    plValue: 702.4933802311715792882438727,
    hasBuySpent: true,
    klinePercentage: 0.5859
  },
  {
    timestamp: new Date('2021-10-13T03:00:00.000Z'),
    plPercentage: 0.12632,
    plValue: 691.3429421194808022171259946,
    hasBuySpent: true,
    klinePercentage: 0.63
  },
  {
    timestamp: new Date('2021-10-16T21:45:00.000Z'),
    plPercentage: 0.16317,
    plValue: 893.0184185571762342835939685,
    hasBuySpent: true,
    klinePercentage: 0.759
  },
  {
    timestamp: new Date('2021-10-20T16:30:00.000Z'),
    plPercentage: 0.19916,
    plValue: 1089.9900229177247639013977518,
    hasBuySpent: true,
    klinePercentage: 0.9216
  },
  {
    timestamp: new Date('2021-10-24T11:15:00.000Z'),
    plPercentage: 0.17189,
    plValue: 940.7337628203056703720248988,
    hasBuySpent: true,
    klinePercentage: 0.7576
  },
  {
    timestamp: new Date('2021-10-28T06:00:00.000Z'),
    plPercentage: 0.15099,
    plValue: 826.3685385272906544797769518,
    hasBuySpent: true,
    klinePercentage: 0.7076
  },
  {
    timestamp: new Date('2021-11-01T00:45:00.000Z'),
    plPercentage: 0.20067,
    plValue: 1108.9190949323611334587691829,
    hasBuySpent: true,
    klinePercentage: 0.7747
  },
  {
    timestamp: new Date('2021-11-04T19:30:00.000Z'),
    plPercentage: 0.23007,
    plValue: 1271.3790251790994957451012583,
    hasBuySpent: true,
    klinePercentage: 0.77
  },
  {
    timestamp: new Date('2021-11-08T14:15:00.000Z'),
    plPercentage: 0.2648,
    plValue: 1463.341066882521305643265712,
    hasBuySpent: true,
    klinePercentage: 0.8894
  },
  {
    timestamp: new Date('2021-11-12T09:00:00.000Z'),
    plPercentage: 0.26841,
    plValue: 1490.6774942519707024948048873,
    hasBuySpent: true,
    klinePercentage: 0.8778
  },
  {
    timestamp: new Date('2021-11-16T03:45:00.000Z'),
    plPercentage: 0.21302,
    plValue: 1183.0412714893318085328561599,
    hasBuySpent: true,
    klinePercentage: 0.7569
  },
  {
    timestamp: new Date('2021-11-19T22:30:00.000Z'),
    plPercentage: 0.40312,
    plValue: 2473.8023432470063343627647157,
    hasBuySpent: true,
    klinePercentage: 0.6761
  },
  {
    timestamp: new Date('2021-11-23T17:15:00.000Z'),
    plPercentage: 0.43717,
    plValue: 2682.7772113064030712577299,
    hasBuySpent: true,
    klinePercentage: 0.6599
  },
  {
    timestamp: new Date('2021-11-27T12:00:00.000Z'),
    plPercentage: 0.4077,
    plValue: 2501.9379306162110032944325782,
    hasBuySpent: true,
    klinePercentage: 0.5796
  },
  {
    timestamp: new Date('2021-12-01T06:45:00.000Z'),
    plPercentage: 0.4213,
    plValue: 2658.91603176297633330940863502,
    hasBuySpent: true,
    klinePercentage: 0.6452
  },
  {
    timestamp: new Date('2021-12-05T01:30:00.000Z'),
    plPercentage: 0.25455,
    plValue: 1741.6838636298073831899177014,
    hasBuySpent: true,
    klinePercentage: 0.4122
  },
  {
    timestamp: new Date('2021-12-08T20:15:00.000Z'),
    plPercentage: 0.26885,
    plValue: 1839.5451965517405762272501446,
    hasBuySpent: true,
    klinePercentage: 0.4602
  },
  {
    timestamp: new Date('2021-12-12T15:00:00.000Z'),
    plPercentage: 0.22104,
    plValue: 1512.3965830867214387355198008,
    hasBuySpent: true,
    klinePercentage: 0.4412
  },
  {
    timestamp: new Date('2021-12-16T09:45:00.000Z'),
    plPercentage: 0.20167,
    plValue: 1379.85498084524220472372596372,
    hasBuySpent: true,
    klinePercentage: 0.4151
  },
  {
    timestamp: new Date('2021-12-20T04:30:00.000Z'),
    plPercentage: 0.16532,
    plValue: 1131.1522496942953273505972329,
    hasBuySpent: true,
    klinePercentage: 0.3554
  },
  {
    timestamp: new Date('2021-12-23T23:15:00.000Z'),
    plPercentage: 0.21672,
    plValue: 1482.8345786580410817850537959,
    hasBuySpent: true,
    klinePercentage: 0.4657
  },
  {
    timestamp: new Date('2021-12-27T18:00:00.000Z'),
    plPercentage: 0.22246,
    plValue: 1522.08231823786339936833929928,
    hasBuySpent: true,
    klinePercentage: 0.4978
  },
  {
    timestamp: new Date('2021-12-31T12:45:00.000Z'),
    plPercentage: 0.15601,
    plValue: 1067.47588068519951627175743094,
    hasBuySpent: true,
    klinePercentage: 0.3887
  },
  {
    timestamp: new Date('2022-01-04T07:30:00.000Z'),
    plPercentage: 0.14734,
    plValue: 1008.1091291713480031909934834,
    hasBuySpent: true,
    klinePercentage: 0.343
  },
  {
    timestamp: new Date('2022-01-08T02:15:00.000Z'),
    plPercentage: 0.09698,
    plValue: 663.53716665551079295922237134,
    hasBuySpent: true,
    klinePercentage: 0.2107
  },
  {
    timestamp: new Date('2022-01-11T21:00:00.000Z'),
    plPercentage: 0.09876,
    plValue: 675.7345836423851926503807766,
    hasBuySpent: true,
    klinePercentage: 0.2356
  },
  {
    timestamp: new Date('2022-01-15T15:45:00.000Z'),
    plPercentage: 0.14289,
    plValue: 977.6991356617451594246193176,
    hasBuySpent: true,
    klinePercentage: 0.2518
  },
  {
    timestamp: new Date('2022-01-19T10:30:00.000Z'),
    plPercentage: 0.08833,
    plValue: 618.77139533819011465378159108,
    hasBuySpent: true,
    klinePercentage: 0.2001
  },
  {
    timestamp: new Date('2022-01-23T05:15:00.000Z'),
    plPercentage: -0.03462,
    plValue: -270.57383848428407505371120698,
    hasBuySpent: true,
    klinePercentage: 0.0136
  },
  {
    timestamp: new Date('2022-01-27T00:00:00.000Z'),
    plPercentage: -0.02634,
    plValue: -205.85128775688555052408301749,
    hasBuySpent: true,
    klinePercentage: 0.0646
  },
  {
    timestamp: new Date('2022-01-30T18:45:00.000Z'),
    plPercentage: -0.0179,
    plValue: -139.91468269098253782814438596,
    hasBuySpent: true,
    klinePercentage: 0.0958
  },
  {
    timestamp: new Date('2022-02-03T13:30:00.000Z'),
    plPercentage: -0.0375,
    plValue: -293.09635926416439799870538526,
    hasBuySpent: true,
    klinePercentage: 0.0619
  },
  {
    timestamp: new Date('2022-02-07T08:15:00.000Z'),
    plPercentage: 0.0484,
    plValue: 378.24697464168818161115924156,
    hasBuySpent: true,
    klinePercentage: 0.2333
  },
  {
    timestamp: new Date('2022-02-11T03:00:00.000Z'),
    plPercentage: 0.04123,
    plValue: 322.2199549061021727216459887,
    hasBuySpent: true,
    klinePercentage: 0.2466
  },
  {
    timestamp: new Date('2022-02-14T21:45:00.000Z'),
    plPercentage: 0.01191,
    plValue: 93.10548529654674813717556801,
    hasBuySpent: true,
    klinePercentage: 0.2182
  },
  {
    timestamp: new Date('2022-02-18T16:30:00.000Z'),
    plPercentage: -0.00649,
    plValue: -50.68675047259722134924833368,
    hasBuySpent: true,
    klinePercentage: 0.1626
  },
  {
    timestamp: new Date('2022-02-22T11:15:00.000Z'),
    plPercentage: -0.05488,
    plValue: -428.91385440917213297560990909,
    hasBuySpent: true,
    klinePercentage: 0.0875
  },
  {
    timestamp: new Date('2022-02-26T06:00:00.000Z'),
    plPercentage: -0.03289,
    plValue: -257.05393242148354404907467841,
    hasBuySpent: true,
    klinePercentage: 0.1287
  },
  {
    timestamp: new Date('2022-03-02T00:45:00.000Z'),
    plPercentage: 0.01331,
    plValue: 104.03870715204293128417221,
    hasBuySpent: true,
    klinePercentage: 0.2765
  },
  {
    timestamp: new Date('2022-03-05T19:30:00.000Z'),
    plPercentage: -0.0369,
    plValue: -288.43656943706836052486899416,
    hasBuySpent: true,
    klinePercentage: 0.1384
  },
  {
    timestamp: new Date('2022-03-09T14:15:00.000Z'),
    plPercentage: -0.01636,
    plValue: -127.84128943715164289797056919,
    hasBuySpent: true,
    klinePercentage: 0.2163
  },
  {
    timestamp: new Date('2022-03-13T09:00:00.000Z'),
    plPercentage: -0.04377,
    plValue: -363.49109213981979450479699922,
    hasBuySpent: true,
    klinePercentage: 0.1291
  },
  {
    timestamp: new Date('2022-03-17T03:45:00.000Z'),
    plPercentage: -0.01788,
    plValue: -148.46959416874147495194244736,
    hasBuySpent: true,
    klinePercentage: 0.1855
  },
  {
    timestamp: new Date('2022-03-20T22:30:00.000Z'),
    plPercentage: -0.01234,
    plValue: -102.5139973498514803480456899,
    hasBuySpent: true,
    klinePercentage: 0.1918
  },
  {
    timestamp: new Date('2022-03-24T17:15:00.000Z'),
    plPercentage: 0.03374,
    plValue: 280.21242956593310837437520975,
    hasBuySpent: true,
    klinePercentage: 0.2748
  },
  {
    timestamp: new Date('2022-03-28T12:00:00.000Z'),
    plPercentage: 0.05972,
    plValue: 495.9532825837801733122538992,
    hasBuySpent: true,
    klinePercentage: 0.3645
  },
  {
    timestamp: new Date('2022-04-01T06:45:00.000Z'),
    plPercentage: 0.03219,
    plValue: 267.29015858816808870922245502,
    hasBuySpent: true,
    klinePercentage: 0.2952
  },
  {
    timestamp: new Date('2022-04-05T01:30:00.000Z'),
    plPercentage: 0.05754,
    plValue: 477.85750045206281632166294118,
    hasBuySpent: true,
    klinePercentage: 0.3442
  },
  {
    timestamp: new Date('2022-04-08T20:15:00.000Z'),
    plPercentage: 0.00402,
    plValue: 33.34839615896281069466398554,
    hasBuySpent: true,
    klinePercentage: 0.237
  },
  {
    timestamp: new Date('2022-04-12T15:00:00.000Z'),
    plPercentage: -0.03588,
    plValue: -302.67435664390786442861006762,
    hasBuySpent: true,
    klinePercentage: 0.1568
  },
  {
    timestamp: new Date('2022-04-16T09:45:00.000Z'),
    plPercentage: -0.02868,
    plValue: -241.94258467636223862436395489,
    hasBuySpent: true,
    klinePercentage: 0.1658
  },
  {
    timestamp: new Date('2022-04-20T04:30:00.000Z'),
    plPercentage: -0.02177,
    plValue: -183.61869303797979012013035944,
    hasBuySpent: true,
    klinePercentage: 0.1934
  },
  {
    timestamp: new Date('2022-04-23T23:15:00.000Z'),
    plPercentage: -0.04461,
    plValue: -376.30441598233426173211900635,
    hasBuySpent: true,
    klinePercentage: 0.1502
  },
  {
    timestamp: new Date('2022-04-27T18:00:00.000Z'),
    plPercentage: -0.06321,
    plValue: -533.15153009498686790185838368,
    hasBuySpent: true,
    klinePercentage: 0.1306
  },
  {
    timestamp: new Date('2022-05-01T12:45:00.000Z'),
    plPercentage: -0.09028,
    plValue: -761.49131296829434879820778177,
    hasBuySpent: true,
    klinePercentage: 0.0969
  },
  {
    timestamp: new Date('2022-05-05T07:30:00.000Z'),
    plPercentage: -0.07205,
    plValue: -607.73303528089889311631630638,
    hasBuySpent: true,
    klinePercentage: 0.1442
  },
  {
    timestamp: new Date('2022-05-09T02:15:00.000Z'),
    plPercentage: -0.14014,
    plValue: -1182.05193910567462435581863686,
    hasBuySpent: true,
    klinePercentage: -0.0201
  },
  {
    timestamp: new Date('2022-05-12T21:00:00.000Z'),
    plPercentage: -0.22971,
    plValue: -1937.59927071612327887556604855,
    hasBuySpent: true,
    klinePercentage: -0.1732
  },
  {
    timestamp: new Date('2022-05-16T15:45:00.000Z'),
    plPercentage: -0.21124,
    plValue: -1781.78718603347544696657828997,
    hasBuySpent: true,
    klinePercentage: -0.1476
  },
  {
    timestamp: new Date('2022-05-20T10:30:00.000Z'),
    plPercentage: -0.19495,
    plValue: -1747.3953468278861729491007219,
    hasBuySpent: true,
    klinePercentage: -0.1257
  },
  {
    timestamp: new Date('2022-05-24T05:15:00.000Z'),
    plPercentage: -0.20252,
    plValue: -1815.25651266699248230882885009,
    hasBuySpent: true,
    klinePercentage: -0.1511
  },
  {
    timestamp: new Date('2022-05-28T00:00:00.000Z'),
    plPercentage: -0.22113,
    plValue: -1982.01742411526972870275714311,
    hasBuySpent: true,
    klinePercentage: -0.1666
  },
  {
    timestamp: new Date('2022-05-31T18:45:00.000Z'),
    plPercentage: -0.18361,
    plValue: -1645.70917063805788730947051424,
    hasBuySpent: true,
    klinePercentage: -0.0808
  },
  {
    timestamp: new Date('2022-06-04T13:30:00.000Z'),
    plPercentage: -0.2124,
    plValue: -1909.09399522008457706852146924,
    hasBuySpent: true,
    klinePercentage: -0.144
  },
  {
    timestamp: new Date('2022-06-08T08:15:00.000Z'),
    plPercentage: -0.20862,
    plValue: -1875.17700301237970628368677443,
    hasBuySpent: true,
    klinePercentage: -0.1202
  },
  {
    timestamp: new Date('2022-06-12T03:00:00.000Z'),
    plPercentage: -0.25659,
    plValue: -2306.33856369434695513519737678,
    hasBuySpent: true,
    klinePercentage: -0.2059
  },
  {
    timestamp: new Date('2022-06-15T21:45:00.000Z'),
    plPercentage: -0.27409,
    plValue: -2758.39925661778908248654168526,
    hasBuySpent: true,
    klinePercentage: -0.3601
  },
  {
    timestamp: new Date('2022-06-19T16:30:00.000Z'),
    plPercentage: -0.30801,
    plValue: -3157.56154915992968220891124773,
    hasBuySpent: true,
    klinePercentage: -0.4336
  },
  {
    timestamp: new Date('2022-06-23T11:15:00.000Z'),
    plPercentage: -0.28986,
    plValue: -2971.48212725225582672600845248,
    hasBuySpent: true,
    klinePercentage: -0.4028
  },
  {
    timestamp: new Date('2022-06-27T06:00:00.000Z'),
    plPercentage: -0.27359,
    plValue: -2804.67774385693903293345526256,
    hasBuySpent: true,
    klinePercentage: -0.3878
  },
  {
    timestamp: new Date('2022-07-01T00:45:00.000Z'),
    plPercentage: -0.29607,
    plValue: -3035.14040902245057145836799957,
    hasBuySpent: true,
    klinePercentage: -0.4099
  },
  {
    timestamp: new Date('2022-07-04T19:30:00.000Z'),
    plPercentage: -0.30156,
    plValue: -3091.39643504353928298089050984,
    hasBuySpent: true,
    klinePercentage: -0.4283
  },
  {
    timestamp: new Date('2022-07-08T14:15:00.000Z'),
    plPercentage: -0.28004,
    plValue: -2870.75543353479554650293451777,
    hasBuySpent: true,
    klinePercentage: -0.3839
  },
  {
    timestamp: new Date('2022-07-12T09:00:00.000Z'),
    plPercentage: -0.30753,
    plValue: -3152.62208428419104713746862007,
    hasBuySpent: true,
    klinePercentage: -0.4287
  },
  {
    timestamp: new Date('2022-07-16T03:45:00.000Z'),
    plPercentage: -0.28572,
    plValue: -2929.03952126690097141170465968,
    hasBuySpent: true,
    klinePercentage: -0.4007
  },
  {
    timestamp: new Date('2022-07-19T22:30:00.000Z'),
    plPercentage: -0.22922,
    plValue: -2349.85795973302914783574519031,
    hasBuySpent: true,
    klinePercentage: -0.3222
  },
  {
    timestamp: new Date('2022-07-23T17:15:00.000Z'),
    plPercentage: -0.25079,
    plValue: -2570.94431572225137428968144717,
    hasBuySpent: true,
    klinePercentage: -0.3604
  },
  {
    timestamp: new Date('2022-07-27T12:00:00.000Z'),
    plPercentage: -0.26715,
    plValue: -2738.63104645083136850480842998,
    hasBuySpent: true,
    klinePercentage: -0.3869
  },
  {
    timestamp: new Date('2022-07-31T06:45:00.000Z'),
    plPercentage: -0.21665,
    plValue: -2220.97905989236816886914980876,
    hasBuySpent: true,
    klinePercentage: -0.3134
  },
  {
    timestamp: new Date('2022-08-04T01:30:00.000Z'),
    plPercentage: -0.22668,
    plValue: -2323.74378953235757889875660084,
    hasBuySpent: true,
    klinePercentage: -0.3329
  },
  {
    timestamp: new Date('2022-08-07T20:15:00.000Z'),
    plPercentage: -0.21448,
    plValue: -2198.73558883835675580944394269,
    hasBuySpent: true,
    klinePercentage: -0.3296
  },
  {
    timestamp: new Date('2022-08-11T15:00:00.000Z'),
    plPercentage: -0.18732,
    plValue: -1920.24382266640350801409755312,
    hasBuySpent: true,
    klinePercentage: -0.29
  },
  {
    timestamp: new Date('2022-08-15T09:45:00.000Z'),
    plPercentage: -0.1972,
    plValue: -2021.59897646366256339607987024,
    hasBuySpent: true,
    klinePercentage: -0.3048
  },
  {
    timestamp: new Date('2022-08-19T04:30:00.000Z'),
    plPercentage: -0.21968,
    plValue: -2252.01149734445849083003532333,
    hasBuySpent: true,
    klinePercentage: -0.3408
  },
  {
    timestamp: new Date('2022-08-22T23:15:00.000Z'),
    plPercentage: -0.25077,
    plValue: -2570.75244580935212370316383927,
    hasBuySpent: true,
    klinePercentage: -0.3865
  },
  {
    timestamp: new Date('2022-08-26T18:00:00.000Z'),
    plPercentage: -0.25896,
    plValue: -2654.73084190036676272398431548,
    hasBuySpent: true,
    klinePercentage: -0.4027
  },
  {
    timestamp: new Date('2022-08-30T12:45:00.000Z'),
    plPercentage: -0.26351,
    plValue: -2701.32825645886782853523391628,
    hasBuySpent: true,
    klinePercentage: -0.4126
  },
  {
    timestamp: new Date('2022-09-03T07:30:00.000Z'),
    plPercentage: -0.26762,
    plValue: -2743.50909674282189066879916622,
    hasBuySpent: true,
    klinePercentage: -0.4247
  },
  {
    timestamp: new Date('2022-09-07T02:15:00.000Z'),
    plPercentage: -0.28819,
    plValue: -2954.31255464114967418960934558,
    hasBuySpent: true,
    klinePercentage: -0.4576
  },
  {
    timestamp: new Date('2022-09-10T21:00:00.000Z'),
    plPercentage: -0.23887,
    plValue: -2448.72553786275802095050613458,
    hasBuySpent: true,
    klinePercentage: -0.3812
  },
  {
    timestamp: new Date('2022-09-14T15:45:00.000Z'),
    plPercentage: -0.26372,
    plValue: -2703.46944131768905350220288491,
    hasBuySpent: true,
    klinePercentage: -0.4147
  },
  {
    timestamp: new Date('2022-09-18T10:30:00.000Z'),
    plPercentage: -0.27209,
    plValue: -2789.27687605979398873257402209,
    hasBuySpent: true,
    klinePercentage: -0.4224
  },
  {
    timestamp: new Date('2022-09-22T05:15:00.000Z'),
    plPercentage: -0.29485,
    plValue: -3022.6261381878259280979260658,
    hasBuySpent: true,
    klinePercentage: -0.4599
  },
  {
    timestamp: new Date('2022-09-26T00:00:00.000Z'),
    plPercentage: -0.28999,
    plValue: -2972.84342861992065525311416871,
    hasBuySpent: true,
    klinePercentage: -0.4567
  },
  {
    timestamp: new Date('2022-09-29T18:45:00.000Z'),
    plPercentage: -0.28595,
    plValue: -2931.38557447741766493248445364,
    hasBuySpent: true,
    klinePercentage: -0.4405
  },
  {
    timestamp: new Date('2022-10-03T13:30:00.000Z'),
    plPercentage: -0.28631,
    plValue: -2935.11174415078062714027929209,
    hasBuySpent: true,
    klinePercentage: -0.4434
  },
  {
    timestamp: new Date('2022-10-07T08:15:00.000Z'),
    plPercentage: -0.27567,
    plValue: -2825.99775572287617072019024821,
    hasBuySpent: true,
    klinePercentage: -0.4236
  },
  {
    timestamp: new Date('2022-10-11T03:00:00.000Z'),
    plPercentage: -0.29181,
    plValue: -2991.48845404018749976493024322,
    hasBuySpent: true,
    klinePercentage: -0.4496
  },
  {
    timestamp: new Date('2022-10-14T21:45:00.000Z'),
    plPercentage: -0.29225,
    plValue: -3023.5945221497817186414039126,
    hasBuySpent: true,
    klinePercentage: -0.4459
  },
  {
    timestamp: new Date('2022-10-18T16:30:00.000Z'),
    plPercentage: -0.28962,
    plValue: -2996.36713023263480089754342426,
    hasBuySpent: true,
    klinePercentage: -0.44
  },
  {
    timestamp: new Date('2022-10-22T11:15:00.000Z'),
    plPercentage: -0.29321,
    plValue: -3033.54105506751352158800107842,
    hasBuySpent: true,
    klinePercentage: -0.4461
  },
  {
    timestamp: new Date('2022-10-26T06:00:00.000Z'),
    plPercentage: -0.26944,
    plValue: -2787.57350661786311794951930849,
    hasBuySpent: true,
    klinePercentage: -0.4165
  },
  {
    timestamp: new Date('2022-10-30T00:45:00.000Z'),
    plPercentage: -0.25549,
    plValue: -2643.25901220706651430337769473,
    hasBuySpent: true,
    klinePercentage: -0.4007
  },
  {
    timestamp: new Date('2022-11-02T19:30:00.000Z'),
    plPercentage: -0.27042,
    plValue: -2797.76032038451488426248777326,
    hasBuySpent: true,
    klinePercentage: -0.4145
  },
  {
    timestamp: new Date('2022-11-06T14:15:00.000Z'),
    plPercentage: -0.24977,
    plValue: -2584.0738971080783725616559642,
    hasBuySpent: true,
    klinePercentage: -0.3873
  },
  {
    timestamp: new Date('2022-11-10T09:00:00.000Z'),
    plPercentage: -0.32963,
    plValue: -3472.097848317985773959334550862,
    hasBuySpent: true,
    klinePercentage: -0.5135
  },
  {
    timestamp: new Date('2022-11-14T03:45:00.000Z'),
    plPercentage: -0.34216,
    plValue: -3604.08856066727382299783881886,
    hasBuySpent: true,
    klinePercentage: -0.5333
  },
  {
    timestamp: new Date('2022-11-17T22:30:00.000Z'),
    plPercentage: -0.32869,
    plValue: -3462.24957952121278675198664684,
    hasBuySpent: true,
    klinePercentage: -0.5179
  },
  {
    timestamp: new Date('2022-11-21T17:15:00.000Z'),
    plPercentage: -0.34747,
    plValue: -3660.07447680733120624278843543,
    hasBuySpent: true,
    klinePercentage: -0.537
  },
  {
    timestamp: new Date('2022-11-25T12:00:00.000Z'),
    plPercentage: -0.33444,
    plValue: -3522.821797040462608970216379179,
    hasBuySpent: true,
    klinePercentage: -0.5225
  },
  {
    timestamp: new Date('2022-11-29T06:45:00.000Z'),
    plPercentage: -0.3348,
    plValue: -3526.58604228151827372355523392,
    hasBuySpent: true,
    klinePercentage: -0.5243
  },
  {
    timestamp: new Date('2022-12-03T01:30:00.000Z'),
    plPercentage: -0.32273,
    plValue: -3399.43891836655896750099103766,
    hasBuySpent: true,
    klinePercentage: -0.5076
  },
  {
    timestamp: new Date('2022-12-06T20:15:00.000Z'),
    plPercentage: -0.32655,
    plValue: -3439.6991329827608848737337931,
    hasBuySpent: true,
    klinePercentage: -0.5094
  },
  {
    timestamp: new Date('2022-12-10T15:00:00.000Z'),
    plPercentage: -0.32076,
    plValue: -3415.58750942025062130974430287,
    hasBuySpent: true,
    klinePercentage: -0.5038
  },
  {
    timestamp: new Date('2022-12-14T09:45:00.000Z'),
    plPercentage: -0.31174,
    plValue: -3319.5414687662967861472982218,
    hasBuySpent: true,
    klinePercentage: -0.4858
  },
  {
    timestamp: new Date('2022-12-18T04:30:00.000Z'),
    plPercentage: -0.33671,
    plValue: -3585.40687939226436219941803161,
    hasBuySpent: true,
    klinePercentage: -0.5149
  },
  {
    timestamp: new Date('2022-12-21T23:15:00.000Z'),
    plPercentage: -0.33729,
    plValue: -3591.64304861112294743952336574,
    hasBuySpent: true,
    klinePercentage: -0.5146
  },
  {
    timestamp: new Date('2022-12-25T18:00:00.000Z'),
    plPercentage: -0.33745,
    plValue: -3593.27531159324773113826334532,
    hasBuySpent: true,
    klinePercentage: -0.5143
  },
  {
    timestamp: new Date('2022-12-29T12:45:00.000Z'),
    plPercentage: -0.34179,
    plValue: -3639.49997549441000634427888516,
    hasBuySpent: true,
    klinePercentage: -0.5202
  },
  {
    timestamp: new Date('2023-01-02T07:30:00.000Z'),
    plPercentage: -0.33926,
    plValue: -3612.54858009178183075731272132,
    hasBuySpent: true,
    klinePercentage: -0.5166
  },
  {
    timestamp: new Date('2023-01-06T02:15:00.000Z'),
    plPercentage: -0.33472,
    plValue: -3564.25952319782668521370986096,
    hasBuySpent: true,
    klinePercentage: -0.5139
  },
  {
    timestamp: new Date('2023-01-09T21:00:00.000Z'),
    plPercentage: -0.32305,
    plValue: -3440.012051584634273439396114758,
    hasBuySpent: true,
    klinePercentage: -0.5027
  },
  {
    timestamp: new Date('2023-01-13T15:45:00.000Z'),
    plPercentage: -0.28496,
    plValue: -3078.20976906853222143211394576,
    hasBuySpent: true,
    klinePercentage: -0.444
  },
  {
    timestamp: new Date('2023-01-17T10:30:00.000Z'),
    plPercentage: -0.24981,
    plValue: -2698.5247981667235938890149761,
    hasBuySpent: true,
    klinePercentage: -0.3897
  },
  {
    timestamp: new Date('2023-01-21T05:15:00.000Z'),
    plPercentage: -0.22493,
    plValue: -2429.75206433053859691112294221,
    hasBuySpent: true,
    klinePercentage: -0.3475
  },
  {
    timestamp: new Date('2023-01-25T00:00:00.000Z'),
    plPercentage: -0.2307,
    plValue: -2492.10380365847145218738416558,
    hasBuySpent: true,
    klinePercentage: -0.3459
  },
  {
    timestamp: new Date('2023-01-28T18:45:00.000Z'),
    plPercentage: -0.2238,
    plValue: -2417.60994285175068150456330635,
    hasBuySpent: true,
    klinePercentage: -0.3355
  },
  {
    timestamp: new Date('2023-02-01T13:30:00.000Z'),
    plPercentage: -0.22222,
    plValue: -2400.46956182908272435686580635,
    hasBuySpent: true,
    klinePercentage: -0.332
  },
  {
    timestamp: new Date('2023-02-05T08:15:00.000Z'),
    plPercentage: -0.21024,
    plValue: -2271.05680312566026079083479779,
    hasBuySpent: true,
    klinePercentage: -0.3241
  },
  {
    timestamp: new Date('2023-02-09T03:00:00.000Z'),
    plPercentage: -0.21853,
    plValue: -2360.65696558342814331797090275,
    hasBuySpent: true,
    klinePercentage: -0.34
  },
  {
    timestamp: new Date('2023-02-12T21:45:00.000Z'),
    plPercentage: -0.24162,
    plValue: -2610.02979682444894046554838701,
    hasBuySpent: true,
    klinePercentage: -0.3694
  },
  {
    timestamp: new Date('2023-02-16T16:30:00.000Z'),
    plPercentage: -0.18797,
    plValue: -2052.2702501113391227147565598,
    hasBuySpent: true,
    klinePercentage: -0.2834
  },
  {
    timestamp: new Date('2023-02-20T11:15:00.000Z'),
    plPercentage: -0.18494,
    plValue: -2019.25384309684820931448652337,
    hasBuySpent: true,
    klinePercentage: -0.2809
  },
  {
    timestamp: new Date('2023-02-24T06:00:00.000Z'),
    plPercentage: -0.20391,
    plValue: -2226.3402444970899605591809797,
    hasBuySpent: true,
    klinePercentage: -0.309
  },
  {
    timestamp: new Date('2023-02-28T00:45:00.000Z'),
    plPercentage: -0.21229,
    plValue: -2317.89007435742139419290993783,
    hasBuySpent: true,
    klinePercentage: -0.3214
  },
  {
    timestamp: new Date('2023-03-03T19:30:00.000Z'),
    plPercentage: -0.23376,
    plValue: -2552.2117538782594210835423863,
    hasBuySpent: true,
    klinePercentage: -0.3548
  },
  {
    timestamp: new Date('2023-03-07T14:15:00.000Z'),
    plPercentage: -0.23472,
    plValue: -2562.74408019217144870374177192,
    hasBuySpent: true,
    klinePercentage: -0.354
  },
  {
    timestamp: new Date('2023-03-11T09:00:00.000Z'),
    plPercentage: -0.26798,
    plValue: -2925.89021841135027755278935306,
    hasBuySpent: true,
    klinePercentage: -0.405
  },
  {
    timestamp: new Date('2023-03-15T03:45:00.000Z'),
    plPercentage: -0.19469,
    plValue: -2125.70755527768018035330823717,
    hasBuySpent: true,
    klinePercentage: -0.2829
  },
  {
    timestamp: new Date('2023-03-18T22:30:00.000Z'),
    plPercentage: -0.15996,
    plValue: -1746.43889351958783202221283111,
    hasBuySpent: true,
    klinePercentage: -0.2128
  },
  {
    timestamp: new Date('2023-03-22T17:15:00.000Z'),
    plPercentage: -0.14093,
    plValue: -1538.71733064897282135915403999,
    hasBuySpent: true,
    klinePercentage: -0.1743
  },
  {
    timestamp: new Date('2023-03-26T12:00:00.000Z'),
    plPercentage: -0.15005,
    plValue: -1638.295933782496945246767109285,
    hasBuySpent: true,
    klinePercentage: -0.1939
  },
  {
    timestamp: new Date('2023-03-30T06:45:00.000Z'),
    plPercentage: -0.13745,
    plValue: -1500.69961868753526696342676642,
    hasBuySpent: true,
    klinePercentage: -0.1729
  },
  {
    timestamp: new Date('2023-04-03T01:30:00.000Z'),
    plPercentage: -0.14609,
    plValue: -1595.03706935035463188549405314,
    hasBuySpent: true,
    klinePercentage: -0.1904
  },
  {
    timestamp: new Date('2023-04-06T20:15:00.000Z'),
    plPercentage: -0.13957,
    plValue: -1523.81293983548620641965524809,
    hasBuySpent: true,
    klinePercentage: -0.1889
  },
  {
    timestamp: new Date('2023-04-10T15:00:00.000Z'),
    plPercentage: -0.1378,
    plValue: -1504.57974697699591803114016805,
    hasBuySpent: true,
    klinePercentage: -0.1818
  },
  {
    timestamp: new Date('2023-04-14T09:45:00.000Z'),
    plPercentage: -0.08788,
    plValue: -959.54020622695146120025358513,
    hasBuySpent: true,
    klinePercentage: -0.1099
  },
  {
    timestamp: new Date('2023-04-18T04:30:00.000Z'),
    plPercentage: -0.10603,
    plValue: -1157.71542338239570425337744778,
    hasBuySpent: true,
    klinePercentage: -0.1484
  },
  {
    timestamp: new Date('2023-04-21T23:15:00.000Z'),
    plPercentage: -0.15417,
    plValue: -1683.29981440811493232382151288,
    hasBuySpent: true,
    klinePercentage: -0.2105
  },
  {
    timestamp: new Date('2023-04-25T18:00:00.000Z'),
    plPercentage: -0.14986,
    plValue: -1636.254954523324832607841145145,
    hasBuySpent: true,
    klinePercentage: -0.2013
  },
  {
    timestamp: new Date('2023-04-29T12:45:00.000Z'),
    plPercentage: -0.12429,
    plValue: -1357.02837318641393634008186887,
    hasBuySpent: true,
    klinePercentage: -0.1527
  },
  {
    timestamp: new Date('2023-05-03T07:30:00.000Z'),
    plPercentage: -0.13598,
    plValue: -1484.65588666037858636425472603,
    hasBuySpent: true,
    klinePercentage: -0.1716
  },
  {
    timestamp: new Date('2023-05-07T02:15:00.000Z'),
    plPercentage: -0.1313,
    plValue: -1433.57938795342453153599029262,
    hasBuySpent: true,
    klinePercentage: -0.1633
  },
  {
    timestamp: new Date('2023-05-10T21:00:00.000Z'),
    plPercentage: -0.15006,
    plValue: -1638.350029874666375236775599135,
    hasBuySpent: true,
    klinePercentage: -0.1946
  },
  {
    timestamp: new Date('2023-05-14T15:45:00.000Z'),
    plPercentage: -0.16251,
    plValue: -1774.37798381952885741537127845,
    hasBuySpent: true,
    klinePercentage: -0.217
  },
  {
    timestamp: new Date('2023-05-18T10:30:00.000Z'),
    plPercentage: -0.15673,
    plValue: -1711.24192956632424863173215108,
    hasBuySpent: true,
    klinePercentage: -0.2093
  },
  {
    timestamp: new Date('2023-05-22T05:15:00.000Z'),
    plPercentage: -0.16722,
    plValue: -1825.80032333139934462584009091,
    hasBuySpent: true,
    klinePercentage: -0.2275
  },
  {
    timestamp: new Date('2023-05-26T00:00:00.000Z'),
    plPercentage: -0.17133,
    plValue: -1870.57178541376872109751451101,
    hasBuySpent: true,
    klinePercentage: -0.2351
  },
  {
    timestamp: new Date('2023-05-29T18:45:00.000Z'),
    plPercentage: -0.149,
    plValue: -1626.85688432213522449131647491,
    hasBuySpent: true,
    klinePercentage: -0.2006
  },
  {
    timestamp: new Date('2023-06-02T13:30:00.000Z'),
    plPercentage: -0.15541,
    plValue: -1696.78338143574820434549293349,
    hasBuySpent: true,
    klinePercentage: -0.2175
  },
  {
    timestamp: new Date('2023-06-06T08:15:00.000Z'),
    plPercentage: -0.1792,
    plValue: -1956.53651003511349952020404261,
    hasBuySpent: true,
    klinePercentage: -0.2569
  },
  {
    timestamp: new Date('2023-06-10T03:00:00.000Z'),
    plPercentage: -0.17335,
    plValue: -1892.68741422202411650648470524,
    hasBuySpent: true,
    klinePercentage: -0.2393
  },
  {
    timestamp: new Date('2023-06-13T21:45:00.000Z'),
    plPercentage: -0.18794,
    plValue: -2051.99949696828915852492351791,
    hasBuySpent: true,
    klinePercentage: -0.2532
  },
  {
    timestamp: new Date('2023-06-17T16:30:00.000Z'),
    plPercentage: -0.18231,
    plValue: -1990.49912666412587761989595129,
    hasBuySpent: true,
    klinePercentage: -0.2357
  },
  {
    timestamp: new Date('2023-06-21T11:15:00.000Z'),
    plPercentage: -0.14606,
    plValue: -1594.66782952915700986559903271,
    hasBuySpent: true,
    klinePercentage: -0.1657
  },
  {
    timestamp: new Date('2023-06-25T06:00:00.000Z'),
    plPercentage: -0.1128,
    plValue: -1231.56035958106661387456360453,
    hasBuySpent: true,
    klinePercentage: -0.108
  },
  {
    timestamp: new Date('2023-06-29T00:45:00.000Z'),
    plPercentage: -0.13038,
    plValue: -1423.57055962204338557869356316,
    hasBuySpent: true,
    klinePercentage: -0.1298
  },
  {
    timestamp: new Date('2023-07-02T19:30:00.000Z'),
    plPercentage: -0.116,
    plValue: -1266.50545447287929063527209405,
    hasBuySpent: true,
    klinePercentage: -0.1172
  },
  {
    timestamp: new Date('2023-07-06T14:15:00.000Z'),
    plPercentage: -0.12269,
    plValue: -1339.58141513692633058340747856,
    hasBuySpent: true,
    klinePercentage: -0.1245
  },
  {
    timestamp: new Date('2023-07-10T09:00:00.000Z'),
    plPercentage: -0.12762,
    plValue: -1393.375726371809737074265980971,
    hasBuySpent: true,
    klinePercentage: -0.1305
  },
  {
    timestamp: new Date('2023-07-14T03:45:00.000Z'),
    plPercentage: -0.08753,
    plValue: -955.72302172799631941915580992,
    hasBuySpent: true,
    klinePercentage: -0.0913
  },
  {
    timestamp: new Date('2023-07-17T22:30:00.000Z'),
    plPercentage: -0.11137,
    plValue: -1215.98556295100825296528892301,
    hasBuySpent: true,
    klinePercentage: -0.1274
  },
  {
    timestamp: new Date('2023-07-21T17:15:00.000Z'),
    plPercentage: -0.11478,
    plValue: -1253.20213918710300848309175311,
    hasBuySpent: true,
    klinePercentage: -0.1372
  },
  {
    timestamp: new Date('2023-07-25T12:00:00.000Z'),
    plPercentage: -0.13097,
    plValue: -1429.91978471139235083572514832,
    hasBuySpent: true,
    klinePercentage: -0.1586
  },
  {
    timestamp: new Date('2023-07-29T06:45:00.000Z'),
    plPercentage: -0.12548,
    plValue: -1370.00053548107634409661960216,
    hasBuySpent: true,
    klinePercentage: -0.1523
  },
  {
    timestamp: new Date('2023-08-02T01:30:00.000Z'),
    plPercentage: -0.11817,
    plValue: -1290.21350058798259548647537292,
    hasBuySpent: true,
    klinePercentage: -0.1345
  },
  {
    timestamp: new Date('2023-08-05T20:15:00.000Z'),
    plPercentage: -0.1361,
    plValue: -1485.93618786105071750715772829,
    hasBuySpent: true,
    klinePercentage: -0.161
  },
  {
    timestamp: new Date('2023-08-09T15:00:00.000Z'),
    plPercentage: -0.12437,
    plValue: -1357.91158946456449060777476985,
    hasBuySpent: true,
    klinePercentage: -0.1401
  },
  {
    timestamp: new Date('2023-08-13T09:45:00.000Z'),
    plPercentage: -0.13018,
    plValue: -1421.30816078424240800218530348,
    hasBuySpent: true,
    klinePercentage: -0.1508
  },
  {
    timestamp: new Date('2023-08-17T04:30:00.000Z'),
    plPercentage: -0.14621,
    plValue: -1596.39895190474225846187260565,
    hasBuySpent: true,
    klinePercentage: -0.1731
  },
  {
    timestamp: new Date('2023-08-20T23:15:00.000Z'),
    plPercentage: -0.1868,
    plValue: -2039.57845044038724537256852538,
    hasBuySpent: true,
    klinePercentage: -0.2442
  },
  {
    timestamp: new Date('2023-08-24T18:00:00.000Z'),
    plPercentage: -0.19177,
    plValue: -2093.844912421299731844393416399,
    hasBuySpent: true,
    klinePercentage: -0.2477
  },
  {
    timestamp: new Date('2023-08-28T12:45:00.000Z'),
    plPercentage: -0.19092,
    plValue: -2084.48095875077334835136945683,
    hasBuySpent: true,
    klinePercentage: -0.246
  },
  {
    timestamp: new Date('2023-09-01T07:30:00.000Z'),
    plPercentage: -0.19386,
    plValue: -2116.59809733553502173770040277,
    hasBuySpent: true,
    klinePercentage: -0.2493
  },
  {
    timestamp: new Date('2023-09-05T02:15:00.000Z'),
    plPercentage: -0.19857,
    plValue: -2167.9893487862819476122589368,
    hasBuySpent: true,
    klinePercentage: -0.2565
  },
  {
    timestamp: new Date('2023-09-08T21:00:00.000Z'),
    plPercentage: -0.1954,
    plValue: -2133.375235539952694897309112488,
    hasBuySpent: true,
    klinePercentage: -0.2517
  },
  {
    timestamp: new Date('2023-09-12T15:45:00.000Z'),
    plPercentage: -0.19511,
    plValue: -2130.27425394233220379768373377,
    hasBuySpent: true,
    klinePercentage: -0.2423
  },
  {
    timestamp: new Date('2023-09-16T10:30:00.000Z'),
    plPercentage: -0.18758,
    plValue: -2048.05772034533735907150775,
    hasBuySpent: true,
    klinePercentage: -0.2336
  },
  {
    timestamp: new Date('2023-09-20T05:15:00.000Z'),
    plPercentage: -0.17955,
    plValue: -1960.36519631306490988481679933,
    hasBuySpent: true,
    klinePercentage: -0.2175
  },
  {
    timestamp: new Date('2023-09-24T00:00:00.000Z'),
    plPercentage: -0.18888,
    plValue: -2062.23903039699273371730500672,
    hasBuySpent: true,
    klinePercentage: -0.232
  },
  {
    timestamp: new Date('2023-09-27T18:45:00.000Z'),
    plPercentage: -0.19288,
    plValue: -2105.96489983413002942670613256,
    hasBuySpent: true,
    klinePercentage: -0.2413
  },
  {
    timestamp: new Date('2023-10-01T13:30:00.000Z'),
    plPercentage: -0.17385,
    plValue: -1898.19248881545704158492376414,
    hasBuySpent: true,
    klinePercentage: -0.2148
  },
  {
    timestamp: new Date('2023-10-05T08:15:00.000Z'),
    plPercentage: -0.1724,
    plValue: -1882.30166180088132389433868591,
    hasBuySpent: true,
    klinePercentage: -0.2023
  },
  {
    timestamp: new Date('2023-10-09T03:00:00.000Z'),
    plPercentage: -0.1688,
    plValue: -1842.986606362682484009881981301,
    hasBuySpent: true,
    klinePercentage: -0.1924
  },
  {
    timestamp: new Date('2023-10-12T21:45:00.000Z'),
    plPercentage: -0.19237,
    plValue: -2100.34719803292266139147753807,
    hasBuySpent: true,
    klinePercentage: -0.228
  },
  {
    timestamp: new Date('2023-10-16T16:30:00.000Z'),
    plPercentage: -0.17167,
    plValue: -1874.36258128274563434574474409,
    hasBuySpent: true,
    klinePercentage: -0.1877
  },
  {
    timestamp: new Date('2023-10-20T11:15:00.000Z'),
    plPercentage: -0.14506,
    plValue: -1583.76769498424637155615359914,
    hasBuySpent: true,
    klinePercentage: -0.134
  },
  {
    timestamp: new Date('2023-10-24T06:00:00.000Z'),
    plPercentage: -0.08041,
    plValue: -877.97551804218183819689444019,
    hasBuySpent: true,
    klinePercentage: -0.021
  },
  {
    timestamp: new Date('2023-10-28T00:45:00.000Z'),
    plPercentage: -0.08109,
    plValue: -885.32969333544573750098389782,
    hasBuySpent: true,
    klinePercentage: -0.0203
  },
  {
    timestamp: new Date('2023-10-31T19:30:00.000Z'),
    plPercentage: -0.06884,
    plValue: -751.63943091034293089706829257,
    hasBuySpent: true,
    klinePercentage: -0.0028
  },
  {
    timestamp: new Date('2023-11-04T14:15:00.000Z'),
    plPercentage: -0.06271,
    plValue: -684.71025681203601598656338403,
    hasBuySpent: true,
    klinePercentage: 0.0034
  },
  {
    timestamp: new Date('2023-11-08T09:00:00.000Z'),
    plPercentage: -0.04692,
    plValue: -512.336965008930500102618510388,
    hasBuySpent: true,
    klinePercentage: 0.0202
  },
  {
    timestamp: new Date('2023-11-12T03:45:00.000Z'),
    plPercentage: -0.01249,
    plValue: -136.37078296142759487594295248,
    hasBuySpent: true,
    klinePercentage: 0.0683
  },
  {
    timestamp: new Date('2023-11-15T22:30:00.000Z'),
    plPercentage: -0.00402,
    plValue: -43.85024842774968548236886861,
    hasBuySpent: true,
    klinePercentage: 0.0886
  },
  {
    timestamp: new Date('2023-11-19T17:15:00.000Z'),
    plPercentage: -0.0248,
    plValue: -270.73067963467140560947138187,
    hasBuySpent: true,
    klinePercentage: 0.0567
  },
  {
    timestamp: new Date('2023-11-23T12:00:00.000Z'),
    plPercentage: -0.01006,
    plValue: -109.89000712082114335833423164,
    hasBuySpent: true,
    klinePercentage: 0.0799
  },
  {
    timestamp: new Date('2023-11-27T06:45:00.000Z'),
    plPercentage: -0.00967,
    plValue: -105.61702999748466210837471298,
    hasBuySpent: true,
    klinePercentage: 0.0805
  },
  {
    timestamp: new Date('2023-12-01T01:30:00.000Z'),
    plPercentage: -0.00256,
    plValue: -27.92107415256758183693796665,
    hasBuySpent: true,
    klinePercentage: 0.0946
  },
  {
    timestamp: new Date('2023-12-04T20:15:00.000Z'),
    plPercentage: 0.0572,
    plValue: 624.55132465419767796882362365,
    hasBuySpent: true,
    klinePercentage: 0.208
  },
  {
    timestamp: new Date('2023-12-08T15:00:00.000Z'),
    plPercentage: 0.09871,
    plValue: 1077.704491441397996010664936202,
    hasBuySpent: true,
    klinePercentage: 0.2705
  },
  {
    timestamp: new Date('2023-12-12T09:45:00.000Z'),
    plPercentage: 0.06259,
    plValue: 683.399017123083386530542126,
    hasBuySpent: true,
    klinePercentage: 0.2093
  },
  {
    timestamp: new Date('2023-12-16T04:30:00.000Z'),
    plPercentage: 0.06975,
    plValue: 761.59505379533931140338889013,
    hasBuySpent: true,
    klinePercentage: 0.2224
  },
  {
    timestamp: new Date('2023-12-19T23:15:00.000Z'),
    plPercentage: 0.06246,
    plValue: 681.96378150927757422912991751,
    hasBuySpent: true,
    klinePercentage: 0.2224
  },
  {
    timestamp: new Date('2023-12-23T18:00:00.000Z'),
    plPercentage: 0.09282,
    plValue: 1013.417653967117979927144703952,
    hasBuySpent: true,
    klinePercentage: 0.2648
  },
  {
    timestamp: new Date('2023-12-27T12:45:00.000Z'),
    plPercentage: 0.08343,
    plValue: 910.86278957788451471364298588,
    hasBuySpent: true,
    klinePercentage: 0.2375
  },
  {
    timestamp: new Date('2023-12-31T07:30:00.000Z'),
    plPercentage: 0.07835,
    plValue: 855.41183640382608749155779987,
    hasBuySpent: true,
    klinePercentage: 0.2283
  },
  {
    timestamp: new Date('2024-01-04T02:15:00.000Z'),
    plPercentage: 0.07295,
    plValue: 796.53169071455779182126084254,
    hasBuySpent: true,
    klinePercentage: 0.2397
  },
  {
    timestamp: new Date('2024-01-07T21:00:00.000Z'),
    plPercentage: 0.08712,
    plValue: 951.177405343024759484457247788,
    hasBuySpent: true,
    klinePercentage: 0.2762
  },
  {
    timestamp: new Date('2024-01-11T15:45:00.000Z'),
    plPercentage: 0.151,
    plValue: 1661.04862141275701492405170943,
    hasBuySpent: true,
    klinePercentage: 0.363
  },
  {
    timestamp: new Date('2024-01-15T10:30:00.000Z'),
    plPercentage: 0.08715,
    plValue: 958.68767299154550966077836773,
    hasBuySpent: true,
    klinePercentage: 0.2314
  },
  {
    timestamp: new Date('2024-01-19T05:15:00.000Z'),
    plPercentage: 0.06196,
    plValue: 681.62399094765990735003459277,
    hasBuySpent: true,
    klinePercentage: 0.1884
  },
  {
    timestamp: new Date('2024-01-23T00:00:00.000Z'),
    plPercentage: 0.03075,
    plValue: 338.20275976445567156566050868,
    hasBuySpent: true,
    klinePercentage: 0.142
  },
  {
    timestamp: new Date('2024-01-26T18:45:00.000Z'),
    plPercentage: 0.06287,
    plValue: 691.5945116082861462600794921,
    hasBuySpent: true,
    klinePercentage: 0.218
  },
  {
    timestamp: new Date('2024-01-30T13:30:00.000Z'),
    plPercentage: 0.07867,
    plValue: 865.35698287157383945987332538,
    hasBuySpent: true,
    klinePercentage: 0.2476
  },
  {
    timestamp: new Date('2024-02-03T08:15:00.000Z'),
    plPercentage: 0.07914,
    plValue: 870.60830672347970072898293742,
    hasBuySpent: true,
    klinePercentage: 0.2445
  },
  {
    timestamp: new Date('2024-02-07T03:00:00.000Z'),
    plPercentage: 0.08155,
    plValue: 897.05868953386684652618489462,
    hasBuySpent: true,
    klinePercentage: 0.2434
  },
  {
    timestamp: new Date('2024-02-10T21:45:00.000Z'),
    plPercentage: 0.15448,
    plValue: 1699.35575057882120525892247792,
    hasBuySpent: true,
    klinePercentage: 0.3854
  },
  {
    timestamp: new Date('2024-02-14T16:30:00.000Z'),
    plPercentage: 0.21473,
    plValue: 2362.03460358635084699824922378,
    hasBuySpent: true,
    klinePercentage: 0.4896
  },
  {
    timestamp: new Date('2024-02-18T11:15:00.000Z'),
    plPercentage: 0.22469,
    plValue: 2471.66177576168394144956021089,
    hasBuySpent: true,
    klinePercentage: 0.4967
  },
  {
    timestamp: new Date('2024-02-22T06:00:00.000Z'),
    plPercentage: 0.22624,
    plValue: 2488.69100319985542412721378528,
    hasBuySpent: true,
    klinePercentage: 0.4882
  },
  {
    timestamp: new Date('2024-02-26T00:45:00.000Z'),
    plPercentage: 0.24197,
    plValue: 2661.72428153401450178947093684,
    hasBuySpent: true,
    klinePercentage: 0.4941
  },
  {
    timestamp: new Date('2024-02-29T19:30:00.000Z'),
    plPercentage: 0.3832,
    plValue: 4215.30048910688694307770619443,
    hasBuySpent: true,
    klinePercentage: 0.7659
  },
  {
    timestamp: new Date('2024-03-04T14:15:00.000Z'),
    plPercentage: 0.4399,
    plValue: 4975.94646833049840820994485116,
    hasBuySpent: true,
    klinePercentage: 0.8862
  },
  {
    timestamp: new Date('2024-03-08T09:00:00.000Z'),
    plPercentage: 0.4869,
    plValue: 5507.56827043973195105780510713,
    hasBuySpent: true,
    klinePercentage: 0.9461
  },
  {
    timestamp: new Date('2024-03-12T03:45:00.000Z'),
    plPercentage: 0.51293,
    plValue: 6111.02385872358437217981103736,
    hasBuySpent: true,
    klinePercentage: 1.0735
  },
  {
    timestamp: new Date('2024-03-15T22:30:00.000Z'),
    plPercentage: 0.45646,
    plValue: 5438.23013838963091947753149541,
    hasBuySpent: true,
    klinePercentage: 0.9763
  },
  {
    timestamp: new Date('2024-03-19T17:15:00.000Z'),
    plPercentage: 0.38588,
    plValue: 4851.18164797417986109975324158,
    hasBuySpent: true,
    klinePercentage: 0.8917
  },
  {
    timestamp: new Date('2024-03-23T12:00:00.000Z'),
    plPercentage: 0.37822,
    plValue: 4754.84703958226638296325869526,
    hasBuySpent: true,
    klinePercentage: 0.8674
  },
  {
    timestamp: new Date('2024-03-27T06:45:00.000Z'),
    plPercentage: 0.41219,
    plValue: 5596.38223262910534161329805208,
    hasBuySpent: true,
    klinePercentage: 1.0304
  },
  {
    timestamp: new Date('2024-03-31T01:30:00.000Z'),
    plPercentage: 0.40132,
    plValue: 5448.85863534020710106392189635,
    hasBuySpent: true,
    klinePercentage: 1.0221
  },
  {
    timestamp: new Date('2024-04-03T20:15:00.000Z'),
    plPercentage: 0.33754,
    plValue: 4582.87990998141075933630485152,
    hasBuySpent: true,
    klinePercentage: 0.9006
  },
  {
    timestamp: new Date('2024-04-07T15:00:00.000Z'),
    plPercentage: 0.35877,
    plValue: 5157.15756736375247570136197686,
    hasBuySpent: true,
    klinePercentage: 1.0108
  },
  {
    timestamp: new Date('2024-04-11T09:45:00.000Z'),
    plPercentage: 0.36441,
    plValue: 5348.1971832352653414193279929,
    hasBuySpent: true,
    klinePercentage: 1.0443
  },
  {
    timestamp: new Date('2024-04-15T04:30:00.000Z'),
    plPercentage: 0.25276,
    plValue: 3953.35317274782215515285599986,
    hasBuySpent: true,
    klinePercentage: 0.8775
  },
  {
    timestamp: new Date('2024-04-18T23:15:00.000Z'),
    plPercentage: 0.23608,
    plValue: 3692.3863599936411530262034847,
    hasBuySpent: true,
    klinePercentage: 0.8396
  },
  {
    timestamp: new Date('2024-04-22T18:00:00.000Z'),
    plPercentage: 0.28841,
    plValue: 4510.79700835336247532662394394,
    hasBuySpent: true,
    klinePercentage: 0.9248
  },
  {
    timestamp: new Date('2024-04-26T12:45:00.000Z'),
    plPercentage: 0.25679,
    plValue: 4016.31215604949960519566838069,
    hasBuySpent: true,
    klinePercentage: 0.8605
  },
  {
    timestamp: new Date('2024-04-30T07:30:00.000Z'),
    plPercentage: 0.24455,
    plValue: 3824.85972717747339475275576496,
    hasBuySpent: true,
    klinePercentage: 0.8313
  },
  {
    timestamp: new Date('2024-05-04T02:15:00.000Z'),
    plPercentage: 0.24127,
    plValue: 3773.63208427073166584408347196,
    hasBuySpent: true,
    klinePercentage: 0.8118
  },
  {
    timestamp: new Date('2024-05-07T21:00:00.000Z'),
    plPercentage: 0.25374,
    plValue: 3968.660918945400226011466156,
    hasBuySpent: true,
    klinePercentage: 0.8197
  },
  {
    timestamp: new Date('2024-05-11T15:45:00.000Z'),
    plPercentage: 0.23121,
    plValue: 3616.2114609037098606335059839,
    hasBuySpent: true,
    klinePercentage: 0.7654
  },
  {
    timestamp: new Date('2024-05-15T10:30:00.000Z'),
    plPercentage: 0.2339,
    plValue: 3658.312474937866435585710454,
    hasBuySpent: true,
    klinePercentage: 0.8155
  },
  {
    timestamp: new Date('2024-05-19T05:15:00.000Z'),
    plPercentage: 0.28327,
    plValue: 4549.085780599531885780922425,
    hasBuySpent: true,
    klinePercentage: 0.9393
  },
  {
    timestamp: new Date('2024-05-23T00:00:00.000Z'),
    plPercentage: 0.33749,
    plValue: 5438.924849718575088684540984,
    hasBuySpent: true,
    klinePercentage: 0.9973
  },
  {
    timestamp: new Date('2024-05-26T18:45:00.000Z'),
    plPercentage: 0.33053,
    plValue: 5326.834900855517726038270538,
    hasBuySpent: true,
    klinePercentage: 0.9863
  }
];

export const PortfolioPerformanceChart = () => {
  const option = useMemo(() => {
    const cumulative_change_data = cumulativeChangeList.map(x => [
      x.timestamp,
      x.plPercentage
    ]);

    const btc_trend_data = cumulativeChangeList.map(x => [
      x.timestamp,
      x.klinePercentage
    ]);

    let xLabelFormat = '{MMM} {yyyy}';

    return {
      backgroundColor: 'transparent',
      connectNulls: true,
      grid: { bottom: 30, left: 5, right: 35, top: 20 },
      legend: { show: false },
      series: [
        {
          areaStyle: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: 'rgb(72, 109, 247, 0.3)'
                },
                {
                  offset: 1,
                  color: 'rgb(72, 109, 247, 0)'
                }
              ],
              global: false,
              x: 0,
              x2: 0,
              y: 0,
              y2: 1
            }
          },
          color: '#486DF7',
          data: cumulative_change_data,
          itemStyle: { normal: { showSymbol: false } },
          name: 'All-time profit',
          symbol: 'none',
          symbolSize: 0,
          type: 'line'
        },
        {
          color: '#F5B97F',
          data: btc_trend_data,
          itemStyle: { normal: { showSymbol: false } },
          name: 'BTC trend',
          symbol: 'none',
          symbolSize: 0,
          type: 'line'
        }
      ],
      tooltip: {
        confine: true,
        trigger: 'axis',
        extraCssText:
          'padding: 0px; border: none; background: transparent; box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
        axisPointer: {
          type: 'cross',
          label: { show: false }
        },
        formatter: function (params: SeriesData[]) {
          const [series, trend] = params;

          const date = new Date(series.data[0]);
          const date_string = date.toDateString();
          const time_string = date.toTimeString().split(' ')[0].substring(0, 5);

          const positive_color = 'text-green-500';
          const negative_color = 'text-red-500';

          const positive_symbol = '<span class="text-2xs">▲</span>';
          const negative_symbol = '<span class="text-2xs">▼</span>';

          const series_positive = series.data[1] > 0;
          const series_symbol = series_positive
            ? positive_symbol
            : negative_symbol;
          const series_color = series_positive
            ? positive_color
            : negative_color;
          const series_value = series_positive
            ? series.data[1]
            : series.data[1] * -1;
          const series_percent = formatNumber(series_value, {
            style: 'percent',
            decimalDigits: 2
          });

          const trend_positive = trend.data[1] > 0;
          const trend_symbol = trend_positive
            ? positive_symbol
            : negative_symbol;
          const trend_color = trend_positive ? positive_color : negative_color;
          const trend_value = trend_positive
            ? trend.data[1]
            : trend.data[1] * -1;
          const trend_percent = formatNumber(trend_value, {
            style: 'percent',
            decimalDigits: 2
          });

          return `
            <div class="text-sm border-0 rounded-sm p-2 bg-muted shadow-xl">
              <div class="flex flex-col items-center justify-center">
                <div class="text-xs pb-2 text-muted">
                  <span class="text-white">${date_string}</span>
                  <span class="text-muted-foreground">${time_string}</span>
                </div>
                <div class="text-white flex flex-row items-center justify-between w-full gap-2">
                  <div>
                    ${series.marker}
                    <span class="text-muted-foreground">
                      ${series.seriesName}
                    </span>
                  </div>
                  <div class="flex flex-row items-center gap-1 ${series_color}">
                    ${series_symbol} ${series_percent}
                  </div>
                </div>
                <div class="text-white flex flex-row items-center justify-between w-full gap-2">
                  <div>
                    ${trend.marker}
                    <span class="text-muted-foreground">
                      ${trend.seriesName}
                    </span>
                  </div>
                  <div class="flex flex-row items-center gap-1 ${trend_color}">
                    ${trend_symbol} ${trend_percent}
                  </div>
                </div>
              </div>
            </div>`;
        }
      },
      xAxis: {
        axisLabel: {
          color: '#646B80',
          fontSize: 10,
          margin: 7,
          show: true,
          hideOverlap: true,
          formatter: xLabelFormat
        },
        axisLine: {
          lineStyle: { color: '#616E85' }
        },
        splitNumber: 5,
        type: 'time'
      },
      yAxis: {
        axisLabel: {
          color: '#A1A7BB',
          fontSize: 10,
          show: true
        },
        nameLocation: 'start',
        nameTextStyle: {
          fontSize: 11,
          fontWeight: 600,
          padding: [15, 0, 0, 20]
        },
        position: 'right',
        scale: true,
        show: true,
        splitLine: {
          lineStyle: { color: '#313544' },
          show: true
        },
        splitNumber: 5,
        type: 'value'
      }
    };
  }, []);

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

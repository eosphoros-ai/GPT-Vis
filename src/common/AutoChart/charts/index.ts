import type { CustomChart } from '../types';
import multiLineChart from './multiLineChart';
import multiMeasureColumnChart from './multiMeasureColumnChart';
import multiMeasureLineChart from './multiMeasureLineChart';

export const customCharts: CustomChart[] = [
  multiLineChart,
  multiMeasureColumnChart,
  multiMeasureLineChart,
];

export type CustomChartsType =
  | 'multi_line_chart'
  | 'multi_measure_column_chart'
  | 'multi_measure_line_chart';

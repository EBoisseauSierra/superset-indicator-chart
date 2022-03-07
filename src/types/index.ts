import {
  AdhocFilter,
  QueryFormColumn,
  QueryFormData,
  QueryFormMetric
} from '@superset-ui/core';

export type ChartProps = {
  markdowns: string[];
  backgroundColors: string[];
  textColor: string;
  itemMinWidth: number;
  roundedCorners: boolean;
  height: number;
  width: number;
};

export type FormData = QueryFormData & {
  adhoc_filters: AdhocFilter[];
  data_color_mapper: string;
  groupby: QueryFormColumn[];
  markdown: string;
  metrics: QueryFormMetric[];
  number_format: string;
  item_min_width: number;
  rounded_corners: boolean;
  text_color: string;
};

export type SupersetAppState = {
  common: {
    conf: {
      [key: string]: any,
    }
  }
};

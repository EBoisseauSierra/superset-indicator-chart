import { FormData } from './types';

const defaultDataColorMapper = `
function dataColorMapper(data) {
  if (data.temperature >= 17 & data.temperature <= 23){
      return '#5AC189';
  }
  else if (data.temperature > 16 & data.temperature < 24) {
      return '#FCC700';
  }
  else {
      return '#E04355';
  }
}
`;

const defaultMarkdown = `
{{connection_status}} **{{logger_title}}**

{{temperature}} °C
`;

export const DEFAULT_FORM_DATA: FormData = {
  adhoc_filters: [],
  data_color_mapper: defaultDataColorMapper,
  datasource: '',
  groupby: [],
  markdown: defaultMarkdown,
  metrics: [],
  number_format: 'SMART_NUMBER',
  order_desc: true,
  rounded_corners: true,
  text_color: 'dark',
  viz_type: '',
  item_min_width: 12,
};

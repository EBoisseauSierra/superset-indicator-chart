import { t } from '@superset-ui/core';
import {
  D3_FORMAT_DOCS,
  D3_FORMAT_OPTIONS,
  formatSelectOptions,
  sections,
  emitFilterControl,
  ControlPanelConfig,
} from '@superset-ui/chart-controls';
import { DEFAULT_FORM_DATA } from './constants';
import { jsFunctionControl } from './utils';


const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      tabOverride: 'data',
      controlSetRows: [
        ['metrics'],
        ['adhoc_filters'],
        emitFilterControl,
        ['groupby'],
        ['series_limit_metric'],
      ],
    },
    {
      label: t('Chart Contents'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'markdown',
            config: {
              type: 'TextAreaControl',
              label: t('Content'),
              default: DEFAULT_FORM_DATA.markdown,
              language: 'markdown',
              offerEditInModal: true,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
    {
      label: t('Chart Design'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'data_color_mapper',
            config: jsFunctionControl(
              t('Background colour'),
              t(
                'Define a javascript function that receives the data array used in the visualization ' +
                'and is expected to return a hex color code which will be used as the background color. ',
              ),
              null,
              100,
              DEFAULT_FORM_DATA.data_color_mapper,
            ),
          },
        ],
        [
          {
            name: 'text_color',
            config: {
              type: 'SelectControl',
              label: t('Text Color'),
              choices: formatSelectOptions(['light', 'dark']),
              default: DEFAULT_FORM_DATA.text_color,
              renderTrigger: true,
            },
          },
        ],
        [
          {
            name: 'number_format',
            config: {
              type: 'SelectControl',
              label: t('Number format'),
              freeForm: true,
              renderTrigger: true,
              default: DEFAULT_FORM_DATA.number_format,
              choices: D3_FORMAT_OPTIONS,
              description: D3_FORMAT_DOCS,
            },
          },
        ],
        [
          {
            name: 'itemMinWidth',
            config: {
              type: 'SliderControl',
              label: t('Item minimal width'),
              description: t('Minimal width a block should have'),
              renderTrigger: true,
              min: 6,
              max: 256,
              default: DEFAULT_FORM_DATA.item_min_width,
            },
          },
        ],
        [
          {
            name: 'rounded_corners',
            config: {
              type: 'CheckboxControl',
              label: t('Rounded Corners'),
              default: DEFAULT_FORM_DATA.rounded_corners,
              renderTrigger: true,
            },
          },
        ],
      ],
    },
  ],
};
export default config;

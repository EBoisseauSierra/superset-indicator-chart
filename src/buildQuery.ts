import { buildQueryContext } from '@superset-ui/core';
import { FormData } from './types';

export default function buildQuery(formData: FormData) {
  // const { metrics } = formData;

  return buildQueryContext(formData, baseQueryObject => [
    {
      ...baseQueryObject,
    },
  ]);
}

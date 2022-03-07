import { buildQueryContext } from '@superset-ui/core';
import { FormData } from './types';

export default function buildQuery(formData: FormData) {
  const { groupby = [] } = formData;

  return buildQueryContext(formData, baseQueryObject => [
    {
      ...baseQueryObject,
      columns: [...groupby],
    },
  ]);
}

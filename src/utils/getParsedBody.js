import get from 'lodash.get';

import { TEXT_PLAIN, APPLICATION_JSON } from '../constants';

import { parseTextResponse } from './parseTextResponse';
import { parseJSONResponse } from './parseJSONResponse';

/**
 * @param  {Object} response
 * @return {Promise}
 */
export const getParsedBody = response => {
  const contentType = get(response, ['headers', '_headers', 'content-type', 0]);

  if (contentType === TEXT_PLAIN) return parseTextResponse(response);

  if (contentType === APPLICATION_JSON) return parseJSONResponse(response);

  return Promise.resolve('');
};

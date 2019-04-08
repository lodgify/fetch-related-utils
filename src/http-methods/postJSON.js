import { POST, POST_JSON_HEADERS } from '../constants';
import { handleErrors } from '../utils/handleErrors';
import { parseJSONResponse } from '../utils/parseJSONResponse';

/**
 * @param  {string} url
 * @param  {Object} body
 * @param  {Object} [headers={}]
 * @param  {Object} [options={}]
 * @return {Promise}
 */
export const postJSON = (url, body, headers = {}, options = {}) =>
  fetch(url, {
    method: POST,
    headers: {
      ...POST_JSON_HEADERS,
      ...headers,
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then(handleErrors)
    .then(parseJSONResponse);

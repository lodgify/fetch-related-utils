import { GET } from '../constants';
import { handleErrors } from '../utils/handleErrors';
import { parseJSONResponse } from '../utils/parseJSONResponse';

/**
 * @param  {string} url
 * @return {Promise}
 */
export const getJSON = url =>
  fetch(url, { method: GET })
    .then(handleErrors)
    .then(parseJSONResponse);

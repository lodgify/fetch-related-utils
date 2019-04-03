/**
 * @param  {Object} response
 * @return {Promise}
 */
export const parseJSONResponse = response =>
  response.json().catch(() => Promise.resolve(null));

/**
 * Helper for throwing Error if response to fetch is not ok
 * @param  {Object} response
 * @throws {Error}
 * @return {Object}
 */
export const handleErrors = response => {
  if (!response.ok) {
    if (response.status >= 500) {
      // eslint-disable-next-line no-console
      console.error(response);
    }
    throw Error(response.statusText);
  }
  return response;
};

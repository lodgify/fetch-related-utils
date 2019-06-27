/**
 * Helper for throwing Error if response to fetch is not ok
 * @param  {Object} response
 * @throws {Error}
 * @return {Object}
 */
export const handleErrors = response => {
  if (!response.ok) {
    const { status, statusText, url } = response;

    return response.text().then(body => {
      // istanbul ignore next
      if (!global.location)
        // eslint-disable-next-line no-console
        console.log(
          `Request failed | url: ${url} status: ${status} statusText: ${statusText} body: ${body}`
        );
      return Promise.reject({
        body,
        status,
        statusText,
        url,
      });
    });
  }

  return Promise.resolve(response);
};

import { POST, POST_JSON_HEADERS } from '../constants';
import { handleErrors } from '../utils/handleErrors';
import { parseJSONResponse } from '../utils/parseJSONResponse';

import { postJSON } from './postJSON';

const url = 'someUrl';
const body = '📝';

describe('get', () => {
  beforeAll(() => {
    postJSON(url, body);
  });

  it('should call `fetch` with the correct arguments', () => {
    expect(fetch).toHaveBeenCalledWith(url, {
      method: POST,
      headers: { ...POST_JSON_HEADERS },
      body: JSON.stringify(body),
    });
  });

  describe('if `headers` are passed', () => {
    it('should call `fetch` with the correct arguments', () => {
      const headers = { some: 'headers' };

      fetch.mockClear();
      postJSON(url, body, headers);

      expect(fetch).toHaveBeenCalledWith(url, {
        method: POST,
        headers: { ...POST_JSON_HEADERS, ...headers },
        body: JSON.stringify(body),
      });
    });
  });

  it('should call `fetch.then` with `handleErrors`', () => {
    expect(fetch.then).toHaveBeenCalledWith(handleErrors);
  });

  it('should call `fetch.then` with `parseJSONResponse`', () => {
    expect(fetch.then).toHaveBeenCalledWith(parseJSONResponse);
  });

  it('should return whatever `fetch.then` returns', () => {
    const actual = postJSON(url, body);

    expect(actual).toBe(fetch);
  });
});

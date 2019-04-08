import { GET } from '../constants';
import { handleErrors } from '../utils/handleErrors';
import { parseJSONResponse } from '../utils/parseJSONResponse';

import { getJSON } from './getJSON';

const url = 'someUrl';

describe('get', () => {
  beforeAll(() => {
    getJSON(url);
  });

  it('should call `fetch` with the correct arguments', () => {
    expect(fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        method: GET,
      })
    );
  });

  it('should call `fetch.then` with `handleErrors`', () => {
    expect(fetch.then).toHaveBeenCalledWith(handleErrors);
  });

  it('should call `fetch.then` with `parseJSONResponse`', () => {
    expect(fetch.then).toHaveBeenCalledWith(parseJSONResponse);
  });

  it('should return whatever `fetch.then` returns', () => {
    const actual = getJSON(url);

    expect(actual).toBe(fetch);
  });
});

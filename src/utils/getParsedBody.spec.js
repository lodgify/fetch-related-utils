jest.mock('lodash');
jest.mock('./parseTextResponse');
jest.mock('./parseJSONResponse');

import { get } from 'lodash';

import { TEXT_PLAIN, APPLICATION_JSON } from '../constants';

import { getParsedBody } from './getParsedBody';
import { parseTextResponse } from './parseTextResponse';
import { parseJSONResponse } from './parseJSONResponse';

Promise.resolve = jest.fn(() => Promise);

const response = {
  headers: {
    _headers: {
      'content-type': ['seren/dipity'],
    },
  },
};

describe('`getParsedBody`', () => {
  it('it should call `get` with the right arguments', () => {
    get.mockReturnValueOnce('ver/mut');
    getParsedBody(response);

    expect(get).toHaveBeenCalledWith(response, [
      'headers',
      '_headers',
      'content-type',
    ]);
  });

  describe('if `content-type` is set to `plain/text`', () => {
    it('should call `parseTextResponse` with the right argument', () => {
      get.mockReturnValueOnce(TEXT_PLAIN);
      getParsedBody(response);

      expect(parseTextResponse).toHaveBeenCalledWith(response);
    });
  });

  describe('if `content-type` is set to `application/json`', () => {
    it('should call `parseJSONResponse` with the right argument', () => {
      get.mockReturnValueOnce(APPLICATION_JSON);
      getParsedBody(response);

      expect(parseJSONResponse).toHaveBeenCalledWith(response);
    });
  });

  it('should return `Promise.resolve` with an empty string', () => {
    get.mockReturnValueOnce('com/plain');
    const actual = getParsedBody(response);

    expect(actual).toBe(Promise);
  });
});

jest.mock('./getParsedBody');

import { handleErrors } from './handleErrors';
import { getParsedBody } from './getParsedBody';

const response = {
  ok: false,
  url: 'sombala',
  status: '9999',
  statusText: 'the end',
  body: { letTheBodies: 'hit the floor' },
  headers: {
    _headers: {
      'content-type': ['seren/dipity'],
    },
  },
};

const { body, status, statusText, url } = response;

const errorMessage = `
           
 This sucks... 

 Request to ${url} failed.
 Status code: ${status}
 Status text: ${statusText}
 Body: ${body}
`;

JSON.stringify = jest.fn(() => 'BIP, BOOP, BURI, ICH...');
// eslint-disable-next-line no-console
console.log = jest.fn();

getParsedBody.mockImplementation(() => getParsedBody);
getParsedBody.then = jest.fn();

getParsedBody.then.mockImplementation(callback => {
  callback(response);
  JSON.stringify;
  // eslint-disable-next-line no-console
  console.log(errorMessage);
  return getParsedBody;
});
getParsedBody.firstThenArg = response;

describe('handleErrors', () => {
  beforeAll(() => {
    try {
      handleErrors(response);
    } catch (error) {}
  });

  describe('if response is ok', () => {
    it('should return the response', () => {
      const okResponse = { ok: true };
      const actual = handleErrors(okResponse);

      expect(actual).toBe(okResponse);
    });
  });

  describe('if response is not ok', () => {
    it('should call `getParsedBody` with the right argument', () => {
      expect(getParsedBody).toHaveBeenCalledWith(response);
    });
    describe('`getParsedBody`', () => {
      it('should call `getParsedBody.then` the first time with a function', () => {
        expect(getParsedBody.then).toHaveBeenCalledWith(expect.any(Function));
      });

      describe('the function passed to  `getParsedBody.then`', () => {
        it('should call `JSON.stringify` with the right argument', () => {
          expect(JSON.stringify).toHaveBeenCalledWith(response, null, ' ');
        });

        it('should log the `status`, `statusText`, `url` and `body` of the response', () => {
          // eslint-disable-next-line no-console
          expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(errorMessage)
          );
        });
      });

      it('should throw and Error', () => {
        expect(() => {
          handleErrors(response);
        }).toThrowError(status);
      });
    });
  });
});

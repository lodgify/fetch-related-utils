import { handleErrors } from './handleErrors';

describe('handleErrors', () => {
  it('should throw and Error if the response is not ok', () => {
    const message = 'Blaaargh';

    expect(() => {
      handleErrors({ ok: false, statusText: message });
    }).toThrowError(message);
  });

  it('should return the response if the response is ok', () => {
    const okResponse = { ok: true };
    const actual = handleErrors(okResponse);

    expect(actual).toBe(okResponse);
  });

  it('if received a server error then it should log the error', () => {
    const response = { ok: false, statusText: 'Blaaargh', status: 505 };

    // eslint-disable-next-line no-console
    console.error = jest.fn();

    expect(() => {
      handleErrors(response);
    }).toThrowError(response.statusText);

    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledWith(response);
  });
});

import { handleErrors } from './handleErrors';

const body = 'some body';
const status = 'some status';
const statusText = 'some statusText';
const url = 'some url';

const REJECTED = 'REJJED';
const RESOLVED = 'OK';

Promise = {
  reject: jest.fn(() => REJECTED),
  resolve: jest.fn(() => RESOLVED),
};

const response = {
  status,
  statusText,
  text: jest.fn(() => response),
  then: jest.fn(callback => callback(body)),
  url,
};

describe('handleErrors', () => {
  describe('if `response.ok` is `false`', () => {
    it('should call `response.text`', () => {
      response.text.mockClear();
      handleErrors({
        ...response,
        ok: false,
      });

      expect(response.text).toHaveBeenCalled();
    });

    it('should call `response.text().then`', () => {
      response.then.mockClear();
      handleErrors({
        ...response,
        ok: false,
      });

      expect(response.then).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should call `Promise.reject` with the right arguments', () => {
      Promise.reject.mockClear();
      handleErrors({
        ...response,
        ok: false,
      });

      expect(Promise.reject).toHaveBeenCalledWith({
        body,
        status,
        statusText,
        url,
      });
    });

    it('should return whatever `Promise.reject` returns', () => {
      const actual = handleErrors({
        ...response,
        ok: false,
      });

      expect(actual).toBe(REJECTED);
    });
  });

  describe('if `response.ok` is `true`', () => {
    it('should not call `response.text`', () => {
      response.text.mockClear();
      handleErrors({
        ...response,
        ok: true,
      });

      expect(response.text).not.toHaveBeenCalled();
    });

    it('should call `Promise.resolve` with the right arguments', () => {
      Promise.resolve.mockClear();
      handleErrors({
        ...response,
        ok: true,
      });

      expect(Promise.resolve).toHaveBeenCalledWith({ ...response, ok: true });
    });

    it('should return whatever `Promise.resolve` returns', () => {
      const actual = handleErrors({
        ...response,
        ok: true,
      });

      expect(actual).toBe(RESOLVED);
    });
  });
});

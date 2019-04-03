import { parseJSONResponse } from './parseJSONResponse';

const response = {
  json: jest.fn().mockReturnThis(),
  catch: jest.fn(callback => callback()),
};

Promise.resolve = jest.fn();

describe('parseJSONResponse', () => {
  beforeAll(() => {
    parseJSONResponse(response);
  });

  it('should call `response.json()`', () => {
    expect(response.json).toHaveBeenCalled();
  });

  it('should call `response.json().catch()`', () => {
    expect(response.catch).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should call `Promise.resolve` with `null`', () => {
    expect(Promise.resolve).toHaveBeenCalledWith(null);
  });
});

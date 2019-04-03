import { parseTextResponse } from './parseTextResponse';

describe('parseTextResponse', () => {
  it('should return the return value of `response.json`', () => {
    const expected = 'yo';
    const response = {
      text: () => expected,
    };
    const actual = parseTextResponse(response);

    expect(actual).toBe(expected);
  });
});

const postJSONReturnValue = 'postJSON return value';
const postJSON = jest.fn(() => postJSONReturnValue);

module.exports = { postJSON, postJSONReturnValue };

const getJSONReturnValue = 'getJSON return value';
const getJSON = jest.fn(() => getJSONReturnValue);

module.exports = { getJSON, getJSONReturnValue };

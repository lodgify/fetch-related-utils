const fetch = jest.fn();

fetch.mockImplementation(() => fetch);
fetch.then = jest.fn();
fetch.then.mockImplementation(() => fetch);

global.fetch = fetch;

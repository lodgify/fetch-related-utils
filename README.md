# Fetch related utils

Simple helpers for fetch.

## Install

`$ npm install @lodgify/fetch-related-utils`

## Usage
```js
import { postJSON } from '@lodgify/fetch-related-utils';

const url = "www.lassie.com";
const body = {
  toy: "stick",
};
const customHeaders = {
  redirect: "follow",
};

postJSON(url, body, customHeaders);
```

## Contributing

See [contributing](https://github.com/lodgify/fetch-related-utils/blob/master/docs/CONTRIBUTING.md).

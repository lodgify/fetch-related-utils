# Fetch helpers

Simple helpers for fetch.

## Install

`$ npm install @lodgify/fetch-helpers`

## Usage
```js
import { postJSON } from '@lodgify/fetch-helpers';

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

See [contributing](https://github.com/lodgify/fetch-helpers/blob/master/docs/CONTRIBUTING.md).

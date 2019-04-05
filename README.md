# Isomorphic fetch helpers

Simple helpers for [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).

## Install

`$ npm install @lodgify/isomorphic-fetch-helpers`

## Usage
```js
import { postJSON } from '@lodgify/isomorphic-fetch-helpers';

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

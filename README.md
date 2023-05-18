# is-platform

[![NPM version](https://img.shields.io/npm/v/is-platform?color=a1b858&label=)](https://www.npmjs.com/package/is-platform)

## Usage

```ts
import { IS_BROWSER, IS_DENO, IS_ELECTRON, IS_NODE, IS_SERVER } from "is-platform";

IS_NODE; // node => true, deno => false
IS_DENO; // deno => true, node => false
IS_BROWSER; // browser => true
IS_SERVER; // server, e.g. deno or node => true
IS_ELECTRON; // electron => true
```

## License

[MIT](./LICENSE) License © 2022 [Ray](https://github.com/so1ve)

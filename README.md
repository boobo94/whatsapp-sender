
# Run

```sh
yarn start
```

## Known issues

On whatsapp-web.js v1.22.1, after QR scanning is stucked.

In order to fix it, go to `node_modules/whatsapp-web.js/src/CLient.js#175` (line 175) and replace

```js
    const INTRO_IMG_SELECTOR = '[data-testid="intro-md-beta-logo-dark"], [data-testid="intro-md-beta-logo-light"], [data-asset-intro-image-light="true"], [data-asset-intro-image-dark="true"]';
```

with

```js
const INTRO_IMG_SELECTOR = 'div[role=\'textbox\']';
```

[Source](https://github.com/pedroslopez/whatsapp-web.js/issues/2473#issuecomment-1707469920)
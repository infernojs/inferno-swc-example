# SWC Inferno example

A template for quickly getting Inferno js project up.
Tech stack:
- Inferno v9
- Webpack v5
- Typescript v5
- SWC v1 see [swc-plugin-inferno](https://github.com/infernojs/swc-plugin-inferno)
- Tailwind v4
- PostCSS v8
- Eslint v9

### Notes
Build will output files to `dist` directory. When hosting the project, keep `index.html` excluded from the server caching and send `Cache-Control no-store` header when fetching index.html.

By default, there will be javascript and css files generated with a hash in the filename. This is to ensure that the browser fetches the latest version of the file when the content changes.

If you want to use `inferno-router` it is recommended to setup "SinglePageApplication (SPA)" rewrite rules. This is because the router uses the browser's history API to change the URL without refreshing the page. This means that the server should serve the `index.html` file for all routes.

## Installing

```
npm install
```

## Building

```
npm run build
```

## Running

```
npm start
```
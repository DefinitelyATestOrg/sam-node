# Migration guide

This guide outlines the changes and steps needed to migrate your codebase to the latest version of the Sam TypeScript SDK.

The main changes are that the SDK now relies on the [builtin Web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of `node-fetch` and has zero dependencies.

## Environment requirements

The minimum supported runtime and tooling versions are now:

- Node.js 18.x last LTS (Required for built-in fetch support)
  - This was previously documented as the minimum supported Node.js version but Node.js 16.x mostly worked at runtime; now it will not.
- TypeScript 4.9
- Jest 28

## Minimum types requirements

### DOM

`tsconfig.json`

```jsonc
{
  "target": "ES2015", // note: we recommend ES2020 or higher
  "lib": ["DOM", "DOM.Iterable", "ES2018"]
}
```

### Node.js

`tsconfig.json`

```jsonc
{
  "target": "ES2015" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/node": ">= 18.18.7"
  }
}
```

### Cloudflare Workers

`tsconfig.json`

```jsonc
{
  "target": "ES2015", // note: we recommend ES2020 or higher
  "lib": ["ES2020"], // <- needed by @cloudflare/workers-types
  "types": ["@cloudflare/workers-types"]
}
```

`package.json`

```json
{
  "devDependencies": {
    "@cloudflare/workers-types": ">= 0.20221111.0"
  }
}
```

### Bun

`tsconfig.json`

```jsonc
{
  "target": "ES2015" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/bun": ">= 1.2.0"
  }
}
```

### Deno

No config needed!

## Breaking changes

### URI encoded path parameters

Path params are now properly encoded by default. If you were manually encoding path parameters before giving them to the SDK, you must now stop doing that and pass the
param without any encoding applied.

For example:

```diff
- client.example.retrieve(encodeURIComponent('string/with/slash'))
+ client.example.retrieve('string/with/slash') // renders example/string%2Fwith%2Fslash
```

Previously without the `encodeURIComponent()` call we would have used the path `/example/string/with/slash`; now we'll use `/example/string%2Fwith%2Fslash`.

### Removed `httpAgent` in favor of `fetchOptions`

The `httpAgent` client option has been removed in favor of a [platform-specific `fetchOptions` property](https://github.com/DefinitelyATestOrg/sam-node#fetch-options).
This change was made as `httpAgent` relied on `node:http` agents which are not supported by any runtime's builtin fetch implementation.

If you were using `httpAgent` for proxy support, check out the [new proxy documentation](https://github.com/DefinitelyATestOrg/sam-node#configuring-proxies).

Before:

```ts
import Sam from 'sam';
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new Sam({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
  apiKey: 'My API Key',
});
```

After:

```ts
import Sam from 'sam';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent(process.env.PROXY_URL);
const client = new Sam({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

### Removed request options overloads

When making requests with no required body, query or header parameters, you must now explicitly pass `null`, `undefined` or an empty object `{}` to the params argument in order to customise request options.

```diff
client.example.list();
client.example.list({}, { headers: { ... } });
client.example.list(null, { headers: { ... } });
client.example.list(undefined, { headers: { ... } });
- client.example.list({ headers: { ... } });
+ client.example.list({}, { headers: { ... } });
```

This affects the following methods:

- `client.messages.batches.retrieve()`
- `client.messages.batches.list()`
- `client.messages.batches.delete()`
- `client.messages.batches.cancel()`
- `client.messages.batches.cancelBeta()`
- `client.messages.batches.results()`
- `client.messages.batches.resultsBeta()`
- `client.messages.batches.betaTrue.retrieve()`
- `client.messages.batches.betaTrue.delete()`
- `client.messages.batchesBetaTrue.list()`
- `client.models.retrieve()`
- `client.models.list()`
- `client.models.retrieveBeta()`
- `client.modelsBetaTrue.list()`

### File handling

The deprecated `fileFromPath` helper has been removed in favor of native Node.js streams:

```ts
// Before
Sam.fileFromPath('path/to/file');

// After
import fs from 'fs';
fs.createReadStream('path/to/file');
```

Note that this function previously only worked on Node.js. If you're using Bun, you can use [`Bun.file`](https://bun.sh/docs/api/file-io) instead.

### Shims removal

Previously you could configure the types that the SDK used like this:

```ts
// Tell TypeScript and the package to use the global Web fetch instead of node-fetch.
import 'sam/shims/web';
import Sam from 'sam';
```

The `sam/shims` imports have been removed. Your global types must now be [correctly configured](#minimum-types-requirements).

### `sam/src` directory removed

Previously IDEs may have auto-completed imports from the `sam/src` directory, however this
directory was only included for an improved go-to-definition experience and should not have been used at runtime.

If you have any `sam/src` imports, you must replace it with `sam`.

```ts
// Before
import Sam from 'sam/src';

// After
import Sam from 'sam';
```

### Headers

The `headers` property on `APIError` objects is now an instance of the Web [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) class. It was previously just `Record<string, string | null | undefined>`.

### Removed exports

#### Resource classes

If you were importing resource classes from the root package then you must now import them from the file they are defined in.
This was never valid at the type level and only worked in CommonJS files.

```typescript
// Before
const { Store } = require('sam');

// After
const { Sam } = require('sam');
Sam.Store; // or import directly from sam/resources/store/store
```

#### Refactor of `sam/core`, `error`, `pagination`, `resource` and `uploads`

Much of the `sam/core` file was intended to be internal-only but it was publicly accessible, as such it has been refactored and split up into internal and public files, with public-facing code moved to a new `core` folder and internal code moving to the private `internal` folder.

At the same time, we moved some public-facing files which were previously at the top level into `core` to make the file structure cleaner and more clear:

```typescript
// Before
import 'sam/error';
import 'sam/pagination';
import 'sam/resource';
import 'sam/uploads';

// After
import 'sam/core/error';
import 'sam/core/pagination';
import 'sam/core/resource';
import 'sam/core/uploads';
```

If you were relying on anything that was only exported from `sam/core` and is also not accessible anywhere else, please open an issue and we'll consider adding it to the public API.

#### Cleaned up `uploads` exports

As part of the `core` refactor, `sam/uploads` was moved to `sam/core/uploads`
and the following exports were removed, as they were not intended to be a part of the public API:

- `fileFromPath`
- `BlobPart`
- `BlobLike`
- `FileLike`
- `ResponseLike`
- `isResponseLike`
- `isBlobLike`
- `isFileLike`
- `isUploadable`
- `isMultipartBody`
- `maybeMultipartFormRequestOptions`
- `multipartFormRequestOptions`
- `createForm`

Note that `Uploadable` & `toFile` **are** still exported:

```typescript
import { type Uploadable, toFile } from 'sam/core/uploads';
```

#### `APIClient`

The `APIClient` base client class has been removed as it is no longer needed. If you were importing this class then you must now import the main client class:

```typescript
// Before
import { APIClient } from 'sam/core';

// After
import { Sam } from 'sam';
```

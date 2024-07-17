# Increase Python API library

[![PyPI version](https://img.shields.io/pypi/v/sam-python.svg)](https://pypi.org/project/sam-python/)

The Increase Python library provides convenient access to the Increase REST API from any Python 3.7+
application. The library includes type definitions for all request params and response fields,
and offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).

## Documentation

The REST API documentation can be found [on increase.com](https://increase.com/documentation). The full API of this library can be found in [api.md](api.md).

## Installation

```sh
# install from the production repo
pip install git+ssh://git@github.com/DefinitelyATestOrg/sam-python.git
```

> [!NOTE]
> Once this package is [published to PyPI](https://app.stainlessapi.com/docs/guides/publish), this will become: `pip install sam-python`

## Usage

The full API of this library can be found in [api.md](api.md).

```python
import os
from sam_minus_python import Increase

client = Increase(
    # This is the default and can be omitted
    api_key=os.environ.get("INCREASE_API_KEY"),
    # defaults to "production".
    environment="sandbox",
)

account = client.accounts.create(
    name="My First Increase Account",
)
print(account.id)
```

While you can provide an `api_key` keyword argument,
we recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)
to add `INCREASE_API_KEY="My API Key"` to your `.env` file
so that your API Key is not stored in source control.

## Async usage

Simply import `AsyncIncrease` instead of `Increase` and use `await` with each API call:

```python
import os
import asyncio
from sam_minus_python import AsyncIncrease

client = AsyncIncrease(
    # This is the default and can be omitted
    api_key=os.environ.get("INCREASE_API_KEY"),
    # defaults to "production".
    environment="sandbox",
)


async def main() -> None:
    account = await client.accounts.create(
        name="My First Increase Account",
    )
    print(account.id)


asyncio.run(main())
```

Functionality between the synchronous and asynchronous clients is otherwise identical.

## Using types

Nested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:

- Serializing back into JSON, `model.to_json()`
- Converting to a dictionary, `model.to_dict()`

Typed requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.

## Pagination

List methods in the Increase API are paginated.

This library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:

```python
import sam_minus_python

client = Increase()

all_accounts = []
# Automatically fetches more pages as needed.
for account in client.accounts.list():
    # Do something with account here
    all_accounts.append(account)
print(all_accounts)
```

Or, asynchronously:

```python
import asyncio
import sam_minus_python

client = AsyncIncrease()


async def main() -> None:
    all_accounts = []
    # Iterate through items across all pages, issuing requests as needed.
    async for account in client.accounts.list():
        all_accounts.append(account)
    print(all_accounts)


asyncio.run(main())
```

Alternatively, you can use the `.has_next_page()`, `.next_page_info()`, or `.get_next_page()` methods for more granular control working with pages:

```python
first_page = await client.accounts.list()
if first_page.has_next_page():
    print(f"will fetch next page using these details: {first_page.next_page_info()}")
    next_page = await first_page.get_next_page()
    print(f"number of items we just fetched: {len(next_page.data)}")

# Remove `await` for non-async usage.
```

Or just work directly with the returned data:

```python
first_page = await client.accounts.list()

print(f"next page cursor: {first_page.next_cursor}")  # => "next page cursor: ..."
for account in first_page.data:
    print(account.id)

# Remove `await` for non-async usage.
```

## Nested params

Nested parameters are dictionaries, typed using `TypedDict`, for example:

```python
from sam_minus_python import Increase

client = Increase()

account = client.accounts.create(
    name="New Account!",
)
print(account.id)
```

## File uploads

Request parameters that correspond to file uploads can be passed as `bytes`, a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.

```python
from pathlib import Path
from sam_minus_python import Increase

client = Increase()

client.files.create(
    file=Path("my/file.txt"),
    purpose="other",
)
```

The async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.

## Handling errors

When the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `sam_minus_python.APIConnectionError` is raised.

When the API returns a non-success status code (that is, 4xx or 5xx
response), a subclass of `sam_minus_python.APIStatusError` is raised, containing `status_code` and `response` properties.

All errors inherit from `sam_minus_python.APIError`.

```python
import sam_minus_python
from sam_minus_python import Increase

client = Increase()

try:
    client.accounts.create(
        name="New Account!",
    )
except sam_minus_python.APIConnectionError as e:
    print("The server could not be reached")
    print(e.__cause__)  # an underlying Exception, likely raised within httpx.
except sam_minus_python.RateLimitError as e:
    print("A 429 status code was received; we should back off a bit.")
except sam_minus_python.APIStatusError as e:
    print("Another non-200-range status code was received")
    print(e.status_code)
    print(e.response)
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors are automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors are all retried by default.

You can use the `max_retries` option to configure or disable retry settings:

```python
from sam_minus_python import Increase

# Configure the default for all requests:
client = Increase(
    # default is 2
    max_retries=0,
)

# Or, configure per-request:
client.with_options(max_retries=5).accounts.create(
    name="Jack",
)
```

### Timeouts

By default requests time out after 1 minute. You can configure this with a `timeout` option,
which accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/#fine-tuning-the-configuration) object:

```python
from sam_minus_python import Increase

# Configure the default for all requests:
client = Increase(
    # 20 seconds (default is 1 minute)
    timeout=20.0,
)

# More granular control:
client = Increase(
    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),
)

# Override per-request:
client.with_options(timeout=5.0).accounts.list(
    status="open",
)
```

On timeout, an `APITimeoutError` is thrown.

Note that requests that time out are [retried twice by default](#retries).

## Advanced

### Logging

We use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.

You can enable logging by setting the environment variable `INCREASE_LOG` to `debug`.

```shell
$ export INCREASE_LOG=debug
```

### How to tell whether `None` means `null` or missing

In an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:

```py
if response.my_field is None:
  if 'my_field' not in response.model_fields_set:
    print('Got json like {}, without a "my_field" key present at all.')
  else:
    print('Got json like {"my_field": null}.')
```

### Accessing raw response data (e.g. headers)

The "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,

```py
from sam_minus_python import Increase

client = Increase()
response = client.accounts.with_raw_response.create(
    name="My First Increase Account",
)
print(response.headers.get('X-My-Header'))

account = response.parse()  # get the object that `accounts.create()` would have returned
print(account.id)
```

These methods return an [`LegacyAPIResponse`](https://github.com/DefinitelyATestOrg/sam-python/tree/main/src/sam_minus_python/_legacy_response.py) object. This is a legacy class as we're changing it slightly in the next major version.

For the sync client this will mostly be the same with the exception
of `content` & `text` will be methods instead of properties. In the
async client, all methods will be async.

A migration script will be provided & the migration in general should
be smooth.

#### `.with_streaming_response`

The above interface eagerly reads the full response body when you make the request, which may not always be what you want.

To stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.

As such, `.with_streaming_response` methods return a different [`APIResponse`](https://github.com/DefinitelyATestOrg/sam-python/tree/main/src/sam_minus_python/_response.py) object, and the async client returns an [`AsyncAPIResponse`](https://github.com/DefinitelyATestOrg/sam-python/tree/main/src/sam_minus_python/_response.py) object.

```python
with client.accounts.with_streaming_response.create(
    name="My First Increase Account",
) as response:
    print(response.headers.get("X-My-Header"))

    for line in response.iter_lines():
        print(line)
```

The context manager is required so that the response will reliably be closed.

### Making custom/undocumented requests

This library is typed for convenient access to the documented API.

If you need to access undocumented endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other
http verbs. Options on the client will be respected (such as retries) will be respected when making this
request.

```py
import httpx

response = client.post(
    "/foo",
    cast_to=httpx.Response,
    body={"my_param": True},
)

print(response.headers.get("x-foo"))
```

#### Undocumented request params

If you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You
can also get all the extra fields on the Pydantic model as a dict with
[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).

### Configuring the HTTP client

You can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:

- Support for proxies
- Custom transports
- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality

```python
from sam_minus_python import Increase, DefaultHttpxClient

client = Increase(
    # Or use the `INCREASE_BASE_URL` env var
    base_url="http://my.test.server.example.com:8083",
    http_client=DefaultHttpxClient(
        proxies="http://my.test.proxy.example.com",
        transport=httpx.HTTPTransport(local_address="0.0.0.0"),
    ),
)
```

### Managing HTTP resources

By default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.

## Versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/DefinitelyATestOrg/sam-python/issues) with questions, bugs, or suggestions.

## Requirements

Python 3.7 or higher.

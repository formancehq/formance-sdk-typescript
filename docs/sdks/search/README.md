# Search
(*search*)

### Available Operations

* [search](#search) - Search
* [searchgetServerInfo](#searchgetserverinfo) - Get server info

## search

ElasticSearch query engine

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.search.search({
    after: [
      "users:002",
    ],
    cursor: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    ledgers: [
      "quickstart",
    ],
    policy: "OR",
    raw: {},
    sort: "id:asc",
    terms: [
      "destination=central_bank1",
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { searchSearch } from "@formance/formance-sdk/funcs/searchSearch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await searchSearch(sdk, {
    after: [
      "users:002",
    ],
    cursor: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    ledgers: [
      "quickstart",
    ],
    policy: "OR",
    raw: {},
    sort: "id:asc",
    terms: [
      "destination=central_bank1",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.Query](../../sdk/models/shared/query.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.SearchResponse](../../sdk/models/operations/searchresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## searchgetServerInfo

Get server info

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.search.searchgetServerInfo();

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@formance/formance-sdk/core.js";
import { searchSearchgetServerInfo } from "@formance/formance-sdk/funcs/searchSearchgetServerInfo.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await searchSearchgetServerInfo(sdk);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.SearchgetServerInfoResponse](../../sdk/models/operations/searchgetserverinforesponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

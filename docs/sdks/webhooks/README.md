# Webhooks
(*webhooks*)

### Available Operations

* [activateConfig](#activateconfig) - Activate one config
* [changeConfigSecret](#changeconfigsecret) - Change the signing secret of a config
* [deactivateConfig](#deactivateconfig) - Deactivate one config
* [deleteConfig](#deleteconfig) - Delete one config
* [getManyConfigs](#getmanyconfigs) - Get many configs
* [insertConfig](#insertconfig) - Insert a new config
* [testConfig](#testconfig) - Test one config

## activateConfig

Activate a webhooks config by ID, to start receiving webhooks to its endpoint.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.activateConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
import { webhooksActivateConfig } from "@formance/formance-sdk/funcs/webhooksActivateConfig.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksActivateConfig(sdk, {
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
| `request`                                                                                                                                                                      | [operations.ActivateConfigRequest](../../sdk/models/operations/activateconfigrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ActivateConfigResponse](../../sdk/models/operations/activateconfigresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## changeConfigSecret

Change the signing secret of the endpoint of a webhooks config.

If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)


### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.changeConfigSecret({
    configChangeSecret: {
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    },
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
import { webhooksChangeConfigSecret } from "@formance/formance-sdk/funcs/webhooksChangeConfigSecret.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksChangeConfigSecret(sdk, {
    configChangeSecret: {
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    },
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
| `request`                                                                                                                                                                      | [operations.ChangeConfigSecretRequest](../../sdk/models/operations/changeconfigsecretrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ChangeConfigSecretResponse](../../sdk/models/operations/changeconfigsecretresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## deactivateConfig

Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.deactivateConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
import { webhooksDeactivateConfig } from "@formance/formance-sdk/funcs/webhooksDeactivateConfig.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksDeactivateConfig(sdk, {
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
| `request`                                                                                                                                                                      | [operations.DeactivateConfigRequest](../../sdk/models/operations/deactivateconfigrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.DeactivateConfigResponse](../../sdk/models/operations/deactivateconfigresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## deleteConfig

Delete a webhooks config by ID.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.deleteConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
import { webhooksDeleteConfig } from "@formance/formance-sdk/funcs/webhooksDeleteConfig.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksDeleteConfig(sdk, {
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
| `request`                                                                                                                                                                      | [operations.DeleteConfigRequest](../../sdk/models/operations/deleteconfigrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.DeleteConfigResponse](../../sdk/models/operations/deleteconfigresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## getManyConfigs

Sorted by updated date descending

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.getManyConfigs({
    endpoint: "https://example.com",
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
import { webhooksGetManyConfigs } from "@formance/formance-sdk/funcs/webhooksGetManyConfigs.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksGetManyConfigs(sdk, {
    endpoint: "https://example.com",
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
| `request`                                                                                                                                                                      | [operations.GetManyConfigsRequest](../../sdk/models/operations/getmanyconfigsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.GetManyConfigsResponse](../../sdk/models/operations/getmanyconfigsresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## insertConfig

Insert a new webhooks config.

The endpoint should be a valid https URL and be unique.

The secret is the endpoint's verification secret.
If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)

All eventTypes are converted to lower-case when inserted.


### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.insertConfig({
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    name: "customer_payment",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
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
import { webhooksInsertConfig } from "@formance/formance-sdk/funcs/webhooksInsertConfig.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksInsertConfig(sdk, {
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    name: "customer_payment",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
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
| `request`                                                                                                                                                                      | [shared.ConfigUser](../../sdk/models/shared/configuser.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.InsertConfigResponse](../../sdk/models/operations/insertconfigresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## testConfig

Test a config by sending a webhook to its endpoint.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

const sdk = new SDK({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const result = await sdk.webhooks.testConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
import { webhooksTestConfig } from "@formance/formance-sdk/funcs/webhooksTestConfig.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  authorization: "<YOUR_AUTHORIZATION_HERE>",
});

async function run() {
  const res = await webhooksTestConfig(sdk, {
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
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
| `request`                                                                                                                                                                      | [operations.TestConfigRequest](../../sdk/models/operations/testconfigrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.TestConfigResponse](../../sdk/models/operations/testconfigresponse.md)\>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | default                      | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

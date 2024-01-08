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

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.activateConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ActivateConfigRequest](../../sdk/models/operations/activateconfigrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ActivateConfigResponse](../../sdk/models/operations/activateconfigresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## changeConfigSecret

Change the signing secret of the endpoint of a webhooks config.

If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)


### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.changeConfigSecret({
    configChangeSecret: {
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    },
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ChangeConfigSecretRequest](../../sdk/models/operations/changeconfigsecretrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ChangeConfigSecretResponse](../../sdk/models/operations/changeconfigsecretresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | 400                          | application/json             |
| errors.SDKError              | 400-600                      | */*                          |

## deactivateConfig

Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.deactivateConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeactivateConfigRequest](../../sdk/models/operations/deactivateconfigrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeactivateConfigResponse](../../sdk/models/operations/deactivateconfigresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | 404                          | application/json             |
| errors.SDKError              | 400-600                      | */*                          |

## deleteConfig

Delete a webhooks config by ID.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.deleteConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteConfigRequest](../../sdk/models/operations/deleteconfigrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteConfigResponse](../../sdk/models/operations/deleteconfigresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | 400,404                      | application/json             |
| errors.SDKError              | 400-600                      | */*                          |

## getManyConfigs

Sorted by updated date descending

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.getManyConfigs({
    endpoint: "https://example.com",
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetManyConfigsRequest](../../sdk/models/operations/getmanyconfigsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetManyConfigsResponse](../../sdk/models/operations/getmanyconfigsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.insertConfig({
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ConfigUser](../../sdk/models/shared/configuser.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.InsertConfigResponse](../../sdk/models/operations/insertconfigresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | 400                          | application/json             |
| errors.SDKError              | 400-600                      | */*                          |

## testConfig

Test a config by sending a webhook to its endpoint.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

async function run() {
  const sdk = new SDK({
    authorization: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.webhooks.testConfig({
    id: "4997257d-dfb6-445b-929c-cbe2ab182818",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.TestConfigRequest](../../sdk/models/operations/testconfigrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.TestConfigResponse](../../sdk/models/operations/testconfigresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.WebhooksErrorResponse | 400,404                      | application/json             |
| errors.SDKError              | 400-600                      | */*                          |

# webhooks

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
import { Formance } from "@formance/formance-sdk";
import { ActivateConfigResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.activateConfig("4997257d-dfb6-445b-929c-cbe2ab182818").then((res: ActivateConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Config ID                                                    | 4997257d-dfb6-445b-929c-cbe2ab182818                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ActivateConfigResponse](../../models/operations/activateconfigresponse.md)>**


## changeConfigSecret

Change the signing secret of the endpoint of a webhooks config.

If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)


### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ChangeConfigSecretResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.changeConfigSecret("4997257d-dfb6-445b-929c-cbe2ab182818", {
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
}).then((res: ChangeConfigSecretResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Config ID                                                              | 4997257d-dfb6-445b-929c-cbe2ab182818                                   |
| `configChangeSecret`                                                   | [shared.ConfigChangeSecret](../../models/shared/configchangesecret.md) | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |                                                                        |


### Response

**Promise<[operations.ChangeConfigSecretResponse](../../models/operations/changeconfigsecretresponse.md)>**


## deactivateConfig

Deactivate a webhooks config by ID, to stop receiving webhooks to its endpoint.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeactivateConfigResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.deactivateConfig("4997257d-dfb6-445b-929c-cbe2ab182818").then((res: DeactivateConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Config ID                                                    | 4997257d-dfb6-445b-929c-cbe2ab182818                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeactivateConfigResponse](../../models/operations/deactivateconfigresponse.md)>**


## deleteConfig

Delete a webhooks config by ID.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DeleteConfigResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.deleteConfig("4997257d-dfb6-445b-929c-cbe2ab182818").then((res: DeleteConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Config ID                                                    | 4997257d-dfb6-445b-929c-cbe2ab182818                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.DeleteConfigResponse](../../models/operations/deleteconfigresponse.md)>**


## getManyConfigs

Sorted by updated date descending

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetManyConfigsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.getManyConfigs("https://example.com", "4997257d-dfb6-445b-929c-cbe2ab182818").then((res: GetManyConfigsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `endpoint`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Optional filter by endpoint URL                              | https://example.com                                          |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | Optional filter by Config ID                                 | 4997257d-dfb6-445b-929c-cbe2ab182818                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetManyConfigsResponse](../../models/operations/getmanyconfigsresponse.md)>**


## insertConfig

Insert a new webhooks config.

The endpoint should be a valid https URL and be unique.

The secret is the endpoint's verification secret.
If not passed or empty, a secret is automatically generated.
The format is a random string of bytes of size 24, base64 encoded. (larger size after encoding)

All eventTypes are converted to lower-case when inserted.


### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { InsertConfigResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.insertConfig({
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
  ],
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
}).then((res: InsertConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ConfigUser](../../models/shared/configuser.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.InsertConfigResponse](../../models/operations/insertconfigresponse.md)>**


## testConfig

Test a config by sending a webhook to its endpoint.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { TestConfigResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.webhooks.testConfig("4997257d-dfb6-445b-929c-cbe2ab182818").then((res: TestConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Config ID                                                    | 4997257d-dfb6-445b-929c-cbe2ab182818                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.TestConfigResponse](../../models/operations/testconfigresponse.md)>**


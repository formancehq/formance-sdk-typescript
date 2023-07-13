# payments

### Available Operations

* [connectorsStripeTransfer](#connectorsstripetransfer) - Transfer funds between Stripe accounts
* [connectorsTransfer](#connectorstransfer) - Transfer funds between Connector accounts
* [getConnectorTask](#getconnectortask) - Read a specific task of the connector
* [getPayment](#getpayment) - Get a payment
* [installConnector](#installconnector) - Install a connector
* [listAllConnectors](#listallconnectors) - List all installed connectors
* [listConfigsAvailableConnectors](#listconfigsavailableconnectors) - List the configs of each available connector
* [listConnectorTasks](#listconnectortasks) - List tasks from a connector
* [listConnectorsTransfers](#listconnectorstransfers) - List transfers and their statuses
* [listPayments](#listpayments) - List payments
* [paymentsgetServerInfo](#paymentsgetserverinfo) - Get server info
* [paymentslistAccounts](#paymentslistaccounts) - List accounts
* [readConnectorConfig](#readconnectorconfig) - Read the config of a connector
* [resetConnector](#resetconnector) - Reset a connector
* [uninstallConnector](#uninstallconnector) - Uninstall a connector
* [updateMetadata](#updatemetadata) - Update metadata

## connectorsStripeTransfer

Execute a transfer between two Stripe accounts.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ConnectorsStripeTransferResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.connectorsStripeTransfer({
  amount: 100,
  asset: "USD",
  destination: "acct_1Gqj58KZcSIg2N2q",
  metadata: {},
}).then((res: ConnectorsStripeTransferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.StripeTransferRequest](../../models/shared/stripetransferrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ConnectorsStripeTransferResponse](../../models/operations/connectorsstripetransferresponse.md)>**


## connectorsTransfer

Execute a transfer between two accounts.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ConnectorsTransferResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.connectorsTransfer({
  amount: 100,
  asset: "USD",
  destination: "acct_1Gqj58KZcSIg2N2q",
  source: "acct_1Gqj58KZcSIg2N2q",
}, Connector.DummyPay).then((res: ConnectorsTransferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `transferRequest`                                                | [shared.TransferRequest](../../models/shared/transferrequest.md) | :heavy_check_mark:                                               | N/A                                                              |
| `connector`                                                      | [shared.Connector](../../models/shared/connector.md)             | :heavy_check_mark:                                               | The name of the connector.                                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.ConnectorsTransferResponse](../../models/operations/connectorstransferresponse.md)>**


## getConnectorTask

Get a specific task associated to the connector.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetConnectorTaskResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.getConnectorTask(Connector.DummyPay, "consequatur").then((res: GetConnectorTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [shared.Connector](../../models/shared/connector.md)         | :heavy_check_mark:                                           | The name of the connector.                                   |
| `taskId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The task ID.                                                 |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetConnectorTaskResponse](../../models/operations/getconnectortaskresponse.md)>**


## getPayment

Get a payment

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetPaymentResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.getPayment("est").then((res: GetPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `paymentId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The payment ID.                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentResponse](../../models/operations/getpaymentresponse.md)>**


## installConnector

Install a connector by its name and config.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { InstallConnectorResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.installConnector({
  authorizationEndpoint: "XXX",
  endpoint: "XXX",
  password: "XXX",
  username: "XXX",
}, Connector.Stripe).then((res: InstallConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `requestBody`                                                | *any*                                                        | :heavy_check_mark:                                           | N/A                                                          |
| `connector`                                                  | [shared.Connector](../../models/shared/connector.md)         | :heavy_check_mark:                                           | The name of the connector.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.InstallConnectorResponse](../../models/operations/installconnectorresponse.md)>**


## listAllConnectors

List all installed connectors.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListAllConnectorsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.listAllConnectors().then((res: ListAllConnectorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListAllConnectorsResponse](../../models/operations/listallconnectorsresponse.md)>**


## listConfigsAvailableConnectors

List the configs of each available connector.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListConfigsAvailableConnectorsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.listConfigsAvailableConnectors().then((res: ListConfigsAvailableConnectorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListConfigsAvailableConnectorsResponse](../../models/operations/listconfigsavailableconnectorsresponse.md)>**


## listConnectorTasks

List all tasks associated with this connector.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListConnectorTasksResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.listConnectorTasks(Connector.Modulr, "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==", 716327).then((res: ListConnectorTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connector`                                                                                                                                                                                                                                              | [shared.Connector](../../models/shared/connector.md)                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                       | The name of the connector.                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                          |
| `cursor`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | Parameter used in pagination requests. Maximum page size is set to 15.<br/>Set to the value of next for the next page of results.<br/>Set to the value of previous for the previous page of results.<br/>No other parameters can be set when this parameter is set.<br/> | aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==                                                                                                                                                                                                             |
| `pageSize`                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The maximum number of results to return per page.<br/>                                                                                                                                                                                                   |                                                                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                                                            |                                                                                                                                                                                                                                                          |


### Response

**Promise<[operations.ListConnectorTasksResponse](../../models/operations/listconnectortasksresponse.md)>**


## listConnectorsTransfers

List transfers

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListConnectorsTransfersResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.listConnectorsTransfers(Connector.BankingCircle).then((res: ListConnectorsTransfersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [shared.Connector](../../models/shared/connector.md)         | :heavy_check_mark:                                           | The name of the connector.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListConnectorsTransfersResponse](../../models/operations/listconnectorstransfersresponse.md)>**


## listPayments

List payments

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListPaymentsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector, PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.listPayments("aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==", 289406, [
  "qui",
  "aliquid",
]).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | Parameter used in pagination requests. Maximum page size is set to 15.<br/>Set to the value of next for the next page of results.<br/>Set to the value of previous for the previous page of results.<br/>No other parameters can be set when this parameter is set.<br/> | aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==                                                                                                                                                                                                             |
| `pageSize`                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The maximum number of results to return per page.<br/>                                                                                                                                                                                                   |                                                                                                                                                                                                                                                          |
| `sort`                                                                                                                                                                                                                                                   | *string*[]                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                       | Fields used to sort payments (default is date:desc).                                                                                                                                                                                                     |                                                                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                                                            |                                                                                                                                                                                                                                                          |


### Response

**Promise<[operations.ListPaymentsResponse](../../models/operations/listpaymentsresponse.md)>**


## paymentsgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { PaymentsgetServerInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.paymentsgetServerInfo().then((res: PaymentsgetServerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PaymentsgetServerInfoResponse](../../models/operations/paymentsgetserverinforesponse.md)>**


## paymentslistAccounts

List accounts

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { PaymentslistAccountsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector, PaymentsAccountType } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.paymentslistAccounts("aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==", 586513, [
  "perferendis",
  "magni",
  "assumenda",
]).then((res: PaymentslistAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | Parameter used in pagination requests. Maximum page size is set to 15.<br/>Set to the value of next for the next page of results.<br/>Set to the value of previous for the previous page of results.<br/>No other parameters can be set when this parameter is set.<br/> | aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==                                                                                                                                                                                                             |
| `pageSize`                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The maximum number of results to return per page.<br/>                                                                                                                                                                                                   |                                                                                                                                                                                                                                                          |
| `sort`                                                                                                                                                                                                                                                   | *string*[]                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                       | Fields used to sort payments (default is date:desc).                                                                                                                                                                                                     |                                                                                                                                                                                                                                                          |
| `config`                                                                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                                                                            |                                                                                                                                                                                                                                                          |


### Response

**Promise<[operations.PaymentslistAccountsResponse](../../models/operations/paymentslistaccountsresponse.md)>**


## readConnectorConfig

Read connector config

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ReadConnectorConfigResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.readConnectorConfig(Connector.Wise).then((res: ReadConnectorConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [shared.Connector](../../models/shared/connector.md)         | :heavy_check_mark:                                           | The name of the connector.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadConnectorConfigResponse](../../models/operations/readconnectorconfigresponse.md)>**


## resetConnector

Reset a connector by its name.
It will remove the connector and ALL PAYMENTS generated with it.


### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ResetConnectorResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.resetConnector(Connector.Stripe).then((res: ResetConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [shared.Connector](../../models/shared/connector.md)         | :heavy_check_mark:                                           | The name of the connector.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ResetConnectorResponse](../../models/operations/resetconnectorresponse.md)>**


## uninstallConnector

Uninstall a connector by its name.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UninstallConnectorResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.uninstallConnector(Connector.Stripe).then((res: UninstallConnectorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `connector`                                                  | [shared.Connector](../../models/shared/connector.md)         | :heavy_check_mark:                                           | The name of the connector.                                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UninstallConnectorResponse](../../models/operations/uninstallconnectorresponse.md)>**


## updateMetadata

Update metadata

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UpdateMetadataResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.payments.updateMetadata({
  key: "dolorum",
}, "excepturi").then((res: UpdateMetadataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `paymentMetadata`                                                | [shared.PaymentMetadata](../../models/shared/paymentmetadata.md) | :heavy_check_mark:                                               | N/A                                                              |
| `paymentId`                                                      | *string*                                                         | :heavy_check_mark:                                               | The payment ID.                                                  |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateMetadataResponse](../../models/operations/updatemetadataresponse.md)>**


# wallets

### Available Operations

* [confirmHold](#confirmhold) - Confirm a hold
* [createBalance](#createbalance) - Create a balance
* [createWallet](#createwallet) - Create a new wallet
* [creditWallet](#creditwallet) - Credit a wallet
* [debitWallet](#debitwallet) - Debit a wallet
* [getBalance](#getbalance) - Get detailed balance
* [getHold](#gethold) - Get a hold
* [getHolds](#getholds) - Get all holds for a wallet
* [getTransactions](#gettransactions)
* [getWallet](#getwallet) - Get a wallet
* [getWalletSummary](#getwalletsummary) - Get wallet summary
* [listBalances](#listbalances) - List balances of a wallet
* [listWallets](#listwallets) - List all wallets
* [updateWallet](#updatewallet) - Update a wallet
* [voidHold](#voidhold) - Cancel a hold
* [walletsgetServerInfo](#walletsgetserverinfo) - Get server info

## confirmHold

Confirm a hold

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ConfirmHoldResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.confirmHold("eum", {
  amount: 100,
  final: true,
}).then((res: ConfirmHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `holdId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `confirmHoldRequest`                                                   | [shared.ConfirmHoldRequest](../../models/shared/confirmholdrequest.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ConfirmHoldResponse](../../models/operations/confirmholdresponse.md)>**


## createBalance

Create a balance

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateBalanceResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.createBalance("non", {
  expiresAt: new Date("2021-04-10T02:35:06.342Z"),
  name: "Sherri Tremblay",
  priority: 223081,
}).then((res: CreateBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `createBalanceRequest`                                                     | [shared.CreateBalanceRequest](../../models/shared/createbalancerequest.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateBalanceResponse](../../models/operations/createbalanceresponse.md)>**


## createWallet

Create a new wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateWalletResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.createWallet({
  metadata: {
    "a": "dolorum",
    "in": "in",
    "illum": "maiores",
    "rerum": "dicta",
  },
  name: "Blanca Schulist",
}).then((res: CreateWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateWalletRequest](../../models/shared/createwalletrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateWalletResponse](../../models/operations/createwalletresponse.md)>**


## creditWallet

Credit a wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreditWalletResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.creditWallet("laborum", {
  amount: {
    amount: 881104,
    asset: "non",
  },
  balance: "occaecati",
  metadata: {
    "accusamus": "delectus",
    "quidem": "provident",
  },
  reference: "nam",
  sources: [
    {
      balance: "deleniti",
      identifier: "sapiente",
      type: "amet",
    },
    {
      balance: "nisi",
      identifier: "vel",
      type: "natus",
    },
    {
      balance: "molestiae",
      identifier: "perferendis",
      type: "nihil",
    },
  ],
}).then((res: CreditWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `creditWalletRequest`                                                    | [shared.CreditWalletRequest](../../models/shared/creditwalletrequest.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreditWalletResponse](../../models/operations/creditwalletresponse.md)>**


## debitWallet

Debit a wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { DebitWalletResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.debitWallet("magnam", {
  amount: {
    amount: 716075,
    asset: "id",
  },
  balances: [
    "labore",
    "suscipit",
  ],
  description: "natus",
  destination: {
    balance: "eum",
    identifier: "vero",
    type: "aspernatur",
  },
  metadata: {
    "magnam": "et",
  },
  pending: false,
}).then((res: DebitWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `debitWalletRequest`                                                   | [shared.DebitWalletRequest](../../models/shared/debitwalletrequest.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.DebitWalletResponse](../../models/operations/debitwalletresponse.md)>**


## getBalance

Get detailed balance

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetBalanceResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getBalance("excepturi", "ullam").then((res: GetBalanceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `balanceName`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBalanceResponse](../../models/operations/getbalanceresponse.md)>**


## getHold

Get a hold

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetHoldResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getHold("provident").then((res: GetHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `holdID`                                                     | *string*                                                     | :heavy_check_mark:                                           | The hold ID                                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetHoldResponse](../../models/operations/getholdresponse.md)>**


## getHolds

Get all holds for a wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetHoldsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getHolds("aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==", {
  "sint": "accusantium",
  "mollitia": "reiciendis",
  "mollitia": "ad",
}, 431418, "dolor").then((res: GetHoldsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | Parameter used in pagination requests.<br/>Set to the value of next for the next page of results.<br/>Set to the value of previous for the previous page of results.<br/>No other parameters can be set when the pagination token is set.<br/> | aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==                                                                                                                                                                                   |
| `metadata`                                                                                                                                                                                                                     | Record<string, *string*>                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | Filter holds by metadata key value pairs. Nested objects can be used as seen in the example below.                                                                                                                             |                                                                                                                                                                                                                                |
| `pageSize`                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | The maximum number of results to return per page                                                                                                                                                                               |                                                                                                                                                                                                                                |
| `walletID`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | The wallet to filter on                                                                                                                                                                                                        |                                                                                                                                                                                                                                |
| `config`                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                  |                                                                                                                                                                                                                                |


### Response

**Promise<[operations.GetHoldsResponse](../../models/operations/getholdsresponse.md)>**


## getTransactions

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetTransactionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getTransactions("aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==", 896547, "odit").then((res: GetTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          | Example                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                                                                                             | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | Parameter used in pagination requests.<br/>Set to the value of next for the next page of results.<br/>Set to the value of previous for the previous page of results.<br/>No other parameters can be set when the cursor is set.<br/> | aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==                                                                                                                                                                         |
| `pageSize`                                                                                                                                                                                                           | *number*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | The maximum number of results to return per page                                                                                                                                                                     |                                                                                                                                                                                                                      |
| `walletID`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                   | A wallet ID to filter on                                                                                                                                                                                             |                                                                                                                                                                                                                      |
| `config`                                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                                        |                                                                                                                                                                                                                      |


### Response

**Promise<[operations.GetTransactionsResponse](../../models/operations/gettransactionsresponse.md)>**


## getWallet

Get a wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetWalletResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getWallet("nemo").then((res: GetWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetWalletResponse](../../models/operations/getwalletresponse.md)>**


## getWalletSummary

Get wallet summary

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetWalletSummaryResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.getWalletSummary("quasi").then((res: GetWalletSummaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetWalletSummaryResponse](../../models/operations/getwalletsummaryresponse.md)>**


## listBalances

List balances of a wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListBalancesResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.listBalances("iure").then((res: ListBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBalancesResponse](../../models/operations/listbalancesresponse.md)>**


## listWallets

List all wallets

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListWalletsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.listWallets("aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==", {
  "debitis": "eius",
  "maxime": "deleniti",
  "facilis": "in",
  "architecto": "architecto",
}, "repudiandae", 352312).then((res: ListWalletsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cursor`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | Parameter used in pagination requests.<br/>Set to the value of next for the next page of results.<br/>Set to the value of previous for the previous page of results.<br/>No other parameters can be set when the pagination token is set.<br/> | aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==                                                                                                                                                                                   |
| `metadata`                                                                                                                                                                                                                     | Record<string, *string*>                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | Filter wallets by metadata key value pairs. Nested objects can be used as seen in the example below.                                                                                                                           |                                                                                                                                                                                                                                |
| `name`                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | Filter on wallet name                                                                                                                                                                                                          |                                                                                                                                                                                                                                |
| `pageSize`                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                             | The maximum number of results to return per page                                                                                                                                                                               |                                                                                                                                                                                                                                |
| `config`                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                  |                                                                                                                                                                                                                                |


### Response

**Promise<[operations.ListWalletsResponse](../../models/operations/listwalletsresponse.md)>**


## updateWallet

Update a wallet

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UpdateWalletResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.updateWallet("expedita", {
  metadata: {
    "repellat": "quibusdam",
    "sed": "saepe",
  },
}).then((res: UpdateWalletResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.UpdateWalletRequestBody](../../models/operations/updatewalletrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateWalletResponse](../../models/operations/updatewalletresponse.md)>**


## voidHold

Cancel a hold

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { VoidHoldResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.voidHold("pariatur").then((res: VoidHoldResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `holdId`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.VoidHoldResponse](../../models/operations/voidholdresponse.md)>**


## walletsgetServerInfo

Get server info

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { WalletsgetServerInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { WalletsErrorResponseErrorCode } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.wallets.walletsgetServerInfo().then((res: WalletsgetServerInfoResponse) => {
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

**Promise<[operations.WalletsgetServerInfoResponse](../../models/operations/walletsgetserverinforesponse.md)>**


# Wallets
(*wallets*)

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
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.confirmHold({
    confirmHoldRequest: {
      amount: 100,
      final: true,
    },
    holdId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ConfirmHoldRequest](../../models/operations/confirmholdrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ConfirmHoldResponse](../../models/operations/confirmholdresponse.md)>**


## createBalance

Create a balance

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.createBalance({
    createBalanceRequest: {
      name: "string",
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateBalanceRequest](../../models/operations/createbalancerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateBalanceResponse](../../models/operations/createbalanceresponse.md)>**


## createWallet

Create a new wallet

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.createWallet({
    metadata: {
      "key": "string",
    },
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.creditWallet({
    creditWalletRequest: {
      amount: {
        amount: 201874,
        asset: "string",
      },
      metadata: {
        "key": "string",
      },
      sources: [
        "string",
      ],
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreditWalletRequest](../../models/operations/creditwalletrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreditWalletResponse](../../models/operations/creditwalletresponse.md)>**


## debitWallet

Debit a wallet

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.debitWallet({
    debitWalletRequest: {
      amount: {
        amount: 245256,
        asset: "string",
      },
      balances: [
        "string",
      ],
      destination: "string",
      metadata: {
        "key": "string",
      },
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DebitWalletRequest](../../models/operations/debitwalletrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DebitWalletResponse](../../models/operations/debitwalletresponse.md)>**


## getBalance

Get detailed balance

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.getBalance({
    balanceName: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetBalanceRequest](../../models/operations/getbalancerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetBalanceResponse](../../models/operations/getbalanceresponse.md)>**


## getHold

Get a hold

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.getHold({
    holdID: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetHoldRequest](../../models/operations/getholdrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetHoldResponse](../../models/operations/getholdresponse.md)>**


## getHolds

Get all holds for a wallet

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.getHolds({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    metadata: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetHoldsRequest](../../models/operations/getholdsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetHoldsResponse](../../models/operations/getholdsresponse.md)>**


## getTransactions

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.getTransactions({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetTransactionsRequest](../../models/operations/gettransactionsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetTransactionsResponse](../../models/operations/gettransactionsresponse.md)>**


## getWallet

Get a wallet

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.getWallet({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetWalletRequest](../../models/operations/getwalletrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetWalletResponse](../../models/operations/getwalletresponse.md)>**


## getWalletSummary

Get wallet summary

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.getWalletSummary({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetWalletSummaryRequest](../../models/operations/getwalletsummaryrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetWalletSummaryResponse](../../models/operations/getwalletsummaryresponse.md)>**


## listBalances

List balances of a wallet

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.listBalances({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListBalancesRequest](../../models/operations/listbalancesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListBalancesResponse](../../models/operations/listbalancesresponse.md)>**


## listWallets

List all wallets

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.listWallets({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    metadata: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListWalletsRequest](../../models/operations/listwalletsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListWalletsResponse](../../models/operations/listwalletsresponse.md)>**


## updateWallet

Update a wallet

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.updateWallet({
    requestBody: {
      metadata: {
        "key": "string",
      },
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateWalletRequest](../../models/operations/updatewalletrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateWalletResponse](../../models/operations/updatewalletresponse.md)>**


## voidHold

Cancel a hold

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.voidHold({
    holdId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.VoidHoldRequest](../../models/operations/voidholdrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.VoidHoldResponse](../../models/operations/voidholdresponse.md)>**


## walletsgetServerInfo

Get server info

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.wallets.walletsgetServerInfo();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.WalletsgetServerInfoResponse](../../models/operations/walletsgetserverinforesponse.md)>**


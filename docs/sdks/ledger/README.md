# Ledger
(*ledger*)

### Available Operations

* [createTransactions](#createtransactions) - Create a new batch of transactions to a ledger
* [addMetadataOnTransaction](#addmetadataontransaction) - Set the metadata of a transaction by its ID
* [addMetadataToAccount](#addmetadatatoaccount) - Add metadata to an account
* [countAccounts](#countaccounts) - Count the accounts from a ledger
* [countTransactions](#counttransactions) - Count the transactions from a ledger
* [createTransaction](#createtransaction) - Create a new transaction to a ledger
* [getAccount](#getaccount) - Get account by its address
* [getBalances](#getbalances) - Get the balances from a ledger's account
* [getBalancesAggregated](#getbalancesaggregated) - Get the aggregated balances from selected accounts
* [getInfo](#getinfo) - Show server information
* [getLedgerInfo](#getledgerinfo) - Get information about a ledger
* [getMapping](#getmapping) - Get the mapping of a ledger
* [getTransaction](#gettransaction) - Get transaction from a ledger by its ID
* [listAccounts](#listaccounts) - List accounts from a ledger
* [listLogs](#listlogs) - List the logs from a ledger
* [listTransactions](#listtransactions) - List transactions from a ledger
* [readStats](#readstats) - Get statistics from a ledger
* [revertTransaction](#reverttransaction) - Revert a ledger transaction by its ID
* [~~runScript~~](#runscript) - Execute a Numscript :warning: **Deprecated**
* [updateMapping](#updatemapping) - Update the mapping of a ledger
* [v2AddMetadataOnTransaction](#v2addmetadataontransaction) - Set the metadata of a transaction by its ID
* [v2AddMetadataToAccount](#v2addmetadatatoaccount) - Add metadata to an account
* [v2CountAccounts](#v2countaccounts) - Count the accounts from a ledger
* [v2CountTransactions](#v2counttransactions) - Count the transactions from a ledger
* [v2CreateBulk](#v2createbulk) - Bulk request
* [v2CreateLedger](#v2createledger) - Create a ledger
* [v2CreateTransaction](#v2createtransaction) - Create a new transaction to a ledger
* [v2DeleteAccountMetadata](#v2deleteaccountmetadata) - Delete metadata by key
* [v2DeleteTransactionMetadata](#v2deletetransactionmetadata) - Delete metadata by key
* [v2GetAccount](#v2getaccount) - Get account by its address
* [v2GetInfo](#v2getinfo) - Show server information
* [v2GetLedger](#v2getledger) - Get a ledger
* [v2GetLedgerInfo](#v2getledgerinfo) - Get information about a ledger
* [v2GetTransaction](#v2gettransaction) - Get transaction from a ledger by its ID
* [v2ListLedgers](#v2listledgers) - List ledgers
* [v2ReadStats](#v2readstats) - Get statistics from a ledger
* [v2RevertTransaction](#v2reverttransaction) - Revert a ledger transaction by its ID

## createTransactions

Create a new batch of transactions to a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.createTransactions({
    transactions: {
      transactions: [
        {
          metadata: {
            "key": "string",
          },
          postings: [
            {
              amount: 100,
              asset: "COIN",
              destination: "users:002",
              source: "users:001",
            },
          ],
          reference: "ref:001",
        },
      ],
    },
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateTransactionsRequest](../../models/operations/createtransactionsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateTransactionsResponse](../../models/operations/createtransactionsresponse.md)>**


## addMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.addMetadataOnTransaction({
    requestBody: {
      "key": "string",
    },
    ledger: "ledger001",
    txid: 1234,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.AddMetadataOnTransactionRequest](../../models/operations/addmetadataontransactionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.AddMetadataOnTransactionResponse](../../models/operations/addmetadataontransactionresponse.md)>**


## addMetadataToAccount

Add metadata to an account

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.addMetadataToAccount({
    requestBody: {
      "key": "string",
    },
    address: "users:001",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AddMetadataToAccountRequest](../../models/operations/addmetadatatoaccountrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AddMetadataToAccountResponse](../../models/operations/addmetadatatoaccountresponse.md)>**


## countAccounts

Count the accounts from a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.countAccounts({
    address: "users:.+",
    ledger: "ledger001",
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CountAccountsRequest](../../models/operations/countaccountsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CountAccountsResponse](../../models/operations/countaccountsresponse.md)>**


## countTransactions

Count the transactions from a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.countTransactions({
    account: "users:001",
    destination: "users:001",
    ledger: "ledger001",
    metadata: {},
    reference: "ref:001",
    source: "users:001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CountTransactionsRequest](../../models/operations/counttransactionsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CountTransactionsResponse](../../models/operations/counttransactionsresponse.md)>**


## createTransaction

Create a new transaction to a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.createTransaction({
    postTransaction: {
      metadata: {
        "key": "string",
      },
      postings: [
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      script: {
        plain: "vars {
      account $user
      }
      send [COIN 10] (
      	source = @world
      	destination = $user
      )
      ",
        vars: {
          "user": "string",
        },
      },
    },
    ledger: "ledger001",
    preview: true,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateTransactionRequest](../../models/operations/createtransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateTransactionResponse](../../models/operations/createtransactionresponse.md)>**


## getAccount

Get account by its address

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getAccount({
    address: "users:001",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAccountRequest](../../models/operations/getaccountrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## getBalances

Get the balances from a ledger's account

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getBalances({
    address: "users:001",
    after: "users:003",
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetBalancesRequest](../../models/operations/getbalancesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetBalancesResponse](../../models/operations/getbalancesresponse.md)>**


## getBalancesAggregated

Get the aggregated balances from selected accounts

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getBalancesAggregated({
    address: "users:001",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetBalancesAggregatedRequest](../../models/operations/getbalancesaggregatedrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetBalancesAggregatedResponse](../../models/operations/getbalancesaggregatedresponse.md)>**


## getInfo

Show server information

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getInfo();


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

**Promise<[operations.GetInfoResponse](../../models/operations/getinforesponse.md)>**


## getLedgerInfo

Get information about a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getLedgerInfo({
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetLedgerInfoRequest](../../models/operations/getledgerinforequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetLedgerInfoResponse](../../models/operations/getledgerinforesponse.md)>**


## getMapping

Get the mapping of a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getMapping({
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetMappingRequest](../../models/operations/getmappingrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetMappingResponse](../../models/operations/getmappingresponse.md)>**


## getTransaction

Get transaction from a ledger by its ID

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.getTransaction({
    ledger: "ledger001",
    txid: 1234,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTransactionRequest](../../models/operations/gettransactionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTransactionResponse](../../models/operations/gettransactionresponse.md)>**


## listAccounts

List accounts from a ledger, sorted by address in descending order.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.listAccounts({
    address: "users:.+",
    after: "users:003",
    balance: 2400,
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    ledger: "ledger001",
    metadata: {
      "key": "string",
    },
    paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListAccountsRequest](../../models/operations/listaccountsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListAccountsResponse](../../models/operations/listaccountsresponse.md)>**


## listLogs

List the logs from a ledger, sorted by ID in descending order.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.listLogs({
    after: "1234",
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ListLogsRequest](../../models/operations/listlogsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ListLogsResponse](../../models/operations/listlogsresponse.md)>**


## listTransactions

List transactions from a ledger, sorted by txid in descending order.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.listTransactions({
    account: "users:001",
    after: "1234",
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
    destination: "users:001",
    ledger: "ledger001",
    metadata: {
      "key": "string",
    },
    reference: "ref:001",
    source: "users:001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTransactionsRequest](../../models/operations/listtransactionsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTransactionsResponse](../../models/operations/listtransactionsresponse.md)>**


## readStats

Get statistics from a ledger. (aggregate metrics on accounts and transactions)


### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.readStats({
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ReadStatsRequest](../../models/operations/readstatsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ReadStatsResponse](../../models/operations/readstatsresponse.md)>**


## revertTransaction

Revert a ledger transaction by its ID

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.revertTransaction({
    ledger: "ledger001",
    txid: 1234,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RevertTransactionRequest](../../models/operations/reverttransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RevertTransactionResponse](../../models/operations/reverttransactionresponse.md)>**


## ~~runScript~~

This route is deprecated, and has been merged into `POST /{ledger}/transactions`.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.runScript({
    script: {
      metadata: {
        "key": "string",
      },
      plain: "vars {
    account $user
    }
    send [COIN 10] (
    	source = @world
    	destination = $user
    )
    ",
      reference: "order_1234",
      vars: {
        "user": "string",
      },
    },
    ledger: "ledger001",
    preview: true,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.RunScriptRequest](../../models/operations/runscriptrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.RunScriptResponse](../../models/operations/runscriptresponse.md)>**


## updateMapping

Update the mapping of a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.updateMapping({
    mapping: {
      contracts: [
        {
          account: "users:001",
          expr: {},
        },
      ],
    },
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateMappingRequest](../../models/operations/updatemappingrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateMappingResponse](../../models/operations/updatemappingresponse.md)>**


## v2AddMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2AddMetadataOnTransaction({
    requestBody: {
      "admin": "true",
    },
    dryRun: true,
    id: 1234,
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.V2AddMetadataOnTransactionRequest](../../models/operations/v2addmetadataontransactionrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.V2AddMetadataOnTransactionResponse](../../models/operations/v2addmetadataontransactionresponse.md)>**


## v2AddMetadataToAccount

Add metadata to an account

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2AddMetadataToAccount({
    requestBody: {
      "admin": "true",
    },
    address: "users:001",
    dryRun: true,
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.V2AddMetadataToAccountRequest](../../models/operations/v2addmetadatatoaccountrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.V2AddMetadataToAccountResponse](../../models/operations/v2addmetadatatoaccountresponse.md)>**


## v2CountAccounts

Count the accounts from a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2CountAccounts({
    requestBody: {
      "key": "string",
    },
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2CountAccountsRequest](../../models/operations/v2countaccountsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2CountAccountsResponse](../../models/operations/v2countaccountsresponse.md)>**


## v2CountTransactions

Count the transactions from a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2CountTransactions({
    requestBody: {
      "key": "string",
    },
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.V2CountTransactionsRequest](../../models/operations/v2counttransactionsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.V2CountTransactionsResponse](../../models/operations/v2counttransactionsresponse.md)>**


## v2CreateBulk

Bulk request

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2CreateBulk({
    requestBody: [
      "string",
    ],
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.V2CreateBulkRequest](../../models/operations/v2createbulkrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.V2CreateBulkResponse](../../models/operations/v2createbulkresponse.md)>**


## v2CreateLedger

Create a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2CreateLedger({
    v2CreateLedgerRequest: {},
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.V2CreateLedgerRequest](../../models/operations/v2createledgerrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.V2CreateLedgerResponse](../../models/operations/v2createledgerresponse.md)>**


## v2CreateTransaction

Create a new transaction to a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2CreateTransaction({
    v2PostTransaction: {
      metadata: {
        "admin": "true",
      },
      postings: [
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      script: {
        plain: "vars {
      account $user
      }
      send [COIN 10] (
      	source = @world
      	destination = $user
      )
      ",
        vars: {
          "user": "string",
        },
      },
    },
    dryRun: true,
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.V2CreateTransactionRequest](../../models/operations/v2createtransactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.V2CreateTransactionResponse](../../models/operations/v2createtransactionresponse.md)>**


## v2DeleteAccountMetadata

Delete metadata by key

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2DeleteAccountMetadata({
    address: "3680 Emile Grove",
    key: "foo",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.V2DeleteAccountMetadataRequest](../../models/operations/v2deleteaccountmetadatarequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.V2DeleteAccountMetadataResponse](../../models/operations/v2deleteaccountmetadataresponse.md)>**


## v2DeleteTransactionMetadata

Delete metadata by key

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2DeleteTransactionMetadata({
    id: 1234,
    key: "foo",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.V2DeleteTransactionMetadataRequest](../../models/operations/v2deletetransactionmetadatarequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.V2DeleteTransactionMetadataResponse](../../models/operations/v2deletetransactionmetadataresponse.md)>**


## v2GetAccount

Get account by its address

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2GetAccount({
    address: "users:001",
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.V2GetAccountRequest](../../models/operations/v2getaccountrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.V2GetAccountResponse](../../models/operations/v2getaccountresponse.md)>**


## v2GetInfo

Show server information

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2GetInfo();


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

**Promise<[operations.V2GetInfoResponse](../../models/operations/v2getinforesponse.md)>**


## v2GetLedger

Get a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2GetLedger({
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.V2GetLedgerRequest](../../models/operations/v2getledgerrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.V2GetLedgerResponse](../../models/operations/v2getledgerresponse.md)>**


## v2GetLedgerInfo

Get information about a ledger

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2GetLedgerInfo({
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2GetLedgerInfoRequest](../../models/operations/v2getledgerinforequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2GetLedgerInfoResponse](../../models/operations/v2getledgerinforesponse.md)>**


## v2GetTransaction

Get transaction from a ledger by its ID

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2GetTransaction({
    id: 1234,
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.V2GetTransactionRequest](../../models/operations/v2gettransactionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.V2GetTransactionResponse](../../models/operations/v2gettransactionresponse.md)>**


## v2ListLedgers

List ledgers

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2ListLedgers({
    cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.V2ListLedgersRequest](../../models/operations/v2listledgersrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.V2ListLedgersResponse](../../models/operations/v2listledgersresponse.md)>**


## v2ReadStats

Get statistics from a ledger. (aggregate metrics on accounts and transactions)


### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2ReadStats({
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.V2ReadStatsRequest](../../models/operations/v2readstatsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.V2ReadStatsResponse](../../models/operations/v2readstatsresponse.md)>**


## v2RevertTransaction

Revert a ledger transaction by its ID

### Example Usage

```typescript
import { SDK } from "@formance/formance-sdk";

(async() => {
  const sdk = new SDK({
    security: {
      authorization: "",
    },
  });

  const res = await sdk.ledger.v2RevertTransaction({
    id: 1234,
    ledger: "ledger001",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.V2RevertTransactionRequest](../../models/operations/v2reverttransactionrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.V2RevertTransactionResponse](../../models/operations/v2reverttransactionresponse.md)>**


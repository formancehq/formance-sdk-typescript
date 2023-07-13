# ledger

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

## createTransactions

Create a new batch of transactions to a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateTransactionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.createTransactions({
  transactions: [
    {
      metadata: {
        "commodi": "quam",
        "molestiae": "velit",
      },
      postings: [
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      timestamp: new Date("2022-08-30T15:03:11.112Z"),
    },
    {
      metadata: {
        "laborum": "animi",
      },
      postings: [
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      timestamp: new Date("2022-03-22T21:41:36.666Z"),
    },
    {
      metadata: {
        "tenetur": "ipsam",
      },
      postings: [
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
        {
          amount: 100,
          asset: "COIN",
          destination: "users:002",
          source: "users:001",
        },
      ],
      reference: "ref:001",
      timestamp: new Date("2022-12-17T03:20:13.120Z"),
    },
  ],
}, "ledger001").then((res: CreateTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `transactions`                                               | [shared.Transactions](../../models/shared/transactions.md)   | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CreateTransactionsResponse](../../models/operations/createtransactionsresponse.md)>**


## addMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { AddMetadataOnTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.addMetadataOnTransaction("ledger001", 1234, {
  "error": "temporibus",
}).then((res: AddMetadataOnTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `txid`                                                       | *number*                                                     | :heavy_check_mark:                                           | Transaction ID.                                              | 1234                                                         |
| `requestBody`                                                | Record<string, *any*>                                        | :heavy_minus_sign:                                           | metadata                                                     |                                                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.AddMetadataOnTransactionResponse](../../models/operations/addmetadataontransactionresponse.md)>**


## addMetadataToAccount

Add metadata to an account

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { AddMetadataToAccountResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.addMetadataToAccount({
  "quasi": "reiciendis",
  "voluptatibus": "vero",
  "nihil": "praesentium",
}, "users:001", "ledger001").then((res: AddMetadataToAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `requestBody`                                                                                                | Record<string, *any*>                                                                                        | :heavy_check_mark:                                                                                           | metadata                                                                                                     |                                                                                                              |
| `address`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Exact address of the account. It must match the following regular expressions pattern:<br/>```<br/>^\w+(:\w+)*$<br/>```<br/> | users:001                                                                                                    |
| `ledger`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the ledger.                                                                                          | ledger001                                                                                                    |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |                                                                                                              |


### Response

**Promise<[operations.AddMetadataToAccountResponse](../../models/operations/addmetadatatoaccountresponse.md)>**


## countAccounts

Count the accounts from a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CountAccountsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.countAccounts("ledger001", "users:.+", {}).then((res: CountAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `ledger`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Name of the ledger.                                                                                                              | ledger001                                                                                                                        |
| `address`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Filter accounts by address pattern (regular expression placed between ^ and $).                                                  | users:.+                                                                                                                         |
| `metadata`                                                                                                                       | [operations.CountAccountsMetadata](../../models/operations/countaccountsmetadata.md)                                             | :heavy_minus_sign:                                                                                                               | Filter accounts by metadata key value pairs. The filter can be used like this metadata[key]=value1&metadata[a.nested.key]=value2 |                                                                                                                                  |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |                                                                                                                                  |


### Response

**Promise<[operations.CountAccountsResponse](../../models/operations/countaccountsresponse.md)>**


## countTransactions

Count the transactions from a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CountTransactionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.countTransactions({
  account: "users:001",
  destination: "users:001",
  endTime: new Date("2022-10-31T23:49:03.388Z"),
  ledger: "ledger001",
  metadata: {},
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2022-02-05T15:41:25.512Z"),
}).then((res: CountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Formance } from "@formance/formance-sdk";
import { CreateTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.createTransaction({
  metadata: {
    "perferendis": "doloremque",
    "reprehenderit": "ut",
    "maiores": "dicta",
  },
  postings: [
    {
      amount: 100,
      asset: "COIN",
      destination: "users:002",
      source: "users:001",
    },
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
    vars: {},
  },
  timestamp: new Date("2022-07-09T11:22:20.922Z"),
}, "ledger001", true).then((res: CreateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `postTransaction`                                                                                                                                                                      | [shared.PostTransaction](../../models/shared/posttransaction.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                     | The request body must contain at least one of the following objects:<br/>  - `postings`: suitable for simple transactions<br/>  - `script`: enabling more complex transactions with Numscript<br/> |                                                                                                                                                                                        |
| `ledger`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Name of the ledger.                                                                                                                                                                    | ledger001                                                                                                                                                                              |
| `preview`                                                                                                                                                                              | *boolean*                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                     | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker.                                                                    | true                                                                                                                                                                                   |
| `config`                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | Available config options for making requests.                                                                                                                                          |                                                                                                                                                                                        |


### Response

**Promise<[operations.CreateTransactionResponse](../../models/operations/createtransactionresponse.md)>**


## getAccount

Get account by its address

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetAccountResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getAccount("users:001", "ledger001").then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `address`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Exact address of the account. It must match the following regular expressions pattern:<br/>```<br/>^\w+(:\w+)*$<br/>```<br/> | users:001                                                                                                    |
| `ledger`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the ledger.                                                                                          | ledger001                                                                                                    |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |                                                                                                              |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## getBalances

Get the balances from a ledger's account

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetBalancesResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getBalances({
  address: "users:001",
  after: "users:003",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  ledger: "ledger001",
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
}).then((res: GetBalancesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Formance } from "@formance/formance-sdk";
import { GetBalancesAggregatedResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getBalancesAggregated("ledger001", "users:001").then((res: GetBalancesAggregatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `ledger`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | Name of the ledger.                                                       | ledger001                                                                 |
| `address`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Filter balances involving given account, either as source or destination. | users:001                                                                 |
| `config`                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)              | :heavy_minus_sign:                                                        | Available config options for making requests.                             |                                                                           |


### Response

**Promise<[operations.GetBalancesAggregatedResponse](../../models/operations/getbalancesaggregatedresponse.md)>**


## getInfo

Show server information

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getInfo().then((res: GetInfoResponse) => {
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

**Promise<[operations.GetInfoResponse](../../models/operations/getinforesponse.md)>**


## getLedgerInfo

Get information about a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetLedgerInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum, MigrationInfoState } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getLedgerInfo("ledger001").then((res: GetLedgerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetLedgerInfoResponse](../../models/operations/getledgerinforesponse.md)>**


## getMapping

Get the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetMappingResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getMapping("ledger001").then((res: GetMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetMappingResponse](../../models/operations/getmappingresponse.md)>**


## getTransaction

Get transaction from a ledger by its ID

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.getTransaction("ledger001", 1234).then((res: GetTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `txid`                                                       | *number*                                                     | :heavy_check_mark:                                           | Transaction ID.                                              | 1234                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetTransactionResponse](../../models/operations/gettransactionresponse.md)>**


## listAccounts

List accounts from a ledger, sorted by address in descending order.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListAccountsBalanceOperator, ListAccountsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.listAccounts({
  address: "users:.+",
  after: "users:003",
  balance: 2400,
  balanceOperator: ListAccountsBalanceOperator.Gte,
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  ledger: "ledger001",
  metadata: {},
  pageSize: 118727,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Formance } from "@formance/formance-sdk";
import { ListLogsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum, LogType } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.listLogs({
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  endTime: new Date("2022-05-13T20:56:04.612Z"),
  ledger: "ledger001",
  pageSize: 880476,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  startTime: new Date("2022-01-30T20:15:26.045Z"),
}).then((res: ListLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Formance } from "@formance/formance-sdk";
import { ListTransactionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.listTransactions({
  account: "users:001",
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  destination: "users:001",
  endTime: new Date("2022-10-13T20:38:16.426Z"),
  ledger: "ledger001",
  metadata: {},
  pageSize: 692472,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2021-11-13T09:08:33.009Z"),
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Formance } from "@formance/formance-sdk";
import { ReadStatsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.readStats("ledger001").then((res: ReadStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | name of the ledger                                           | ledger001                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.ReadStatsResponse](../../models/operations/readstatsresponse.md)>**


## revertTransaction

Revert a ledger transaction by its ID

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { RevertTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.revertTransaction("ledger001", 1234).then((res: RevertTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `txid`                                                       | *number*                                                     | :heavy_check_mark:                                           | Transaction ID.                                              | 1234                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.RevertTransactionResponse](../../models/operations/reverttransactionresponse.md)>**


## ~~runScript~~

This route is deprecated, and has been merged into `POST /{ledger}/transactions`.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { RunScriptResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.runScript({
  metadata: {
    "modi": "praesentium",
    "rem": "voluptates",
    "quasi": "repudiandae",
    "sint": "veritatis",
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
  vars: {},
}, "ledger001", true).then((res: RunScriptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                           | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `script`                                                                                                            | [shared.Script](../../models/shared/script.md)                                                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `ledger`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Name of the ledger.                                                                                                 | ledger001                                                                                                           |
| `preview`                                                                                                           | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | Set the preview mode. Preview mode doesn't add the logs to the database or publish a message to the message broker. | true                                                                                                                |
| `config`                                                                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                        | :heavy_minus_sign:                                                                                                  | Available config options for making requests.                                                                       |                                                                                                                     |


### Response

**Promise<[operations.RunScriptResponse](../../models/operations/runscriptresponse.md)>**


## updateMapping

Update the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UpdateMappingResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "",
  },
});

sdk.ledger.updateMapping({
  contracts: [
    {
      account: "users:001",
      expr: {},
    },
    {
      account: "users:001",
      expr: {},
    },
    {
      account: "users:001",
      expr: {},
    },
    {
      account: "users:001",
      expr: {},
    },
  ],
}, "ledger001").then((res: UpdateMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mapping`                                                    | [shared.Mapping](../../models/shared/mapping.md)             | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `ledger`                                                     | *string*                                                     | :heavy_check_mark:                                           | Name of the ledger.                                          | ledger001                                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.UpdateMappingResponse](../../models/operations/updatemappingresponse.md)>**


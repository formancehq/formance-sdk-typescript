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
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.createTransactions({
  transactions: [
    {
      metadata: {
        "velit": "error",
        "quia": "quis",
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
      timestamp: new Date("2021-09-08T21:06:19.630Z"),
    },
    {
      metadata: {
        "odit": "quo",
        "sequi": "tenetur",
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
      timestamp: new Date("2021-05-11T16:11:54.761Z"),
    },
  ],
}, "ledger001").then((res: CreateTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## addMetadataOnTransaction

Set the metadata of a transaction by its ID

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { AddMetadataOnTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.addMetadataOnTransaction("ledger001", 1234, {
  "quasi": "error",
}).then((res: AddMetadataOnTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## addMetadataToAccount

Add metadata to an account

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { AddMetadataToAccountResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.addMetadataToAccount({
  "laborum": "quasi",
  "reiciendis": "voluptatibus",
  "vero": "nihil",
  "praesentium": "voluptatibus",
}, "users:001", "ledger001").then((res: AddMetadataToAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## countAccounts

Count the accounts from a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CountAccountsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.countAccounts("ledger001", "users:.+", {
  "omnis": "voluptate",
}).then((res: CountAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## countTransactions

Count the transactions from a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CountTransactionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.countTransactions({
  account: "users:001",
  destination: "users:001",
  endTime: new Date("2022-12-17T09:48:56.551Z"),
  ledger: "ledger001",
  metadata: {
    "reprehenderit": "ut",
  },
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2022-08-22T09:14:02.538Z"),
}).then((res: CountTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTransaction

Create a new transaction to a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { CreateTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.createTransaction({
  metadata: {
    "dolore": "iusto",
    "dicta": "harum",
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
    vars: {
      "commodi": "repudiandae",
      "quae": "ipsum",
      "quidem": "molestias",
      "excepturi": "pariatur",
    },
  },
  timestamp: new Date("2022-06-29T05:25:54.356Z"),
}, "ledger001", true).then((res: CreateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAccount

Get account by its address

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetAccountResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.getAccount("users:001", "ledger001").then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getBalances

Get the balances from a ledger's account

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetBalancesResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
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

## getBalancesAggregated

Get the aggregated balances from selected accounts

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetBalancesAggregatedResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.getBalancesAggregated("ledger001", "users:001").then((res: GetBalancesAggregatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getInfo

Show server information

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.getInfo().then((res: GetInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getLedgerInfo

Get information about a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetLedgerInfoResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum, MigrationInfoState } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.getLedgerInfo("ledger001").then((res: GetLedgerInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getMapping

Get the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetMappingResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.getMapping("ledger001").then((res: GetMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTransaction

Get transaction from a ledger by its ID

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { GetTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.getTransaction("ledger001", 1234).then((res: GetTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAccounts

List accounts from a ledger, sorted by address in descending order.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListAccountsBalanceOperator, ListAccountsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.listAccounts({
  address: "users:.+",
  after: "users:003",
  balance: 2400,
  balanceOperator: ListAccountsBalanceOperator.Gte,
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  ledger: "ledger001",
  metadata: {
    "voluptates": "quasi",
    "repudiandae": "sint",
    "veritatis": "itaque",
  },
  pageSize: 277718,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
}).then((res: ListAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listLogs

List the logs from a ledger, sorted by ID in descending order.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListLogsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum, LogType } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.listLogs({
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  endTime: new Date("2022-12-28T14:02:06.064Z"),
  ledger: "ledger001",
  pageSize: 667411,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  startTime: new Date("2022-08-09T16:21:07.003Z"),
}).then((res: ListLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listTransactions

List transactions from a ledger, sorted by txid in descending order.

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ListTransactionsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.listTransactions({
  account: "users:001",
  after: "1234",
  cursor: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  destination: "users:001",
  endTime: new Date("2021-07-27T01:56:50.693Z"),
  ledger: "ledger001",
  metadata: {
    "labore": "modi",
    "qui": "aliquid",
    "cupiditate": "quos",
    "perferendis": "magni",
  },
  pageSize: 828940,
  paginationToken: "aHR0cHM6Ly9nLnBhZ2UvTmVrby1SYW1lbj9zaGFyZQ==",
  reference: "ref:001",
  source: "users:001",
  startTime: new Date("2022-12-30T06:52:02.282Z"),
}).then((res: ListTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## readStats

Get statistics from a ledger. (aggregate metrics on accounts and transactions)


### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { ReadStatsResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.readStats("ledger001").then((res: ReadStatsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## revertTransaction

Revert a ledger transaction by its ID

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { RevertTransactionResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.revertTransaction("ledger001", 1234, false).then((res: RevertTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.runScript({
  metadata: {
    "dolorum": "excepturi",
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
    "facilis": "tempore",
    "labore": "delectus",
  },
}, "ledger001", true).then((res: RunScriptResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateMapping

Update the mapping of a ledger

### Example Usage

```typescript
import { Formance } from "@formance/formance-sdk";
import { UpdateMappingResponse } from "@formance/formance-sdk/dist/sdk/models/operations";
import { ErrorsEnum } from "@formance/formance-sdk/dist/sdk/models/shared";

const sdk = new Formance({
  security: {
    authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

sdk.ledger.updateMapping({
  contracts: [
    {
      account: "users:001",
      expr: {
        "eligendi": "sint",
      },
    },
    {
      account: "users:001",
      expr: {
        "provident": "necessitatibus",
        "sint": "officia",
      },
    },
  ],
}, "ledger001").then((res: UpdateMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

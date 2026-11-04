# V2BulkElementResultRevertTransaction

## Example Usage

```typescript
import { V2BulkElementResultRevertTransaction } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkElementResultRevertTransaction = {
  data: {
    id: 712930n,
    metadata: {
      "admin": "true",
    },
    postCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    postings: [],
    preCommitEffectiveVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    preCommitVolumes: {
      "orders:1": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      "orders:2": {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2024-01-30T18:49:02.529Z"),
  },
  logID: 96956,
  responseType: "REVERT_TRANSACTION",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [ledger.V2Transaction](../../../sdk/models/ledger/v2transaction.md)                                   | :heavy_check_mark:                                                                                    | A transaction recorded in the ledger, carrying its postings, metadata and both bi-temporal timestamps |
| `logID`                                                                                               | *number*                                                                                              | :heavy_check_mark:                                                                                    | Identifier of the log entry produced by this element                                                  |
| `responseType`                                                                                        | *"REVERT_TRANSACTION"*                                                                                | :heavy_check_mark:                                                                                    | The action this result corresponds to                                                                 |
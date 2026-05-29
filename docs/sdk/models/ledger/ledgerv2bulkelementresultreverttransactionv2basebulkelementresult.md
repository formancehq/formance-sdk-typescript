# LedgerV2BulkElementResultRevertTransactionV2BaseBulkElementResult

## Example Usage

```typescript
import { LedgerV2BulkElementResultRevertTransactionV2BaseBulkElementResult } from "@formance/formance-sdk/sdk/models/ledger";

let value: LedgerV2BulkElementResultRevertTransactionV2BaseBulkElementResult = {
  v2Transaction: {
    v2AggregatedVolumes: {
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
    v2AggregatedVolumes1: {
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
    v2AggregatedVolumes2: {
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
    v2AggregatedVolumes3: {
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
    v2Metadata: {
      "admin": "true",
    },
    id: 712930n,
    postings: [],
    reference: "ref:001",
    reverted: false,
    timestamp: new Date("2024-01-30T18:49:02.529Z"),
  },
  logID: 960263,
  responseType: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `v2Transaction`                                                     | [ledger.V2Transaction](../../../sdk/models/ledger/v2transaction.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `logID`                                                             | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `responseType`                                                      | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
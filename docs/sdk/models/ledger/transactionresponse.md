# TransactionResponse

## Example Usage

```typescript
import { TransactionResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: TransactionResponse = {
  transaction: {
    aggregatedVolumes: {
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
    aggregatedVolumes1: {
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
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
    reference: "ref:001",
    timestamp: new Date("2024-12-30T14:12:54.438Z"),
    txid: 811899n,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `transaction`                                                   | [ledger.Transaction](../../../sdk/models/ledger/transaction.md) | :heavy_check_mark:                                              | N/A                                                             |
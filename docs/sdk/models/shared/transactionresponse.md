# TransactionResponse

## Example Usage

```typescript
import { TransactionResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TransactionResponse = {
  data: {
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
    postings: [
      {
        amount: 100n,
        asset: "COIN",
        destination: "users:002",
        source: "users:001",
      },
    ],
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
    timestamp: new Date("2023-12-31T14:12:54.438Z"),
    txid: 811899n,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.Transaction](../../../sdk/models/shared/transaction.md) | :heavy_check_mark:                                              | N/A                                                             |
# TransactionsCursorResponse

## Example Usage

```typescript
import { TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: TransactionsCursorResponse = {
  cursor: {
    data: [
      {
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
        timestamp: new Date("2024-08-26T16:16:15.405Z"),
        txid: 837007n,
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [shared.TransactionsCursorResponseCursor](../../../sdk/models/shared/transactionscursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
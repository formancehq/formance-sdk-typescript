# TransactionsCursorResponseCursor

## Example Usage

```typescript
import { TransactionsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TransactionsCursorResponseCursor = {
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
      timestamp: new Date("2023-08-27T16:16:15.405Z"),
      txid: 837007n,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.Transaction](../../../sdk/models/shared/transaction.md)[] | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `hasMore`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | false                                                             |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `pageSize`                                                        | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               | 15                                                                |
| `previous`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                      |
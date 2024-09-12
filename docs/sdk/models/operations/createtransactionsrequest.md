# CreateTransactionsRequest

## Example Usage

```typescript
import { CreateTransactionsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateTransactionsRequest = {
  transactions: {
    transactions: [
      {
        postings: [
          {
            amount: BigInt("100"),
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
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `transactions`                                                    | [shared.Transactions](../../../sdk/models/shared/transactions.md) | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `ledger`                                                          | *string*                                                          | :heavy_check_mark:                                                | Name of the ledger.                                               | ledger001                                                         |
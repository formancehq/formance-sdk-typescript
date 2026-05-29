# CreateTransactionsRequest

## Example Usage

```typescript
import { CreateTransactionsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateTransactionsRequest = {
  transactions: {
    transactions: [
      {
        postings: [],
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
| `transactions`                                                    | [ledger.Transactions](../../../sdk/models/ledger/transactions.md) | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `ledger`                                                          | *string*                                                          | :heavy_check_mark:                                                | Name of the ledger.                                               | ledger001                                                         |
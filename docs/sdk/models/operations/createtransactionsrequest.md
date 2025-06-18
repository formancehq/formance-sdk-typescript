# CreateTransactionsRequest

## Example Usage

```typescript
import { CreateTransactionsRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: CreateTransactionsRequest = {
  ledger: "ledger001",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `transactions`                                                    | [shared.Transactions](../../../sdk/models/shared/transactions.md) | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `ledger`                                                          | *string*                                                          | :heavy_check_mark:                                                | Name of the ledger.                                               | ledger001                                                         |
# ActivityRevertTransaction

Arguments for the activity that reverts a ledger transaction

## Example Usage

```typescript
import { ActivityRevertTransaction } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityRevertTransaction = {
  id: "<id>",
  ledger: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | Identifier of the transaction to revert    |
| `ledger`                                   | *string*                                   | :heavy_check_mark:                         | Name of the ledger holding the transaction |
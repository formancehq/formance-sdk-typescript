# UpdateAccount

Metadata to set on a ledger account

## Example Usage

```typescript
import { UpdateAccount } from "@formance/formance-sdk/sdk/models/orchestration";

let value: UpdateAccount = {
  id: "<id>",
  ledger: "<value>",
  metadata: {},
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | Address of the ledger account to update |
| `ledger`                                | *string*                                | :heavy_check_mark:                      | Name of the ledger holding the account  |
| `metadata`                              | Record<string, *string*>                | :heavy_check_mark:                      | Metadata to set on the account          |
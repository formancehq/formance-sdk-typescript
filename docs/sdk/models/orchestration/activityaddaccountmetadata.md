# ActivityAddAccountMetadata

Arguments for the activity that sets metadata on a ledger account

## Example Usage

```typescript
import { ActivityAddAccountMetadata } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityAddAccountMetadata = {
  id: "<id>",
  ledger: "<value>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | Address of the ledger account to update |
| `ledger`                                | *string*                                | :heavy_check_mark:                      | Name of the ledger holding the account  |
| `metadata`                              | Record<string, *string*>                | :heavy_check_mark:                      | Metadata to set on the account          |
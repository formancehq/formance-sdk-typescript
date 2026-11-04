# V2ActivityGetAccount

Arguments for the activity that reads a ledger account

## Example Usage

```typescript
import { V2ActivityGetAccount } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityGetAccount = {
  id: "<id>",
  ledger: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *string*                               | :heavy_check_mark:                     | Address of the ledger account to read  |
| `ledger`                               | *string*                               | :heavy_check_mark:                     | Name of the ledger holding the account |
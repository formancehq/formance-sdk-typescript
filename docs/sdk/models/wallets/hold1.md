# Hold1

## Example Usage

```typescript
import { Hold1 } from "@formance/formance-sdk/sdk/models/wallets";

let value: Hold1 = {
  asset: "<value>",
  description: "psst government furthermore meanwhile lest furthermore",
  id: "ddf65989-c09b-4c81-a18d-19dd2f2e0e0f",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
  },
  walletID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `subject`                                         | *wallets.Subject*                                 | :heavy_minus_sign:                                | N/A                                               |
| `asset`                                           | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique ID of the hold.                        |
| `metadata`                                        | Record<string, *string*>                          | :heavy_check_mark:                                | Metadata associated with the hold.                |
| `walletID`                                        | *string*                                          | :heavy_check_mark:                                | The ID of the wallet the hold is associated with. |
# Hold2

## Example Usage

```typescript
import { Hold2 } from "@formance/formance-sdk/sdk/models/wallets";

let value: Hold2 = {
  asset: "<value>",
  description:
    "against slink where stained shocked political aware charming machine from",
  id: "366df94b-4bf5-4e29-828e-b03f412469de",
  metadata: {},
  originalAmount: 100n,
  remaining: 10n,
  walletID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `subject`                                         | *wallets.Subject*                                 | :heavy_minus_sign:                                | N/A                                               |                                                   |
| `asset`                                           | *string*                                          | :heavy_check_mark:                                | N/A                                               |                                                   |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | N/A                                               |                                                   |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique ID of the hold.                        |                                                   |
| `metadata`                                        | Record<string, *string*>                          | :heavy_check_mark:                                | Metadata associated with the hold.                |                                                   |
| `originalAmount`                                  | *BigInt*                                          | :heavy_check_mark:                                | Original amount on hold                           | 100                                               |
| `remaining`                                       | *BigInt*                                          | :heavy_check_mark:                                | Remaining amount on hold                          | 10                                                |
| `walletID`                                        | *string*                                          | :heavy_check_mark:                                | The ID of the wallet the hold is associated with. |                                                   |
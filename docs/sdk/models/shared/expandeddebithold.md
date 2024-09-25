# ExpandedDebitHold

## Example Usage

```typescript
import { ExpandedDebitHold } from "@formance/formance-sdk/sdk/models/shared";

let value: ExpandedDebitHold = {
  description: "Optional empowering software",
  id: "717d709f-d9ed-479b-9d0c-7ac8261bfc69",
  metadata: {
    "key": "<value>",
  },
  originalAmount: BigInt("100"),
  remaining: BigInt("10"),
  walletID: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | N/A                                               |                                                   |
| `destination`                                     | *shared.Subject*                                  | :heavy_minus_sign:                                | N/A                                               |                                                   |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique ID of the hold.                        |                                                   |
| `metadata`                                        | Record<string, *string*>                          | :heavy_check_mark:                                | Metadata associated with the hold.                |                                                   |
| `originalAmount`                                  | *BigInt*                                          | :heavy_check_mark:                                | Original amount on hold                           | 100                                               |
| `remaining`                                       | *BigInt*                                          | :heavy_check_mark:                                | Remaining amount on hold                          | 10                                                |
| `walletID`                                        | *string*                                          | :heavy_check_mark:                                | The ID of the wallet the hold is associated with. |                                                   |
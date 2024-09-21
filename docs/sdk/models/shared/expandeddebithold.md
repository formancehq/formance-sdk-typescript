# ExpandedDebitHold

## Example Usage

```typescript
import { ExpandedDebitHold } from "@formance/formance-sdk/sdk/models/shared";

let value: ExpandedDebitHold = {
  description: "Fully-configurable coherent superstructure",
  id: "d75f3803-9a9d-4fc7-bd1a-82f59e81d5fe",
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
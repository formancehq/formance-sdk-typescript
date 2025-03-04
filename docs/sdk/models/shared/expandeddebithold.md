# ExpandedDebitHold

## Example Usage

```typescript
import { ExpandedDebitHold } from "@formance/formance-sdk/sdk/models/shared";

let value: ExpandedDebitHold = {
  description: "apud upward inside during",
  id: "c0548e0d-89f2-4437-99b0-6e7d14b97ace",
  metadata: {
    "key": "<value>",
  },
  originalAmount: BigInt("100"),
  remaining: BigInt("10"),
  walletID: "<id>",
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
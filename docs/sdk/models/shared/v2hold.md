# V2Hold

## Example Usage

```typescript
import { V2Hold } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Hold = {
  description:
    "jovially forceful synergy not home why absentmindedly vaguely roughly",
  id: "d2cb8919-6d59-46e4-a1b6-90fe906fa27f",
  metadata: {
    "key": "<value>",
  },
  walletID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `destination`                                     | *shared.V2Subject*                                | :heavy_minus_sign:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique ID of the hold.                        |
| `metadata`                                        | Record<string, *string*>                          | :heavy_check_mark:                                | Metadata associated with the hold.                |
| `walletID`                                        | *string*                                          | :heavy_check_mark:                                | The ID of the wallet the hold is associated with. |
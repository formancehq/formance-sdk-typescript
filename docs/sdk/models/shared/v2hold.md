# V2Hold

## Example Usage

```typescript
import { V2Hold } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Hold = {
  description: "stiff unto excepting insidious please once louse",
  id: "648e4835-3f9b-415e-912a-9de24601374e",
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
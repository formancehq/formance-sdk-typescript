# Hold

## Example Usage

```typescript
import { Hold } from "@formance/formance-sdk/sdk/models/shared";

let value: Hold = {
  description: "vacation separately utter",
  id: "9eb18445-59a4-4209-920e-81df7016e2d0",
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
| `destination`                                     | *shared.Subject*                                  | :heavy_minus_sign:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique ID of the hold.                        |
| `metadata`                                        | Record<string, *string*>                          | :heavy_check_mark:                                | Metadata associated with the hold.                |
| `walletID`                                        | *string*                                          | :heavy_check_mark:                                | The ID of the wallet the hold is associated with. |
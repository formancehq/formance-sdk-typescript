# V2Hold

## Example Usage

```typescript
import { V2Hold } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Hold = {
  description:
    "phew founder yahoo coaxingly gah finally painfully politely boohoo delirious",
  id: "c070cf0e-c5e4-461a-907a-d2cb89196d59",
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
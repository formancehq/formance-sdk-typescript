# V2Hold

## Example Usage

```typescript
import { V2Hold } from "@formance/formance-sdk/sdk/models/shared";

let value: V2Hold = {
  description: "Enterprise-wide upward-trending migration",
  id: "4b5197f9-2443-4da7-8e52-b895c537c645",
  metadata: {
    "key": "<value>",
  },
  walletID: "<value>",
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
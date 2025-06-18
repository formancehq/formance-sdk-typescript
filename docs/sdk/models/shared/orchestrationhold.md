# OrchestrationHold

## Example Usage

```typescript
import { OrchestrationHold } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationHold = {
  description: "quizzically aha wherever",
  id: "8b96049d-b35e-472b-bc10-1d698839f089",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
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
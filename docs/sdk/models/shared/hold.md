# Hold

## Example Usage

```typescript
import { Hold } from "@formance/formance-sdk/sdk/models/shared";

let value: Hold = {
  description: "Polarised zero defect success",
  id: "c5537fe1-0e83-4aa1-b403-23a012544cf8",
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
| `destination`                                     | *shared.Subject*                                  | :heavy_minus_sign:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The unique ID of the hold.                        |
| `metadata`                                        | Record<string, *string*>                          | :heavy_check_mark:                                | Metadata associated with the hold.                |
| `walletID`                                        | *string*                                          | :heavy_check_mark:                                | The ID of the wallet the hold is associated with. |
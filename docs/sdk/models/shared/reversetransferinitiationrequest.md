# ReverseTransferInitiationRequest

## Example Usage

```typescript
import { ReverseTransferInitiationRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: ReverseTransferInitiationRequest = {
  amount: BigInt("630017"),
  asset: "USD",
  description: "developmental baseboard basket out and",
  metadata: {
    "key": "<value>",
  },
  reference: "XXX",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `amount`                 | *BigInt*                 | :heavy_check_mark:       | N/A                      |                          |
| `asset`                  | *string*                 | :heavy_check_mark:       | N/A                      | USD                      |
| `description`            | *string*                 | :heavy_check_mark:       | N/A                      |                          |
| `metadata`               | Record<string, *string*> | :heavy_check_mark:       | N/A                      |                          |
| `reference`              | *string*                 | :heavy_check_mark:       | N/A                      | XXX                      |
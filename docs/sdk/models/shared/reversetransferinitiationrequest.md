# ReverseTransferInitiationRequest

## Example Usage

```typescript
import { ReverseTransferInitiationRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: ReverseTransferInitiationRequest = {
    amount: BigInt("873833"),
    asset: "USD",
    description: "Pre-emptive stable help-desk",
    metadata: {
        key: "<value>",
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
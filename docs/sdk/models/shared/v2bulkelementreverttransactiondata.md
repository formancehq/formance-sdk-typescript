# V2BulkElementRevertTransactionData

## Example Usage

```typescript
import { V2BulkElementRevertTransactionData } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkElementRevertTransactionData = {
  id: 581931n,
  metadata: {
    "admin": "true",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `atEffectiveDate`        | *boolean*                | :heavy_minus_sign:       | N/A                      |                          |
| `force`                  | *boolean*                | :heavy_minus_sign:       | N/A                      |                          |
| `id`                     | *BigInt*                 | :heavy_check_mark:       | N/A                      |                          |
| `metadata`               | Record<string, *string*> | :heavy_minus_sign:       | N/A                      | {<br/>"admin": "true"<br/>} |
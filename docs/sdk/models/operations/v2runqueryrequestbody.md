# V2RunQueryRequestBody

## Example Usage

```typescript
import { V2RunQueryRequestBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V2RunQueryRequestBody = {
  params: {
    resource: "transactions",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `cursor`                 | *string*                 | :heavy_minus_sign:       | N/A                      |
| `params`                 | *ledger.V2QueryParams*   | :heavy_minus_sign:       | N/A                      |
| `vars`                   | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
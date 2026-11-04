# V2ActivityGetPayment

Arguments for the activity that reads a payment

## Example Usage

```typescript
import { V2ActivityGetPayment } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityGetPayment = {
  id: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Identifier of the payment to read |
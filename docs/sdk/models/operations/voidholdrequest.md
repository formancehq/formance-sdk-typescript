# VoidHoldRequest

## Example Usage

```typescript
import { VoidHoldRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: VoidHoldRequest = {
    holdId: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `idempotencyKey`       | *string*               | :heavy_minus_sign:     | Use an idempotency key |
| `holdId`               | *string*               | :heavy_check_mark:     | N/A                    |
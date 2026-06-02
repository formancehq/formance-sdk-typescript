# V3ErrorResponse

## Example Usage

```typescript
import { V3ErrorResponse } from "@formance/formance-sdk/sdk/models/payments";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `details`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `errorCode`                                                           | [payments.V3ErrorsEnum](../../../sdk/models/payments/v3errorsenum.md) | :heavy_check_mark:                                                    | N/A                                                                   | VALIDATION                                                            |
| `errorMessage`                                                        | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | [VALIDATION] missing required config field: pollingPeriod             |
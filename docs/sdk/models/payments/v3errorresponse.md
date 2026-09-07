# V3ErrorResponse

## Example Usage

```typescript
import { V3ErrorResponse } from "@formance/formance-sdk/sdk/models/payments";

// No examples available for this model
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `details`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | Optional link carrying additional context about the error             |                                                                       |
| `errorCode`                                                           | [payments.V3ErrorsEnum](../../../sdk/models/payments/v3errorsenum.md) | :heavy_check_mark:                                                    | Machine-readable error code identifying the failure                   | VALIDATION                                                            |
| `errorMessage`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Human-readable description of the error                               | [VALIDATION] missing required config field: pollingPeriod             |
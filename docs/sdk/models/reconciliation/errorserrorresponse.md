# ErrorsErrorResponse

Error response

## Example Usage

```typescript
import { ErrorsErrorResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

// No examples available for this model
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `details`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Optional link carrying additional context about the error |                                                           |
| `errorCode`                                               | *string*                                                  | :heavy_check_mark:                                        | Machine-readable error code identifying the failure       | VALIDATION                                                |
| `errorMessage`                                            | *string*                                                  | :heavy_check_mark:                                        | Human-readable description of the error                   |                                                           |
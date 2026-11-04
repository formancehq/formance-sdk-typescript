# ErrorResponse

Error response

## Example Usage

```typescript
import { ErrorResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: ErrorResponse = {
  errorCode: "VALIDATION",
  errorMessage: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `details`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Optional link carrying additional context about the error |                                                           |
| `errorCode`                                               | *string*                                                  | :heavy_check_mark:                                        | Machine-readable error code identifying the failure       | VALIDATION                                                |
| `errorMessage`                                            | *string*                                                  | :heavy_check_mark:                                        | Human-readable description of the error                   |                                                           |
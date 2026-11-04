# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@formance/formance-sdk/sdk/models/webhooks";

// No examples available for this model
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Optional link carrying additional context about the error                                    | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorCode`                                                                                  | [webhooks.ErrorsEnum](../../../sdk/models/webhooks/errorsenum.md)                            | :heavy_check_mark:                                                                           | Machine-readable error code identifying the failure                                          | VALIDATION                                                                                   |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | Human-readable description of the error                                                      | [VALIDATION] invalid 'cursor' query param                                                    |
# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@formance/formance-sdk/sdk/models/webhooks";

// No examples available for this model
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `errorsEnum`                                                                                 | [webhooks.ErrorsEnum](../../../sdk/models/webhooks/errorsenum.md)                            | :heavy_check_mark:                                                                           | N/A                                                                                          | VALIDATION                                                                                   |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | [VALIDATION] invalid 'cursor' query param                                                    |
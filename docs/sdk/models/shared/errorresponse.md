# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse, ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: ErrorResponse = {
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorCode: ErrorsEnum.InsufficientFund,
  errorMessage: "[INSUFFICIENT_FUND] account had insufficient funds",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorCode`                                                                                  | [shared.ErrorsEnum](../../../sdk/models/shared/errorsenum.md)                                | :heavy_check_mark:                                                                           | N/A                                                                                          | INSUFFICIENT_FUND                                                                            |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | [INSUFFICIENT_FUND] account had insufficient funds                                           |
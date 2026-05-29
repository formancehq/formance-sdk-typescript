# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse, ErrorsEnum } from "@formance/formance-sdk/sdk/models/ledger";

let value: ErrorResponse = {
  errorsEnum: ErrorsEnum.InsufficientFund,
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorMessage: "[INSUFFICIENT_FUND] account had insufficient funds",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `errorsEnum`                                                                                 | [ledger.ErrorsEnum](../../../sdk/models/ledger/errorsenum.md)                                | :heavy_check_mark:                                                                           | N/A                                                                                          | INSUFFICIENT_FUND                                                                            |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | [INSUFFICIENT_FUND] account had insufficient funds                                           |
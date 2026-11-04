# ErrorResponse

## Example Usage

```typescript
import { ErrorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: ErrorResponse = {
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorCode: "INSUFFICIENT_FUND",
  errorMessage: "[INSUFFICIENT_FUND] account had insufficient funds",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `details`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional link carrying additional context about the error, such as a Numscript playground URL reproducing it | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9                 |
| `errorCode`                                                                                                  | [ledger.ErrorsEnum](../../../sdk/models/ledger/errorsenum.md)                                                | :heavy_check_mark:                                                                                           | Machine-readable error code identifying the failure                                                          | INSUFFICIENT_FUND                                                                                            |
| `errorMessage`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Human-readable description of the error                                                                      | [INSUFFICIENT_FUND] account had insufficient funds                                                           |
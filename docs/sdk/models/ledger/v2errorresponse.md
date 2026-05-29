# V2ErrorResponse

## Example Usage

```typescript
import { V2ErrorResponse, V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2ErrorResponse = {
  v2ErrorsEnum: V2ErrorsEnum.Validation,
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `v2ErrorsEnum`                                                                               | [ledger.V2ErrorsEnum](../../../sdk/models/ledger/v2errorsenum.md)                            | :heavy_check_mark:                                                                           | N/A                                                                                          | VALIDATION                                                                                   |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | [VALIDATION] invalid 'cursor' query param                                                    |
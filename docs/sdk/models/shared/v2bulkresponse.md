# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse, V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      errorCode: "<value>",
      errorDescription: "<value>",
      logID: 287153,
      responseType: "<value>",
    },
  ],
  details:
    "https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9",
  errorCode: V2ErrorsEnum.Validation,
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | *shared.V2BulkElementResult*[]                                                               | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `details`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | https://play.numscript.org/?payload=eyJlcnJvciI6ImFjY291bnQgaGFkIGluc3VmZmljaWVudCBmdW5kcyJ9 |
| `errorCode`                                                                                  | [shared.V2ErrorsEnum](../../../sdk/models/shared/v2errorsenum.md)                            | :heavy_check_mark:                                                                           | N/A                                                                                          | VALIDATION                                                                                   |
| `errorMessage`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | [VALIDATION] invalid 'cursor' query param                                                    |
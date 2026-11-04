# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkResponse = {
  data: [
    {
      errorCode: "<value>",
      errorDescription: "<value>",
      logID: 416874,
      responseType: "ERROR",
    },
  ],
  errorCode: "VALIDATION",
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | *ledger.V2BulkElementResult*[]                                    | :heavy_minus_sign:                                                | Result of each element of the bulk request, in submission order   |                                                                   |
| `errorCode`                                                       | [ledger.V2ErrorsEnum](../../../sdk/models/ledger/v2errorsenum.md) | :heavy_minus_sign:                                                | Machine-readable error code identifying the failure               | VALIDATION                                                        |
| `errorMessage`                                                    | *string*                                                          | :heavy_minus_sign:                                                | Human-readable description of the error                           | [VALIDATION] invalid 'cursor' query param                         |
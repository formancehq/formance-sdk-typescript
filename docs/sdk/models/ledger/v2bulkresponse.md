# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse, V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkResponse = {
  data: [
    {
      logID: 416874,
      responseType: "<value>",
    },
  ],
  errorCode: V2ErrorsEnum.Validation,
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | *ledger.V2BulkElementResult*[]                                    | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `errorCode`                                                       | [ledger.V2ErrorsEnum](../../../sdk/models/ledger/v2errorsenum.md) | :heavy_minus_sign:                                                | N/A                                                               | VALIDATION                                                        |
| `errorMessage`                                                    | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | [VALIDATION] invalid 'cursor' query param                         |
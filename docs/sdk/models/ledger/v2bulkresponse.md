# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse, V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2BulkResponse = {
  v2ErrorsEnum: V2ErrorsEnum.Validation,
  data: [
    {
      logID: 416874,
      responseType: "<value>",
    },
  ],
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `v2ErrorsEnum`                                                    | [ledger.V2ErrorsEnum](../../../sdk/models/ledger/v2errorsenum.md) | :heavy_minus_sign:                                                | N/A                                                               | VALIDATION                                                        |
| `data`                                                            | *ledger.V2BulkElementResult*[]                                    | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `errorMessage`                                                    | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | [VALIDATION] invalid 'cursor' query param                         |
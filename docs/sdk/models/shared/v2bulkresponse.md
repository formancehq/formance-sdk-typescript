# V2BulkResponse

## Example Usage

```typescript
import { V2BulkResponse, V2ErrorsEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V2BulkResponse = {
  data: [
    {
      errorCode: "<value>",
      errorDescription: "<value>",
      logID: 416874,
      responseType: "ERROR",
    },
  ],
  errorCode: V2ErrorsEnum.Validation,
  errorMessage: "[VALIDATION] invalid 'cursor' query param",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | *shared.V2BulkElementResult*[]                                    | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `errorCode`                                                       | [shared.V2ErrorsEnum](../../../sdk/models/shared/v2errorsenum.md) | :heavy_minus_sign:                                                | N/A                                                               | VALIDATION                                                        |
| `errorMessage`                                                    | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | [VALIDATION] invalid 'cursor' query param                         |
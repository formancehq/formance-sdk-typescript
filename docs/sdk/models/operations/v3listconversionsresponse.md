# V3ListConversionsResponse

## Example Usage

```typescript
import { V3ListConversionsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListConversionsResponse = {
  contentType: "<value>",
  statusCode: 76018,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `v3ConversionsCursorResponse`                                                                       | [payments.V3ConversionsCursorResponse](../../../sdk/models/payments/v3conversionscursorresponse.md) | :heavy_minus_sign:                                                                                  | OK                                                                                                  |
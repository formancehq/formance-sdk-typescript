# V3GetConversionResponse

## Example Usage

```typescript
import { V3GetConversionResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetConversionResponse = {
  contentType: "<value>",
  statusCode: 906994,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `v3GetConversionResponse`                                                                   | [payments.V3GetConversionResponse](../../../sdk/models/payments/v3getconversionresponse.md) | :heavy_minus_sign:                                                                          | OK                                                                                          |
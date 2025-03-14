# V3InitiatePaymentResponse

## Example Usage

```typescript
import { V3InitiatePaymentResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3InitiatePaymentResponse = {
  contentType: "<value>",
  statusCode: 208,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `v3InitiatePaymentResponse`                                                                 | [shared.V3InitiatePaymentResponse](../../../sdk/models/shared/v3initiatepaymentresponse.md) | :heavy_minus_sign:                                                                          | Accepted                                                                                    |
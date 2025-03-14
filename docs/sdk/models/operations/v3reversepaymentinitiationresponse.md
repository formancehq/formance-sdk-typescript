# V3ReversePaymentInitiationResponse

## Example Usage

```typescript
import { V3ReversePaymentInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ReversePaymentInitiationResponse = {
  contentType: "<value>",
  statusCode: 511,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v3ReversePaymentInitiationResponse`                                                                          | [shared.V3ReversePaymentInitiationResponse](../../../sdk/models/shared/v3reversepaymentinitiationresponse.md) | :heavy_minus_sign:                                                                                            | Accepted                                                                                                      |
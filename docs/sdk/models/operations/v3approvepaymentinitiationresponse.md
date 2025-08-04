# V3ApprovePaymentInitiationResponse

## Example Usage

```typescript
import { V3ApprovePaymentInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ApprovePaymentInitiationResponse = {
  contentType: "<value>",
  statusCode: 970098,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v3ApprovePaymentInitiationResponse`                                                                          | [shared.V3ApprovePaymentInitiationResponse](../../../sdk/models/shared/v3approvepaymentinitiationresponse.md) | :heavy_minus_sign:                                                                                            | Accepted                                                                                                      |
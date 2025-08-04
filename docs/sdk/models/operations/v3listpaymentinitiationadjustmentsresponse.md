# V3ListPaymentInitiationAdjustmentsResponse

## Example Usage

```typescript
import { V3ListPaymentInitiationAdjustmentsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3ListPaymentInitiationAdjustmentsResponse = {
  contentType: "<value>",
  statusCode: 188875,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `v3PaymentInitiationAdjustmentsCursorResponse`                                                                                    | [shared.V3PaymentInitiationAdjustmentsCursorResponse](../../../sdk/models/shared/v3paymentinitiationadjustmentscursorresponse.md) | :heavy_minus_sign:                                                                                                                | OK                                                                                                                                |
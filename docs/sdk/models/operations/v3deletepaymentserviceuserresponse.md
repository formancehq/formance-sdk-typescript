# V3DeletePaymentServiceUserResponse

## Example Usage

```typescript
import { V3DeletePaymentServiceUserResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3DeletePaymentServiceUserResponse = {
  contentType: "<value>",
  statusCode: 496826,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v3PaymentServiceUserDeleteResponse`                                                                          | [shared.V3PaymentServiceUserDeleteResponse](../../../sdk/models/shared/v3paymentserviceuserdeleteresponse.md) | :heavy_minus_sign:                                                                                            | Accepted                                                                                                      |
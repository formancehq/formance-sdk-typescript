# V3DeletePaymentServiceUserConnectorResponse

## Example Usage

```typescript
import { V3DeletePaymentServiceUserConnectorResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3DeletePaymentServiceUserConnectorResponse = {
  contentType: "<value>",
  statusCode: 341420,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `v3PaymentServiceUserDeleteConnectorResponse`                                                                                   | [shared.V3PaymentServiceUserDeleteConnectorResponse](../../../sdk/models/shared/v3paymentserviceuserdeleteconnectorresponse.md) | :heavy_minus_sign:                                                                                                              | Accepted                                                                                                                        |
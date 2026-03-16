# V3CreateLinkForPaymentServiceUserResponse

## Example Usage

```typescript
import { V3CreateLinkForPaymentServiceUserResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3CreateLinkForPaymentServiceUserResponse = {
  contentType: "<value>",
  statusCode: 953038,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `v3PaymentServiceUserCreateLinkResponse`                                                                              | [shared.V3PaymentServiceUserCreateLinkResponse](../../../sdk/models/shared/v3paymentserviceusercreatelinkresponse.md) | :heavy_minus_sign:                                                                                                    | Created                                                                                                               |
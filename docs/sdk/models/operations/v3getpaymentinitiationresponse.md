# V3GetPaymentInitiationResponse

## Example Usage

```typescript
import { V3GetPaymentInitiationResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetPaymentInitiationResponse = {
  contentType: "<value>",
  statusCode: 75202,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `v3GetPaymentInitiationResponse`                                                                      | [shared.V3GetPaymentInitiationResponse](../../../sdk/models/shared/v3getpaymentinitiationresponse.md) | :heavy_minus_sign:                                                                                    | OK                                                                                                    |
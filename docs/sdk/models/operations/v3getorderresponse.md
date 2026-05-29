# V3GetOrderResponse

## Example Usage

```typescript
import { V3GetOrderResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetOrderResponse = {
  contentType: "<value>",
  statusCode: 927753,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `v3GetOrderResponse`                                                              | [payments.V3GetOrderResponse](../../../sdk/models/payments/v3getorderresponse.md) | :heavy_minus_sign:                                                                | OK                                                                                |
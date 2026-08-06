# ReplayDeliveryResponse

## Example Usage

```typescript
import { ReplayDeliveryResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReplayDeliveryResponse = {
  contentType: "<value>",
  statusCode: 821545,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `deliveryResponse`                                                            | [webhooks.DeliveryResponse](../../../sdk/models/webhooks/deliveryresponse.md) | :heavy_minus_sign:                                                            | Delivery synchronously placed back in the durable queue.                      |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |
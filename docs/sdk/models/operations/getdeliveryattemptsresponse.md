# GetDeliveryAttemptsResponse

## Example Usage

```typescript
import { GetDeliveryAttemptsResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetDeliveryAttemptsResponse = {
  contentType: "<value>",
  statusCode: 53187,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `deliveryAttemptsResponse`                                                                    | [webhooks.DeliveryAttemptsResponse](../../../sdk/models/webhooks/deliveryattemptsresponse.md) | :heavy_minus_sign:                                                                            | Paginated append-only attempt history.                                                        |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
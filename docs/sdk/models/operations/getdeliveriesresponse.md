# GetDeliveriesResponse

## Example Usage

```typescript
import { GetDeliveriesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: GetDeliveriesResponse = {
  contentType: "<value>",
  statusCode: 27782,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `deliveriesResponse`                                                              | [webhooks.DeliveriesResponse](../../../sdk/models/webhooks/deliveriesresponse.md) | :heavy_minus_sign:                                                                | Paginated deliveries without payloads.                                            |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
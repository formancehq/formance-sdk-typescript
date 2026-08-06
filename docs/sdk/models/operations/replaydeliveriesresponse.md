# ReplayDeliveriesResponse

## Example Usage

```typescript
import { ReplayDeliveriesResponse } from "@formance/formance-sdk/sdk/models/operations";

let value: ReplayDeliveriesResponse = {
  contentType: "<value>",
  statusCode: 936861,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `replayDeliveriesResponse`                                                                    | [webhooks.ReplayDeliveriesResponse](../../../sdk/models/webhooks/replaydeliveriesresponse.md) | :heavy_minus_sign:                                                                            | Deliveries synchronously placed back in the durable queue.                                    |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
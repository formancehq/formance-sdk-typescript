# DeliveryAttempt

## Example Usage

```typescript
import { DeliveryAttempt } from "@formance/formance-sdk/sdk/models/webhooks";

let value: DeliveryAttempt = {
  attemptNumber: 279880,
  createdAt: new Date("2024-09-18T05:04:05.700Z"),
  deliveryID: "b0d73285-9c3e-4bf0-90d5-b8f23355de61",
  endpoint: "https://snappy-popularity.org/",
  id: "16ae0b22-8486-4322-b9fc-7cab1cb050a0",
  outcome: "succeeded",
  replayGeneration: 137677,
  statusCode: 230067,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attemptNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | Position of this attempt within its retry cycle                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the attempt was made                                                                     |
| `deliveryID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the delivery this attempt belongs to                                            |
| `durationMillis`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | How long the attempt took, in milliseconds                                                    |
| `endpoint`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | URL the attempt was sent to                                                                   |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error reported by the attempt, when it did not succeed                                        |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the attempt                                                              |
| `outcome`                                                                                     | [webhooks.Outcome](../../../sdk/models/webhooks/outcome.md)                                   | :heavy_check_mark:                                                                            | How the attempt ended. A retryable failure is retried, a permanent failure is not             |
| `replayGeneration`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | Retry cycle this attempt belongs to                                                           |
| `responseExcerpt`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Truncated body returned by the endpoint, kept for troubleshooting                             |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP status code returned by the endpoint                                                     |
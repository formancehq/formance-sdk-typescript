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
| `attemptNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deliveryID`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationMillis`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `endpoint`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `error`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `outcome`                                                                                     | [webhooks.Outcome](../../../sdk/models/webhooks/outcome.md)                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `replayGeneration`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `responseExcerpt`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
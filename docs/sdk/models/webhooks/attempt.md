# Attempt

## Example Usage

```typescript
import { Attempt } from "@formance/formance-sdk/sdk/models/webhooks";

let value: Attempt = {
  webhooksConfig: {
    active: true,
    createdAt: new Date("2024-11-13T13:49:09.341Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "b8e390eb-003d-4426-ad52-6efeacc557f0",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2025-04-05T22:32:32.491Z"),
  },
  createdAt: new Date("2025-02-05T21:49:20.167Z"),
  id: "fa3287d6-eb32-412c-a5e2-c48cb330876f",
  payload: "{\"data\":\"test\"}",
  retryAttempt: 1,
  status: "success",
  statusCode: 200,
  updatedAt: new Date("2026-07-28T18:23:54.719Z"),
  webhookID: "12c62d9a-0e0c-47b4-8d43-2bb23afc27d3",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `webhooksConfig`                                                                              | [webhooks.WebhooksConfig](../../../sdk/models/webhooks/webhooksconfig.md)                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `nextRetryAfter`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `payload`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | {"data":"test"}                                                                               |
| `retryAttempt`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1                                                                                             |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | success                                                                                       |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 200                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `webhookID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
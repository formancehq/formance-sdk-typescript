# Attempt

A single delivery attempt made against a webhook endpoint

## Example Usage

```typescript
import { Attempt } from "@formance/formance-sdk/sdk/models/webhooks";

let value: Attempt = {
  config: {
    active: true,
    createdAt: new Date("2024-07-03T21:48:22.124Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "8632b3d4-b624-4cd0-8286-c8bbbd5a999f",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2024-06-28T22:55:29.320Z"),
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
| `config`                                                                                      | [webhooks.WebhooksConfig](../../../sdk/models/webhooks/webhooksconfig.md)                     | :heavy_check_mark:                                                                            | A webhook endpoint together with the event types it subscribes to                             |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the attempt was created                                                                  |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the attempt                                                              |                                                                                               |
| `nextRetryAfter`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the next retry is scheduled, absent once the attempt is settled                          |                                                                                               |
| `payload`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The event body sent to the endpoint                                                           | {"data":"test"}                                                                               |
| `retryAttempt`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Position of this attempt in the retry sequence                                                | 1                                                                                             |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Current status of the attempt                                                                 | success                                                                                       |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP status code returned by the endpoint                                                     | 200                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the attempt was last modified                                                            |                                                                                               |
| `webhookID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the webhook this attempt belongs to                                             |                                                                                               |
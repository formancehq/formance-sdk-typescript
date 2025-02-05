# Attempt

## Example Usage

```typescript
import { Attempt } from "@formance/formance-sdk/sdk/models/shared";

let value: Attempt = {
  config: {
    active: true,
    createdAt: new Date("2023-05-12T10:34:30.520Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "825d98f6-e965-4e94-b833-2bc56c0548e0",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2024-09-02T14:41:23.294Z"),
  },
  createdAt: new Date("2024-10-06T01:59:27.014Z"),
  id: "f24379b0-6e7d-414b-997a-ce7a6e76f05d",
  payload: "{\"data\":\"test\"}",
  retryAttempt: 1,
  status: "success",
  statusCode: 200,
  updatedAt: new Date("2024-01-17T19:57:19.728Z"),
  webhookID: "96545ef1-baa0-44b7-b08d-ee873dcd31be",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `config`                                                                                      | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md)                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `nextRetryAfter`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `payload`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | {"data":"test"}                                                                               |
| `retryAttempt`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1                                                                                             |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | success                                                                                       |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 200                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `webhookID`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
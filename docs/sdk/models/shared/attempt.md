# Attempt

## Example Usage

```typescript
import { Attempt } from "@formance/formance-sdk/sdk/models/shared";

let value: Attempt = {
  config: {
    active: true,
    createdAt: new Date("2022-11-14T11:47:11.710Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "b97ace7a-6e76-4f05-9d75-96545ef1baa0",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2024-03-28T17:29:23.622Z"),
  },
  createdAt: new Date("2023-06-28T09:42:10.187Z"),
  id: "08dee873-dcd3-41be-8e8a-148e790f7258",
  payload: "{\"data\":\"test\"}",
  retryAttempt: 1,
  status: "success",
  statusCode: 200,
  updatedAt: new Date("2022-08-04T12:35:53.060Z"),
  webhookID: "ed14a40b-3542-422f-abf9-5277c83d2805",
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
# Attempt

## Example Usage

```typescript
import { Attempt } from "@formance/formance-sdk/sdk/models/shared";

let value: Attempt = {
  config: {
    active: true,
    createdAt: new Date("2024-09-13T05:46:54.120Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "f84cada7-4040-463b-b31d-0ce187c9407e",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2023-05-18T07:48:42.632Z"),
  },
  createdAt: new Date("2025-08-01T07:14:49.018Z"),
  id: "01f61700-8395-42f3-a044-45c051f277c4",
  payload: "{\"data\":\"test\"}",
  retryAttempt: 1,
  status: "success",
  statusCode: 200,
  updatedAt: new Date("2023-01-29T20:48:34.054Z"),
  webhookID: "e1725a24-ad98-412f-a07c-3774eeb0a342",
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
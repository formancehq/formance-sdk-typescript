# WebhooksConfig

## Example Usage

```typescript
import { WebhooksConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: WebhooksConfig = {
  active: true,
  createdAt: new Date("2022-08-04T14:43:45.331Z"),
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
    "TYPE2",
  ],
  id: "986cbb80-6770-4a40-a8e0-09801d712950",
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  updatedAt: new Date("2022-02-05T11:00:40.920Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | true                                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `endpoint`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | https://example.com                                                                           |
| `eventTypes`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           | [<br/>"TYPE1",<br/>"TYPE2"<br/>]                                                              |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3                                                              |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
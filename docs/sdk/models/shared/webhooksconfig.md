# WebhooksConfig

## Example Usage

```typescript
import { WebhooksConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: WebhooksConfig = {
  active: true,
  createdAt: new Date("2023-11-12T09:04:54.417Z"),
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
    "TYPE2",
  ],
  id: "4a4be316-e883-4d42-804f-721ff9e2262e",
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  updatedAt: new Date("2025-03-22T18:00:09.972Z"),
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
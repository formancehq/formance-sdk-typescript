# WebhooksConfig

## Example Usage

```typescript
import { WebhooksConfig } from "@formance/formance-sdk/sdk/models/shared";

let value: WebhooksConfig = {
  active: true,
  createdAt: new Date("2023-04-22T08:34:26.118Z"),
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
    "TYPE2",
  ],
  id: "59c12ab9-f72a-4998-af21-23993777c7c2",
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  updatedAt: new Date("2024-06-22T05:15:07.307Z"),
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
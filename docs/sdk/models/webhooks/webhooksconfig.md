# WebhooksConfig

A webhook endpoint together with the event types it subscribes to

## Example Usage

```typescript
import { WebhooksConfig } from "@formance/formance-sdk/sdk/models/webhooks";

let value: WebhooksConfig = {
  active: true,
  createdAt: new Date("2024-11-11T09:04:54.417Z"),
  endpoint: "https://example.com",
  eventTypes: [
    "TYPE1",
    "TYPE2",
  ],
  id: "4a4be316-e883-4d42-804f-721ff9e2262e",
  secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
  updatedAt: new Date("2026-03-22T18:00:09.972Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the configuration is active. Deactivated configurations receive no deliveries         | true                                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the configuration was created                                                            |                                                                                               |
| `endpoint`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | URL events are delivered to                                                                   | https://example.com                                                                           |
| `eventTypes`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Types of event that trigger a delivery to this endpoint                                       | [<br/>"TYPE1",<br/>"TYPE2"<br/>]                                                              |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the configuration                                                        |                                                                                               |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Secret used to sign delivery payloads, letting the receiver verify their authenticity         | V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3                                                              |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the configuration was last modified                                                      |                                                                                               |
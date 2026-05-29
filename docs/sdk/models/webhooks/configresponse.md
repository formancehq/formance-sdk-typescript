# ConfigResponse

## Example Usage

```typescript
import { ConfigResponse } from "@formance/formance-sdk/sdk/models/webhooks";

let value: ConfigResponse = {
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `webhooksConfig`                                                          | [webhooks.WebhooksConfig](../../../sdk/models/webhooks/webhooksconfig.md) | :heavy_check_mark:                                                        | N/A                                                                       |
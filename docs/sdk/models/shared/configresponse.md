# ConfigResponse

## Example Usage

```typescript
import { ConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigResponse = {
  data: {
    active: true,
    createdAt: new Date("2023-11-14T13:49:09.341Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "b8e390eb-003d-4426-ad52-6efeacc557f0",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2024-04-05T22:32:32.491Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md) | :heavy_check_mark:                                                    | N/A                                                                   |
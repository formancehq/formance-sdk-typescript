# ConfigResponse

## Example Usage

```typescript
import { ConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigResponse = {
  data: {
    active: true,
    createdAt: new Date("2023-03-21T09:16:05.859Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "0560d7fe-8a54-4281-b75c-6e3e9184ba16",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2024-03-22T23:28:52.372Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md) | :heavy_check_mark:                                                    | N/A                                                                   |
# ConfigResponse

## Example Usage

```typescript
import { ConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigResponse = {
  data: {
    active: true,
    createdAt: new Date("2023-10-10T06:45:27.974Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "c6dc5e34-7627-499b-bbbe-6949fb2bb4ec",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2023-12-30T11:21:48.919Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md) | :heavy_check_mark:                                                    | N/A                                                                   |
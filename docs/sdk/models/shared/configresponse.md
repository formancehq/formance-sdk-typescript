# ConfigResponse

## Example Usage

```typescript
import { ConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigResponse = {
  data: {
    active: true,
    createdAt: new Date("2022-11-04T19:43:41.147Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "4f3b756c-11f6-4c37-a512-6243835bbc05",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2023-11-26T20:23:31.494Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md) | :heavy_check_mark:                                                    | N/A                                                                   |
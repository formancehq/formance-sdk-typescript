# ConfigResponse

## Example Usage

```typescript
import { ConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigResponse = {
  data: {
    active: true,
    createdAt: new Date("2024-06-21T01:49:46.650Z"),
    endpoint: "https://example.com",
    eventTypes: [
      "TYPE1",
      "TYPE2",
    ],
    id: "3b0ea642-96be-44a6-8095-071a88eeb940",
    secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
    updatedAt: new Date("2022-12-18T01:01:09.930Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md) | :heavy_check_mark:                                                    | N/A                                                                   |
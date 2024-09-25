# ConfigsResponseCursor

## Example Usage

```typescript
import { ConfigsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponseCursor = {
  data: [
    {
      active: true,
      createdAt: new Date("2024-03-17T02:09:56.964Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "194fb9b7-5e50-46ca-bf1e-57613b020d92",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2024-11-25T14:43:22.496Z"),
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.WebhooksConfig](../../../sdk/models/shared/webhooksconfig.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     | false                                                                   |
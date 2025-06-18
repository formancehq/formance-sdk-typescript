# ConfigsResponseCursor

## Example Usage

```typescript
import { ConfigsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponseCursor = {
  data: [
    {
      active: true,
      createdAt: new Date("2025-10-03T22:31:06.964Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "12a4490a-393a-4397-99d6-0654e8a25ec4",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2023-09-22T08:18:22.925Z"),
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
# ConfigsResponseCursor

## Example Usage

```typescript
import { ConfigsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponseCursor = {
  data: [
    {
      active: true,
      createdAt: new Date("2023-03-14T13:08:44.183Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "44cf5e9d-9a45-478a-9c1a-c600dec001ac",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2023-07-05T16:31:32.930Z"),
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
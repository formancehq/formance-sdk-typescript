# ConfigsResponseCursor

## Example Usage

```typescript
import { ConfigsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponseCursor = {
  data: [
    {
      active: true,
      createdAt: new Date("2022-05-01T20:48:13.554Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "22c1272b-7e0d-42e5-b80b-3ea442c74fc9",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2022-05-12T15:48:49.943Z"),
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
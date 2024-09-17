# ConfigsResponseCursor

## Example Usage

```typescript
import { ConfigsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ConfigsResponseCursor = {
  data: [
    {
      active: true,
      createdAt: new Date("2024-05-25T08:43:19.174Z"),
      endpoint: "https://example.com",
      eventTypes: [
        "TYPE1",
        "TYPE2",
      ],
      id: "5e347627-99bf-4bbe-a949-fb2bb4ecae6c",
      secret: "V0bivxRWveaoz08afqjU6Ko/jwO0Cb+3",
      updatedAt: new Date("2022-08-07T02:15:27.437Z"),
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
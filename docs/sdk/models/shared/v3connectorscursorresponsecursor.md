# V3ConnectorsCursorResponseCursor

## Example Usage

```typescript
import { V3ConnectorsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorsCursorResponseCursor = {
  data: [
    {
      config: {},
      createdAt: new Date("2026-09-10T22:24:25.531Z"),
      id: "<id>",
      name: "<value>",
      provider: "<value>",
      reference: "<value>",
      scheduledForDeletion: true,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.V3Connector](../../../sdk/models/shared/v3connector.md)[] | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `hasMore`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | false                                                             |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `pageSize`                                                        | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               | 15                                                                |
| `previous`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                      |
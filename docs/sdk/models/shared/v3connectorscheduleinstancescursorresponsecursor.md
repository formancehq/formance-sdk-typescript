# V3ConnectorScheduleInstancesCursorResponseCursor

## Example Usage

```typescript
import { V3ConnectorScheduleInstancesCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ConnectorScheduleInstancesCursorResponseCursor = {
  data: [
    {
      connectorID: "<value>",
      createdAt: new Date("2024-01-22T16:01:21.394Z"),
      id: "<id>",
      scheduleID: "<id>",
      terminated: false,
      updatedAt: new Date("2025-03-29T01:12:39.596Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `data`                                                          | [shared.V3Instance](../../../sdk/models/shared/v3instance.md)[] | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `hasMore`                                                       | *boolean*                                                       | :heavy_check_mark:                                              | N/A                                                             | false                                                           |
| `next`                                                          | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |
| `pageSize`                                                      | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             | 15                                                              |
| `previous`                                                      | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                    |
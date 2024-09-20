# TasksCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursor = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2024-02-14T05:25:25.572Z"),
        descriptor: {},
        id: "c05a23a4-5cef-4c5f-9e10-a0ce2169e510",
        state: {},
        status: PaymentStatus.Pending,
        updatedAt: new Date("2022-04-01T19:58:29.087Z"),
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | [shared.TasksCursorCursor](../../../sdk/models/shared/taskscursorcursor.md) | :heavy_check_mark:                                                          | N/A                                                                         |
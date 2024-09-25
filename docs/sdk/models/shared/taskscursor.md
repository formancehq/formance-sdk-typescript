# TasksCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursor = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2022-11-12T11:10:45.405Z"),
        descriptor: {},
        id: "7236b8ed-099f-4083-809c-c06033354f5e",
        state: {},
        status: PaymentStatus.DisputeWon,
        updatedAt: new Date("2022-03-09T05:37:58.726Z"),
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
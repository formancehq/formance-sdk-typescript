# TasksCursor

OK

## Example Usage

```typescript
import { TasksCursor, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursor = {
  cursor: {
    data: [
      {
        connectorID: "<id>",
        createdAt: new Date("2025-04-30T16:47:28.347Z"),
        descriptor: {},
        id: "c157fe61-68e4-44a8-8327-ccf660dac7e0",
        status: TaskStatus.Active,
        updatedAt: new Date("2023-04-04T06:37:32.905Z"),
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
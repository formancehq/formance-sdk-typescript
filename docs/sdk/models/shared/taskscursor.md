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
        createdAt: new Date("2023-08-22T14:52:03.725Z"),
        descriptor: {},
        id: "7d4a715d-fd25-4d8c-8c15-7fe6168e44a8",
        status: TaskStatus.Pending,
        updatedAt: new Date("2024-06-20T11:44:04.584Z"),
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
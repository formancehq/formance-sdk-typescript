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
        createdAt: new Date("2023-01-09T23:40:12.698Z"),
        descriptor: {},
        id: "3b2937d4-a715-4dfd-b25d-8cc157fe6168",
        status: TaskStatus.Active,
        updatedAt: new Date("2023-12-05T12:21:44.955Z"),
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
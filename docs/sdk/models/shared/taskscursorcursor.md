# TasksCursorCursor

## Example Usage

```typescript
import { TasksCursorCursor, TaskStatus } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorCursor = {
  data: [
    {
      connectorID: "<id>",
      createdAt: new Date("2024-03-24T01:54:21.205Z"),
      descriptor: {},
      id: "1ff74fdb-76c8-4a9b-8162-3380f80a41d3",
      status: TaskStatus.Pending,
      updatedAt: new Date("2025-03-09T11:58:58.390Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `data`                                       | *shared.TasksCursorData*[]                   | :heavy_check_mark:                           | N/A                                          |                                              |
| `hasMore`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          | false                                        |
| `next`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `pageSize`                                   | *number*                                     | :heavy_check_mark:                           | N/A                                          | 15                                           |
| `previous`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol= |
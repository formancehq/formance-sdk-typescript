# TasksCursorCursor

Paginated cursor wrapping the list of tasks

## Example Usage

```typescript
import { TasksCursorCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: TasksCursorCursor = {
  data: [
    {
      connectorID: "<id>",
      createdAt: new Date("2024-11-10T01:47:54.767Z"),
      descriptor: {},
      id: "58d374f2-992c-450d-ab1d-d6bde271d329",
      status: "PENDING",
      updatedAt: new Date("2024-05-05T10:16:45.820Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | *payments.TasksCursorData*[]                           | :heavy_check_mark:                                     | N/A                                                    |                                                        |
| `hasMore`                                              | *boolean*                                              | :heavy_check_mark:                                     | Whether further pages are available                    | false                                                  |
| `next`                                                 | *string*                                               | :heavy_minus_sign:                                     | Cursor for the next page, absent on the last page      |                                                        |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | Number of items requested per page                     | 15                                                     |
| `previous`                                             | *string*                                               | :heavy_minus_sign:                                     | Cursor for the previous page, absent on the first page | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=           |
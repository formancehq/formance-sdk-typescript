# TasksCursorCursorBase

## Example Usage

```typescript
import { TasksCursorCursorBase, TaskStatus } from "@formance/formance-sdk/sdk/models/payments";

let value: TasksCursorCursorBase = {
  data: [
    {
      taskStatus: TaskStatus.Pending,
      connectorID: "<id>",
      createdAt: new Date("2024-09-13T00:38:53.817Z"),
      descriptor: {
        account: "43228632",
        name: "<value>",
      },
      id: "fd64fde9-c147-4fef-aad8-fc2a4c1fe2b8",
      updatedAt: new Date("2025-08-07T08:20:37.485Z"),
    },
    {
      taskStatus: TaskStatus.Pending,
      connectorID: "<id>",
      createdAt: new Date("2024-09-13T00:38:53.817Z"),
      descriptor: {
        account: "43228632",
        name: "<value>",
      },
      id: "fd64fde9-c147-4fef-aad8-fc2a4c1fe2b8",
      updatedAt: new Date("2025-08-07T08:20:37.485Z"),
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
| `data`                                       | *any*[]                                      | :heavy_check_mark:                           | N/A                                          |                                              |
| `hasMore`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          | false                                        |
| `next`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `pageSize`                                   | *number*                                     | :heavy_check_mark:                           | N/A                                          | 15                                           |
| `previous`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol= |
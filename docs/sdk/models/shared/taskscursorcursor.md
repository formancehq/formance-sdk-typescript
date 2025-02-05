# TasksCursorCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorCursor = {
  data: [
    {
      connectorID: "<id>",
      createdAt: new Date("2024-09-07T20:31:08.350Z"),
      descriptor: {
        account: "34411018",
        name: "<value>",
      },
      id: "06c13ba9-2c22-4c55-a455-b35ce918a5dc",
      state: {},
      status: PaymentStatus.Succeeded,
      updatedAt: new Date("2025-02-03T07:55:19.464Z"),
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
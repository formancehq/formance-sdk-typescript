# TasksCursorCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorCursor = {
  data: [
    {
      connectorID: "<id>",
      createdAt: new Date("2022-10-10T04:23:53.662Z"),
      descriptor: {},
      id: "fdb76c8a-9b16-4233-880f-80a41d310ba0",
      state: {},
      status: PaymentStatus.Dispute,
      updatedAt: new Date("2022-06-16T17:54:46.951Z"),
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
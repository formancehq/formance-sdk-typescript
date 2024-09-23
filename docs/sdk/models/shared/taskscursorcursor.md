# TasksCursorCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorCursor = {
  data: [
    {
      connectorID: "<value>",
      createdAt: new Date("2022-12-21T05:51:09.548Z"),
      descriptor: {
        account: "92863557",
        name: "<value>",
      },
      id: "82c6f445-9e24-4977-ade7-ac84a9e0e805",
      state: {},
      status: PaymentStatus.Refunded,
      updatedAt: new Date("2024-12-10T06:06:11.956Z"),
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
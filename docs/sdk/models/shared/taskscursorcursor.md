# TasksCursorCursor

## Example Usage

```typescript
import { PaymentStatus, TasksCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorCursor = {
  data: [
    {
      connectorID: "<value>",
      createdAt: new Date("2022-01-31T23:15:49.640Z"),
      descriptor: {},
      id: "11c5a968-af99-41f8-bc06-44c970ff308f",
      state: {},
      status: PaymentStatus.RefundedFailure,
      updatedAt: new Date("2022-11-29T16:32:56.283Z"),
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
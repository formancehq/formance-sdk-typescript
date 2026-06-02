# PoolsCursorCursor

## Example Usage

```typescript
import { PoolsCursorCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: PoolsCursorCursor = {
  data: [
    {
      accounts: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      id: "<id>",
      name: "<value>",
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [payments.Pool](../../../sdk/models/payments/pool.md)[] | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `hasMore`                                               | *boolean*                                               | :heavy_check_mark:                                      | N/A                                                     | false                                                   |
| `next`                                                  | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `pageSize`                                              | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 15                                                      |
| `previous`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=            |
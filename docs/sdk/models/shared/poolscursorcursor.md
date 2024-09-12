# PoolsCursorCursor

## Example Usage

```typescript
import { PoolsCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: PoolsCursorCursor = {
  data: [
    {
      accounts: [
        "<value>",
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

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`                                              | [shared.Pool](../../../sdk/models/shared/pool.md)[] | :heavy_check_mark:                                  | N/A                                                 |                                                     |
| `hasMore`                                           | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 | false                                               |
| `next`                                              | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |                                                     |
| `pageSize`                                          | *number*                                            | :heavy_check_mark:                                  | N/A                                                 | 15                                                  |
| `previous`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=        |
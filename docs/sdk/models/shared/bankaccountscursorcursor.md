# BankAccountsCursorCursor

## Example Usage

```typescript
import { BankAccountsCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BankAccountsCursorCursor = {
  data: [
    {
      country: "Myanmar",
      createdAt: new Date("2023-12-20T15:19:35.871Z"),
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

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [shared.BankAccount](../../../sdk/models/shared/bankaccount.md)[] | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `hasMore`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | false                                                             |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `pageSize`                                                        | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               | 15                                                                |
| `previous`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                      |
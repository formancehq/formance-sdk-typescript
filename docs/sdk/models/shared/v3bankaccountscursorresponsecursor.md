# V3BankAccountsCursorResponseCursor

## Example Usage

```typescript
import { V3BankAccountsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3BankAccountsCursorResponseCursor = {
  data: [
    {
      createdAt: new Date("2024-07-17T19:51:13.460Z"),
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [shared.V3BankAccount](../../../sdk/models/shared/v3bankaccount.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `hasMore`                                                             | *boolean*                                                             | :heavy_check_mark:                                                    | N/A                                                                   | false                                                                 |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `pageSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 15                                                                    |
| `previous`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                          |
# AccountsCursorCursor

Paginated cursor wrapping the list of accounts

## Example Usage

```typescript
import { AccountsCursorCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountsCursorCursor = {
  data: [],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [payments.Account](../../../sdk/models/payments/account.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | Whether further pages are available                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Cursor for the next page, absent on the last page             |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | Number of items requested per page                            | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | Cursor for the previous page, absent on the first page        | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |
# BalancesCursorResponseCursor

## Example Usage

```typescript
import { BalancesCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BalancesCursorResponseCursor = {
    data: [
        {
            account1: {
                USD: 100,
                EUR: 23,
            },
            account2: {
                CAD: 20,
                JPY: 21,
            },
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
| `data`                                       | Record<string, Record<string, *number*>>[]   | :heavy_check_mark:                           | N/A                                          |                                              |
| `hasMore`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          | false                                        |
| `next`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |                                              |
| `pageSize`                                   | *number*                                     | :heavy_check_mark:                           | N/A                                          | 15                                           |
| `previous`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol= |
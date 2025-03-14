# V3BalancesCursorResponseCursor

## Example Usage

```typescript
import { V3BalancesCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3BalancesCursorResponseCursor = {
  data: [
    {
      accountID: "<id>",
      asset: "<value>",
      balance: BigInt("492261"),
      createdAt: new Date("2023-02-27T21:22:28.511Z"),
      lastUpdatedAt: new Date("2023-01-01T01:54:20.575Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V3Balance](../../../sdk/models/shared/v3balance.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |
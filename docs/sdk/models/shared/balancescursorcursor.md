# BalancesCursorCursor

## Example Usage

```typescript
import { BalancesCursorCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: BalancesCursorCursor = {
  data: [
    {
      accountId: "<id>",
      asset: "<value>",
      balance: BigInt("745764"),
      createdAt: new Date("2024-01-22T22:16:09.171Z"),
      currency: "Kenyan Shilling",
      lastUpdatedAt: new Date("2024-09-22T15:13:56.903Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [shared.AccountBalance](../../../sdk/models/shared/accountbalance.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     | false                                                                   |
| `next`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `pageSize`                                                              | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 15                                                                      |
| `previous`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                            |
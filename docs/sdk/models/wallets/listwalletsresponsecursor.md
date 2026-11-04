# ListWalletsResponseCursor

Paginated cursor wrapping the list of wallets

## Example Usage

```typescript
import { ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/wallets";

let value: ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2025-10-25T04:47:20.887Z"),
      id: "c2f94309-9b1a-4cb6-b585-5a136e9e5174",
      ledger: "<value>",
      metadata: {
        "key": "<value>",
      },
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

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [wallets.Wallet](../../../sdk/models/wallets/wallet.md)[] | :heavy_check_mark:                                        | N/A                                                       |                                                           |
| `hasMore`                                                 | *boolean*                                                 | :heavy_minus_sign:                                        | Whether further pages are available                       | false                                                     |
| `next`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Cursor for the next page, absent on the last page         |                                                           |
| `pageSize`                                                | *number*                                                  | :heavy_check_mark:                                        | Number of items requested per page                        | 15                                                        |
| `previous`                                                | *string*                                                  | :heavy_minus_sign:                                        | Cursor for the previous page, absent on the first page    | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=              |
# ListWalletsResponseCursor

## Example Usage

```typescript
import { ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2025-05-15T15:51:23.548Z"),
      id: "46d17620-3d0d-44e5-abe5-a712a1d964ef",
      ledger: "<value>",
      metadata: {
        "key": "<value>",
        "key1": "<value>",
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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [orchestration.Wallet](../../../sdk/models/orchestration/wallet.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `hasMore`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   | false                                                                 |
| `next`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `pageSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 15                                                                    |
| `previous`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                          |
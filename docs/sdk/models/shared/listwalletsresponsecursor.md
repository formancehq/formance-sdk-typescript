# ListWalletsResponseCursor

## Example Usage

```typescript
import { ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2024-09-18T02:22:39.004Z"),
      id: "72983953-843e-4246-843c-51825e5a82ad",
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

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `data`                                                  | [shared.Wallet](../../../sdk/models/shared/wallet.md)[] | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `hasMore`                                               | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     | false                                                   |
| `next`                                                  | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `pageSize`                                              | *number*                                                | :heavy_check_mark:                                      | N/A                                                     | 15                                                      |
| `previous`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=            |
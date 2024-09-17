# ListWalletsResponseCursor

## Example Usage

```typescript
import { ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2024-06-26T15:34:06.253Z"),
      id: "efcce8f1-9777-473e-a356-2a7b408f05e3",
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
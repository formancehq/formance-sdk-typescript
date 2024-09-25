# V2ListWalletsResponseCursor

## Example Usage

```typescript
import { V2ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2023-02-13T20:49:34.820Z"),
      id: "31b7be2e-64ff-43a1-aada-6669ee021358",
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

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `data`                                                      | [shared.V2Wallet](../../../sdk/models/shared/v2wallet.md)[] | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `hasMore`                                                   | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         | false                                                       |
| `next`                                                      | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `pageSize`                                                  | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         | 15                                                          |
| `previous`                                                  | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                |
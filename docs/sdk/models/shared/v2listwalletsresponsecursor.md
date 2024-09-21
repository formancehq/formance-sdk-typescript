# V2ListWalletsResponseCursor

## Example Usage

```typescript
import { V2ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2022-08-01T05:04:01.310Z"),
      id: "1037d37e-ac8f-4903-a69c-6bc5fae8bce2",
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
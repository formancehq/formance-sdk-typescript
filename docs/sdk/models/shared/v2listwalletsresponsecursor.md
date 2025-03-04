# V2ListWalletsResponseCursor

## Example Usage

```typescript
import { V2ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2023-11-13T15:24:13.369Z"),
      id: "fde094da-818a-4f9f-bfa8-7e011c5a968a",
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
# V2ListWalletsResponseCursor

## Example Usage

```typescript
import { V2ListWalletsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2ListWalletsResponseCursor = {
  data: [
    {
      createdAt: new Date("2022-06-25T20:56:27.178Z"),
      id: "9e973e92-2a57-4a15-be3e-060807e2b6e3",
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
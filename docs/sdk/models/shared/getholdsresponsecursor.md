# GetHoldsResponseCursor

## Example Usage

```typescript
import { GetHoldsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponseCursor = {
  data: [
    {
      description: "Versatile actuating data-warehouse",
      id: "00e764ad-7334-4ec1-b781-b36a08088d10",
      metadata: {
        "key": "<value>",
      },
      walletID: "<value>",
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `data`                                              | [shared.Hold](../../../sdk/models/shared/hold.md)[] | :heavy_check_mark:                                  | N/A                                                 |                                                     |
| `hasMore`                                           | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 | false                                               |
| `next`                                              | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |                                                     |
| `pageSize`                                          | *number*                                            | :heavy_check_mark:                                  | N/A                                                 | 15                                                  |
| `previous`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=        |
# GetHoldsResponseCursor

## Example Usage

```typescript
import { GetHoldsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponseCursor = {
  data: [
    {
      description: "brr ew bah whether sediment litter oxidise yowza",
      id: "3ed14a40-b354-4222-9fbf-95277c83d280",
      metadata: {
        "key": "<value>",
      },
      walletID: "<id>",
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
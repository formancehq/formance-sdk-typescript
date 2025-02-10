# GetHoldsResponseCursor

## Example Usage

```typescript
import { GetHoldsResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: GetHoldsResponseCursor = {
  data: [
    {
      description:
        "mobilize rationalize cheese of bewail whose masterpiece why rarely splurge",
      id: "49dc3042-048a-4639-8cbd-4875a2c0696a",
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
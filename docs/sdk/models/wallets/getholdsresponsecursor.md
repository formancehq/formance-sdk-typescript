# GetHoldsResponseCursor

Paginated cursor wrapping the list of holds

## Example Usage

```typescript
import { GetHoldsResponseCursor } from "@formance/formance-sdk/sdk/models/wallets";

let value: GetHoldsResponseCursor = {
  data: [
    {
      asset: "<value>",
      description: "dream finally developmental",
      id: "478db7c9-0d9d-4305-8146-2316ac01b272",
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
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

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [wallets.Hold](../../../sdk/models/wallets/hold.md)[]  | :heavy_check_mark:                                     | N/A                                                    |                                                        |
| `hasMore`                                              | *boolean*                                              | :heavy_minus_sign:                                     | Whether further pages are available                    | false                                                  |
| `next`                                                 | *string*                                               | :heavy_minus_sign:                                     | Cursor for the next page, absent on the last page      |                                                        |
| `pageSize`                                             | *number*                                               | :heavy_check_mark:                                     | Number of items requested per page                     | 15                                                     |
| `previous`                                             | *string*                                               | :heavy_minus_sign:                                     | Cursor for the previous page, absent on the first page | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=           |
# V2Cursor

## Example Usage

```typescript
import { V2Cursor } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2Cursor = {
  data: [
    {
      createdAt: new Date("2024-11-18T18:11:54.712Z"),
      id: "be6dedcb-1035-4cf1-9638-36083616f1c8",
      ledger: "<value>",
      metadata: {},
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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [orchestration.V2Wallet](../../../sdk/models/orchestration/v2wallet.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |
| `hasMore`                                                                 | *boolean*                                                                 | :heavy_minus_sign:                                                        | N/A                                                                       | false                                                                     |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `pageSize`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       | 15                                                                        |
| `previous`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                              |
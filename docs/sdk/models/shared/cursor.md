# Cursor

## Example Usage

```typescript
import { AccountType, Cursor } from "@formance/formance-sdk/sdk/models/shared";

let value: Cursor = {
  data: [
    {
      accountName: "<value>",
      connectorID: "<id>",
      createdAt: new Date("2025-09-13T08:05:18.568Z"),
      defaultAsset: "<value>",
      defaultCurrency: "<value>",
      id: "<id>",
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      type: AccountType.Internal,
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
| `data`                                                                    | [shared.PaymentsAccount](../../../sdk/models/shared/paymentsaccount.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |
| `hasMore`                                                                 | *boolean*                                                                 | :heavy_check_mark:                                                        | N/A                                                                       | false                                                                     |
| `next`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `pageSize`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       | 15                                                                        |
| `previous`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                              |
# AccountsCursor

OK

## Example Usage

```typescript
import { AccountsCursor, AccountType } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountsCursor = {
  cursor: {
    data: [
      {
        accountName: "<value>",
        connectorID: "<id>",
        createdAt: new Date("2025-11-09T04:37:38.058Z"),
        defaultAsset: "<value>",
        defaultCurrency: "<value>",
        id: "<id>",
        metadata: null,
        raw: {},
        reference: "<value>",
        type: AccountType.Unknown,
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `cursor`                                                                              | [payments.AccountsCursorCursor](../../../sdk/models/payments/accountscursorcursor.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
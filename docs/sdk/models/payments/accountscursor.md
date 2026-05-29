# AccountsCursor

OK

## Example Usage

```typescript
import { AccountsCursor, AccountType } from "@formance/formance-sdk/sdk/models/payments";

let value: AccountsCursor = {
  cursorBase: {
    data: [
      {
        accountMetadata: {},
        accountType: AccountType.Unknown,
        accountName: "<value>",
        connectorID: "<id>",
        createdAt: new Date("2024-09-07T06:59:05.942Z"),
        defaultAsset: "<value>",
        defaultCurrency: "<value>",
        id: "<id>",
        raw: null,
        reference: "<value>",
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursorBase`                                                                                  | [payments.AccountsCursorCursorBase](../../../sdk/models/payments/accountscursorcursorbase.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
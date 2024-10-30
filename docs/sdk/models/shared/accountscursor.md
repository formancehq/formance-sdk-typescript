# AccountsCursor

OK

## Example Usage

```typescript
import { AccountsCursor, AccountType } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountsCursor = {
  cursor: {
    data: [
      {
        accountName: "<value>",
        connectorID: "<id>",
        createdAt: new Date("2023-01-06T13:27:24.144Z"),
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
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `cursor`                                              | [shared.Cursor](../../../sdk/models/shared/cursor.md) | :heavy_check_mark:                                    | N/A                                                   |
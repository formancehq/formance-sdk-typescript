# AccountsCursor

## Example Usage

```typescript
import { AccountsCursor, AccountType } from "@formance/formance-sdk/sdk/models/shared";

let value: AccountsCursor = {
  cursor: {
    data: [
      {
        accountName: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-02-07T05:58:14.226Z"),
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
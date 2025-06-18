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
        createdAt: new Date("2023-03-08T12:42:25.690Z"),
        defaultAsset: "<value>",
        defaultCurrency: "<value>",
        id: "<id>",
        metadata: {
          "key": "<value>",
          "key1": "<value>",
        },
        raw: null,
        reference: "<value>",
        type: AccountType.External,
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

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `cursor`                                                                          | [shared.AccountsCursorCursor](../../../sdk/models/shared/accountscursorcursor.md) | :heavy_check_mark:                                                                | N/A                                                                               |
# V2AccountsCursorResponse

## Example Usage

```typescript
import { V2AccountsCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2AccountsCursorResponse = {
  cursor: {
    data: [
      {
        v2Volumes: {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
          "EUR": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        v2Volumes1: {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
          "EUR": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        address: "users:001",
        firstUsage: new Date("2023-01-01T00:00:00Z"),
        insertionDate: new Date("2023-01-01T00:00:00Z"),
        metadata: {
          "admin": "true",
        },
        updatedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [ledger.V2AccountsCursorResponseCursor](../../../sdk/models/ledger/v2accountscursorresponsecursor.md)     | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `resource`                                                                                                | [ledger.V2AccountsCursorResponseResource](../../../sdk/models/ledger/v2accountscursorresponseresource.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
# V2TransactionsCursorResponse

## Example Usage

```typescript
import { V2TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2TransactionsCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "aW0gdmVuaWFtLCBxdWlzIG5vc3RydWQ=",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                          | [ledger.V2TransactionsCursorResponseCursor](../../../sdk/models/ledger/v2transactionscursorresponsecursor.md)     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `resource`                                                                                                        | [ledger.V2TransactionsCursorResponseResource](../../../sdk/models/ledger/v2transactionscursorresponseresource.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
# V2TransactionsCursorResponse

## Example Usage

```typescript
import { V2TransactionsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

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
| `cursor`                                                                                                          | [shared.V2TransactionsCursorResponseCursor](../../../sdk/models/shared/v2transactionscursorresponsecursor.md)     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `resource`                                                                                                        | [shared.V2TransactionsCursorResponseResource](../../../sdk/models/shared/v2transactionscursorresponseresource.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
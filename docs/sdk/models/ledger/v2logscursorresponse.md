# V2LogsCursorResponse

## Example Usage

```typescript
import { V2LogsCursorResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LogsCursorResponse = {
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

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | [ledger.V2LogsCursorResponseCursor](../../../sdk/models/ledger/v2logscursorresponsecursor.md)     | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `resource`                                                                                        | [ledger.V2LogsCursorResponseResource](../../../sdk/models/ledger/v2logscursorresponseresource.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
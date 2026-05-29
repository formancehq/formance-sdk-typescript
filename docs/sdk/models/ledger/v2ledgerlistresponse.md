# V2LedgerListResponse

## Example Usage

```typescript
import { V2LedgerListResponse } from "@formance/formance-sdk/sdk/models/ledger";

let value: V2LedgerListResponse = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [ledger.V2LedgerListResponseCursor](../../../sdk/models/ledger/v2ledgerlistresponsecursor.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
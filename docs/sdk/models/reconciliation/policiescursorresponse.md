# PoliciesCursorResponse

OK

## Example Usage

```typescript
import { PoliciesCursorResponse } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: PoliciesCursorResponse = {
  cursor: {
    data: [],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                          | [reconciliation.PoliciesCursorResponseCursor](../../../sdk/models/reconciliation/policiescursorresponsecursor.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
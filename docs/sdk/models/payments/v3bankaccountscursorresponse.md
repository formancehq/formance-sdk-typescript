# V3BankAccountsCursorResponse

## Example Usage

```typescript
import { V3BankAccountsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3BankAccountsCursorResponse = {
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
| `cursor`                                                                                                          | [payments.V3BankAccountsCursorResponseCursor](../../../sdk/models/payments/v3bankaccountscursorresponsecursor.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
# BankAccountsCursor

OK

## Example Usage

```typescript
import { BankAccountsCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccountsCursor = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | [payments.BankAccountsCursorCursor](../../../sdk/models/payments/bankaccountscursorcursor.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
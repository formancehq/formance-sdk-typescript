# BankAccountsCursor

OK

## Example Usage

```typescript
import { BankAccountsCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: BankAccountsCursor = {
  cursorBase: {
    data: [],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursorBase`                                                                                          | [payments.BankAccountsCursorCursorBase](../../../sdk/models/payments/bankaccountscursorcursorbase.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
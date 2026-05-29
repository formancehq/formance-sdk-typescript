# PaymentsCursor

OK

## Example Usage

```typescript
import { PaymentsCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentsCursor = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursorBase`                                                                                  | [payments.PaymentsCursorCursorBase](../../../sdk/models/payments/paymentscursorcursorbase.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
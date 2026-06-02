# PaymentsCursor

OK

## Example Usage

```typescript
import { PaymentsCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: PaymentsCursor = {
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `cursor`                                                                              | [payments.PaymentsCursorCursor](../../../sdk/models/payments/paymentscursorcursor.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
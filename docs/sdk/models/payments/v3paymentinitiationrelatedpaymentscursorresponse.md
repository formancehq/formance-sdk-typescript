# V3PaymentInitiationRelatedPaymentsCursorResponse

## Example Usage

```typescript
import { V3PaymentInitiationRelatedPaymentsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationRelatedPaymentsCursorResponse = {
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                                  | [payments.V3PaymentInitiationRelatedPaymentsCursorResponseCursor](../../../sdk/models/payments/v3paymentinitiationrelatedpaymentscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
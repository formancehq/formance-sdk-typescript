# V3PaymentInitiationRelatedPaymentsCursorResponseCursor

Paginated cursor wrapping the payments produced by the initiation

## Example Usage

```typescript
import { V3PaymentInitiationRelatedPaymentsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationRelatedPaymentsCursorResponseCursor = {
  data: [],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `data`                                                            | [payments.V3Payment](../../../sdk/models/payments/v3payment.md)[] | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `hasMore`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               | false                                                             |
| `next`                                                            | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |                                                                   |
| `pageSize`                                                        | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               | 15                                                                |
| `previous`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                      |
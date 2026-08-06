# V3PaymentsCursorResponse

## Example Usage

```typescript
import { V3PaymentsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentsCursorResponse = {
  cursor: {
    data: [
      {
        amount: 68747n,
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2025-11-06T22:03:38.430Z"),
        id: "<id>",
        initialAmount: 121358n,
        provider: "<value>",
        reference: "<value>",
        scheme: "<value>",
        status: "CANCELLED",
        type: "OTHER",
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | [payments.V3PaymentsCursorResponseCursor](../../../sdk/models/payments/v3paymentscursorresponsecursor.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
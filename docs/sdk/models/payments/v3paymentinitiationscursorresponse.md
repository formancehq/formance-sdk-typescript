# V3PaymentInitiationsCursorResponse

## Example Usage

```typescript
import { V3PaymentInitiationsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationsCursorResponse = {
  cursor: {
    data: [
      {
        amount: 625271n,
        asset: "<value>",
        connectorID: "<value>",
        createdAt: new Date("2024-05-18T16:35:49.970Z"),
        description: "damaged futon tuba",
        id: "<id>",
        provider: "<value>",
        reference: "<value>",
        scheduledAt: new Date("2024-07-28T07:43:00.321Z"),
        status: "REVERSE_PROCESSING",
        type: "UNKNOWN",
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                      | [payments.V3PaymentInitiationsCursorResponseCursor](../../../sdk/models/payments/v3paymentinitiationscursorresponsecursor.md) | :heavy_check_mark:                                                                                                            | Paginated cursor wrapping the list of payment initiations                                                                     |
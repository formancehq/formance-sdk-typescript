# V3PaymentInitiationAdjustmentsCursorResponse

## Example Usage

```typescript
import { V3PaymentInitiationAdjustmentsCursorResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: V3PaymentInitiationAdjustmentsCursorResponse = {
  cursor: {
    data: [
      {
        createdAt: new Date("2026-06-07T01:49:10.843Z"),
        id: "<id>",
        status: "FAILED",
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

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                          | [payments.V3PaymentInitiationAdjustmentsCursorResponseCursor](../../../sdk/models/payments/v3paymentinitiationadjustmentscursorresponsecursor.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |